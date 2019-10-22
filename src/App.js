import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
// import Header from './components/layout/Header';
// import Todos from './components/Todos';
// import AddTodo from './components/AddTodo';
// import uuid from 'uuid';

//Components
import Nav from './js/components/Nav';
import Home from './js/pages/Home';
import Privacy from './js/pages/Privacy';  
import Cookie from './js/pages/Cookie';    
import Footer from './js/components/Footer';

//Styles
import './sass/style.scss';  

class App extends Component{
  
  render(){ 

    return (
      <Router>
        
          <div className="App">
            <Nav mobileMenuToggle={this.mobileMenuToggle}/>

            <main className="main-content">
              <Switch>
                <Route exact="false" strict="false" path="/privacy-policy">
                  <Home/>
                </Route>

                <Route exact="false" strict="false" path="/subscription/privacy-policy">
                  <Home/>
                </Route>

                <Route path="/privacy-policy/privacy" exact>
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

              </Switch> 
            </main>
            
            <Footer/>
          
          </div>
        
      </Router>
      
    );
  }
  
}

export default App;
