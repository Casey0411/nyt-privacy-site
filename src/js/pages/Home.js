import React, { Component } from 'react';
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';

//components
import HeroSection from '../components/HeroSection';
import FaqComponent from '../components/FaqComponent';
import Explore from '../components/Explore';
import PrivacyProject from '../components/PrivacyProject';
import QuestionForm from '../components/QuestionForm';

//svg
import { ReactComponent as DownArrow } from '../components/svg_components/down-arrow.svg';

function Home (){
  
    return (
      <Fade>
        <div className="Home">
              <HeroSection />

              <section className="blurb-section">
                  <div className="container">
                      <div className="blurb-content">
                          <p className="blurb-content__paragraph">When it comes to readers’ data, we value their privacy and security.</p>
                          <p className="blurb-content__paragraph">We created this page to help answer our readers’ questions about how we use their data. This topic has become important to many readers; by explaining how it all works, we hope to empower readers to make better informed decisions about their data.</p>
                      </div>
                      <Link className="arrow"
                        to="faq-section"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                      >
                        <DownArrow/>
                      </Link>
                  </div>
              </section>

              <FaqComponent/>
              <Explore/>
              <PrivacyProject/>
              <QuestionForm/>
        </div>
      </Fade>
    );
}

export default Home;