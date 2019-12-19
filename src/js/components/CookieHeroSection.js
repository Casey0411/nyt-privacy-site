import React, { Component } from 'react';


class CookieHeroSection extends Component{
  render(){
    return (
      <div className="HeroSection">
          
        <section className="hero-top-text">
            <div className="container">
                <div className="hero__content">
                    {//this is copy for the top area of hero in privacy and cookie page
                    }
                    <p className="hero__content__paragraph">The Times and Your Data</p>
                    <h1 className="hero__content__title">Cookie Policy</h1>
                </div>
            </div>
        </section>
        {// /.hero-top-text 
        }

        <header className="hero has-text ">
            <div className="container">

            </div> 
        </header>
        {// /.hero 
        }

      </div>
    );
  }
}

export default CookieHeroSection;