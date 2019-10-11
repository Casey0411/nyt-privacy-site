import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

//components
import Hero from '../components/Hero';
import FaqTemplate from '../components/FaqTemplate';

class Privacy extends Component{
  render(){
    return (
      <Fade>
        <div className="Privacy">
          <Hero />

          <section className="main-section">
            <div className="container">
              <div className="main__content">
                <h1 className="main__content__title">The New York Times Company Privacy Policy</h1>
                <p className="last-update-time-text">Last Updated on Xxxxxx XX, 2019</p>
                <p className="main__content__paragraph">Our mission is to seek the truth and help people understand the world. That mission guides our approach to your privacy. We want you to understand how we collect, use and disclose your information. We also want you to understand your rights and choices.</p>
              </div>
            </div>
          </section>

          <FaqTemplate/>
        </div>
      </Fade>
      
    );
  }
}

export default Privacy;