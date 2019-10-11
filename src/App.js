import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
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
            
            <Route path="/" exact render={() =>{return <Home/>}} />
            <Route path="/privacy" exact render={() =>{return <Privacy/>}} />
            <Route path="/cookie" exact render={() =>{return <Cookie/>}} />

          </main>
          
          <Footer/>
        
        </div>
      </Router> 
    );
  }
  
}

export default App;
