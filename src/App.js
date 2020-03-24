import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch, HashRouter, Redirect } from "react-router-dom";

//Components
import Nav from './js/components/Nav';
import Home from './js/pages/Home';
import Privacy from './js/pages/Privacy';
import Cookie from './js/pages/Cookie';
import ThirdParty from './js/pages/ThirdParty';
import Footer from './js/components/Footer';
import Announcements from './js/components/Announcements';
//import { removeHash } from 'react-scrollable-anchor'

//Styles
import './sass/style.scss';

class App extends Component{

  state ={
    menuOn : false,
  }

  constructor(props) {
    super(props);
    this.state = {
        windowSize: window.innerWidth,
        isMenuHidden: true,
        isContentHidden: false,
        message: null
    };
  }

  toggleMenu = (event) =>{

    let windowWidth = window.innerWidth;//getting the window width

    if (windowWidth < 768){//checking if window width is in mobile
      this.setState({
        menuOn: !this.state.menuOn,
        isMenuHidden: !this.state.isMenuHidden,
        isContentHidden: !this.state.isContentHidden
      })
    }else{
      this.setState({
        menuOn: false
      })
    }

    window.scrollTo(0, 0)

    //alert(buttonText);

    // if(buttonText === "Privacy F.A.Q."){
    //   this.setState({
    //     message: 'this is the Privacy F.A.Q. page'
    //   })
    // }else if (buttonText === "Privacy Policy"){
    //   this.setState({
    //     message: 'this is the Privacy Policy page'
    //   })
    // }else if (buttonText === "Cookie Policy"){
    //   this.setState({
    //     message: 'this is the Cookie Policy page'
    //   })
    // }



  }

  handleResize = e => {
    const windowSize = window.innerWidth;
    let isMenuHidden = true;
    let isContentHidden = false;
    const menuButton = document.querySelector(".mobile-menu-btn");


    if(windowSize >= 768){
      isMenuHidden = false;
      isContentHidden = false;

    }else{// mobile view

        if(menuButton.classList.contains("active")){
            isMenuHidden = false;
            isContentHidden = true;
            //console.log("menu button is active so Menu is" + isMenuHidden + " , and the rest of the content is " + isContentHidden);
        }else{
            isMenuHidden = true;
            isContentHidden = false;
            //console.log("menu button is not active so Menu is " + isMenuHidden + " , and the rest of the content is " + isContentHidden);
        }

        //(isMenuOn ? isMenuHidden = false : isMenuHidden = true)
    }

    this.setState(prevState => {
        return {
          windowSize,
          isMenuHidden,
          isContentHidden
        };
    });

  }

  init = e => {

    const menuButton = document.querySelector(".mobile-menu-btn");

    const closeModal = (e) =>{
      if(menuButton.classList.contains("active")){
        //alert("closing modal");
        if(window.innerWidth < 768){
          //alert("closing modal in mobile");
          this.setState({
            menuOn: !this.state.menuOn,
            isMenuHidden: !this.state.isMenuHidden,
            isContentHidden: !this.state.isContentHidden
          })
        }
      }
    }

    window.onkeyup = function (event) {
      if (event.keyCode === 27) {
        closeModal();
        //console.dir(this);
      }
    }



  }

  setAnounceMessage = () =>{

    //alert("SET Anounce message");

    if (window.location.href.indexOf("privacy") > -1) {
      this.setState({
        message: 'this is the Privacy Policy page'
      })
    }else if(window.location.href.indexOf("cookie") > -1){
      this.setState({
        message: 'this is the Cookie Policy page'
      })
    }else if(window.location.href.indexOf("thirdparty") > -1){
      this.setState({
        message: 'this is the Third Party page'
      })
    }else{
      this.setState({
        message: 'this is the Privacy F.A.Q. page'
      })
    }
  }

  componentDidMount() {
    document.title = 'The New York Times Privacy Policy';

    window.addEventListener("resize", this.handleResize);
    window.addEventListener("load", this.handleResize);
    window.addEventListener("load", this.init);
    window.addEventListener("load", this.setAnounceMessage);
    window.addEventListener("hashchange", this.setAnounceMessage);

  }

  componentWillUnmount() {
    //window.removeEventListener("load", this.init);
    window.removeEventListener("resize", this.handleResize);
  }

  render(){

    // console.log('window size is ' +this.state.windowSize);
    // console.log('Menu hidden is ' +this.state.isMenuHidden);
    // console.log('Content hidden is ' +this.state.isContentHidden);

    return (

      <HashRouter history={Router.hashHistory}>

          <div className="App">


            <Announcements message={this.state.message}/>

            <Fragment>

              <main className="main-content" aria-hidden={(this.state.menuOn ? true : false)} hidden={this.state.isContentHidden? "hidden": ""} >

                <Switch>
                  {/*
                  <Route exact="false" strict="false" path="/privacy-policy/">
                    <Home/>
                  </Route>

                  <Route exact="false" strict="false" path="/subscription/privacy-policy/">
                    <Home/>
                  </Route>

                  <Route path="/privacy-policy/privacy" exact>
                    <Privacy/>
                  </Route>

                  <Route path="/subscription/privacy-policy/privacy" exact>
                    <Privacy/>
                  </Route>

                  <Route path="/subscription/privacy-policy/privacy" exact>
                    <Privacy/>
                  </Route>

                  <Route path="/privacy-policy/cookie">
                    <Cookie/>
                  </Route>

                  <Route path="/subscription/privacy-policy/cookie">
                    <Cookie/>
                  </Route>

                  <Route path="/privacy-policy/thirdparty">
                    <ThirdParty/>
                  </Route>

                  <Route path="/subscription/privacy-policy/thirdparty">
                    <ThirdParty/>
                  </Route>
                  */}

                  <Redirect from='/:page(\w+):rest(&.*)' to='/:page' />
                  <Route exact path="/privacy" component={Privacy}/>
                  <Route exact path="/cookie" component={Cookie} />
                  <Route exact path="/thirdparty" component={ThirdParty} />
                  <Route component={Home} />

                </Switch>

              </main>

            </Fragment>

            <Footer isMenuOn={this.state.menuOn} isContentHidden={this.state.isContentHidden} />

            <Nav mobileMenuToggle={this.mobileMenuToggle} toggleMenu={this.toggleMenu} isMenuOn={this.state.menuOn} isMenuHidden={this.state.isMenuHidden}/>

          </div>

      </HashRouter>

    );
  }

}

export default App;
