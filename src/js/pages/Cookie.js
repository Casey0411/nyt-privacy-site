import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

//components
import HeroSection from '../components/HeroSection';
import FaqTemplate from '../components/FaqTemplate';

function Cookie (){
    return (
        <Fade>
            <div className="Cookie">
            <HeroSection />

            <section className="main-section">
            <div className="container">
                <div className="main__content">
                <h1 className="main__content__title">The New York Times Company Cookie Policy</h1>
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

export default Cookie;