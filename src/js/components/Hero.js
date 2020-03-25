import React, { Component } from 'react';


class Hero extends Component{
  render(){
    return (
      <div className="Hero" aria-live="polite">
          
        <section className="hero-top-text">
            <div className="container">
                <div className="hero__content">
                    {//this is copy for the top area of hero in privacy and cookie page
                    }
                    <p className="hero__content__paragraph" id="top-hero-content">The Times and Your Data</p>
                    <h1 className="hero__content__title">Privacy Policy</h1>
                </div>
            </div>
        </section>
        {// /.hero-top-text 
        }
  
        <header className="hero has-text ">
            <div className="container">
                <div className="hero__content">
                    <p className="hero__content__paragraph">The Times and Your Data</p>
                    <h1 className="hero__content__title" id="hero-content">The trust of our readers is essential.</h1>
                </div>
                
            </div> 
        </header>
        {// /.hero 
        }

      </div>
    );
  }
}

export default Hero;