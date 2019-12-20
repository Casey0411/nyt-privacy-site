import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import $ from 'jquery';

//components
import CookieHeroSection from '../components/CookieHeroSection';

import CookieFaqTemplate from '../components/CookiesFaqTemplate';

function Cookie(){
    
    return (
        
        <Fade>
            <div className="Cookie">
                <CookieHeroSection />

                <section className="main-section">
                <div className="container">
                    <div className="main__content">
                        <h1 className="main__content__title">The New York Times Company Cookie Policy</h1>
                        <p className="last-update-time-text">Last revised on December 27, 2019</p>
                        <p className="main__content__paragraph">This Cookie Policy explains how we use cookies and similar tracking methods (such as pixels, SDKs, JavaScript, device identifiers, etc., which we refer to as “trackers”) when you visit our site. “Our site” means our websites, emails, apps and other services that link to this Cookie Policy. For a complete list of our cookie policies covering all Times properties, <a href="https://www.nytimes.com/subscription/dg-cookie-policy/cookie-policy.html">visit this page.</a></p>
                        <p className="main__content__paragraph">This policy explains what various tracking methods are, and why they are used. It also explains your right to control their use.</p>
                        <p className="main__content__paragraph">We may change this Cookie Policy at any time. Check the “last revised” date at the top of this page to see when this Cookie Policy was last revised. Any change becomes effective when we post the revised Cookie Policy on or through our site.</p>
                        <p className="main__content__paragraph">If you have any questions, please contact us by email at privacy@nytimes.com. You can also write to us: The New York Times Company, 620 Eighth Avenue, New York, N.Y. 10018, attn.: Privacy Counsel.</p>
                    </div>
                </div>
                </section>
                
                <CookieFaqTemplate/>

            </div>
        </Fade>
    );
}

export default Cookie;