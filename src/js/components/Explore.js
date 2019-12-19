import React, { Component } from 'react';
import { Link } from "react-router-dom";

//SVG
import { ReactComponent as RightArrow } from './svg_components/right-arrow.svg';

//images
// import  PrivatePolicyThumbnail from 'https://mwcm.nyt.com/dam/LP/privacy-page/img/privatepolicy_thumbnail.jpg';
// import  CookiePolicyThumbnail from 'https://mwcm.nyt.com/dam/LP/privacy-page/img/cookiepolicy_thumbnail.jpg';

class Explore extends Component{

    startTop = () =>{
        window.scrollTo(0, 0)
    }
    
    render(){

        return (

            <div className="Explore">

                <section className="explore">
                    <div className="container">
                        <div className="round-corner-box explore-box">
                            <h3 className="explore-box__title">EXPLORE MORE</h3>

                            <div className="explore-box__buttons">
                                <Link className="explore-box__button privacy-policy" to="/subscription/privacy-policy/privacy" onClick={this.startTop}>
                                    <div className="explore-box__button__img-holder "></div>
                                    <div className="explore-box__button__content">
                                        <p className="explore-box__button__content__text">Our Privacy Policy</p>
                                        <div className="explore-box__button__content__arrow"><RightArrow/></div>
                                    </div>
                                </Link>
                                <Link className="explore-box__button cookie-policy" to="/subscription/privacy-policy/cookie" onClick={this.startTop}>
                                    <div className="explore-box__button__img-holder"></div>
                                    <div className="explore-box__button__content">
                                        <p className="explore-box__button__content__text">Our Cookie Policy</p>
                                        <div className="explore-box__button__content__arrow"><RightArrow/></div>
                                    </div>
                                </Link>
                            </div>

                        </div>

                    </div>

                </section>

            </div>
        );
    }
}

export default Explore;