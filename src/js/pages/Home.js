import React from 'react';
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Fade from 'react-reveal/Fade';

//components
import HeroSection from '../components/HeroSection';
import FaqComponent from '../components/FaqComponent';
import Explore from '../components/Explore';
import QuestionForm from '../components/QuestionForm';

//svg
import { ReactComponent as DownArrow } from '../components/svg_components/down-arrow.svg';

function Home (){

    function startTop() {
        window.scrollTo(0, 0)
    }

    return (
      <Fade>
        <div className="Home">
              <HeroSection />

              <section className="blurb-section">
                  <div className="container">
                      <div className="blurb-content">
                          <p className="blurb-content__paragraph">Our readers should know how we handle their data.</p>
                          <p className="blurb-content__paragraph">We created this page to answer our readers’ questions about how we use their personal data. This topic is important to many readers, and we value their right to understand how it works.</p>
                          <p className="blurb-content__paragraph">This F.A.Q. applies to nytimes.com readers. If you want to dive deeper into the details, please see our <NavLink to="/privacy" onClick={()=>{startTop()}}>Privacy Policy</NavLink>.</p> 
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
              {
              //<PrivacyProject/>
              }
              <QuestionForm/>
        </div>
      </Fade>
    );
}

export default Home;
