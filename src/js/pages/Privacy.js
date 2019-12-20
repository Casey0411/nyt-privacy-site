import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

//components
import HeroSection from '../components/HeroSection';
import FaqTemplate from '../components/FaqTemplate';

function Privacy() {
    return (
      <Fade>
        <div className="Privacy">
          <HeroSection />

          <section className="main-section">
            <div className="container">
              <div className="main__content">
                <h1 className="main__content__title">The New York Times Company Privacy Policy</h1>
                <p className="last-update-time-text">Last Updated on December 27, 2019</p>
                <p className="main__content__paragraph">At The Times, our mission is to seek the truth and help people understand the world. We want you to understand how we handle your data. We also want you to know your rights and choices.</p>
              </div>
            </div>
          </section>

          <FaqTemplate/>
        </div>
      </Fade>
      
    );
}

export default Privacy;