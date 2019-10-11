import React, { Component } from 'react';

//SVG
import { ReactComponent as RightArrow } from './svg_components/right-arrow.svg';

//images
// import  PrivatePolicyThumbnail from 'https://mwcm.nyt.com/dam/LP/privacy-page/img/privatepolicy_thumbnail.jpg';
// import  CookiePolicyThumbnail from 'https://mwcm.nyt.com/dam/LP/privacy-page/img/cookiepolicy_thumbnail.jpg';

class Explore extends Component{
    
    render(){

        return (

            <div className="Explore">

                <section class="explore">
                    <div class="container">
                        <div class="round-corner-box explore-box">
                            <h3 class="explore-box__title">EXPLORE MORE</h3>

                            <div class="explore-box__buttons">
                                <a class="explore-box__button privacy-policy" href="">
                                    <div class="explore-box__button__img-holder "></div>
                                    <div class="explore-box__button__content">
                                        <p class="explore-box__button__content__text">Our Privacy Policy</p>
                                        <div class="explore-box__button__content__arrow"><RightArrow/></div>
                                    </div>
                                </a>
                                <a class="explore-box__button cookie-policy" href="">
                                    <div class="explore-box__button__img-holder"></div>
                                    <div class="explore-box__button__content">
                                        <p class="explore-box__button__content__text">Our Cookie Policy</p>
                                        <div class="explore-box__button__content__arrow"><RightArrow/></div>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>

                </section>

            </div>
        );
    }
}

export default Explore;