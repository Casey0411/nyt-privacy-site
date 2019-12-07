import React, { Component } from 'react';

//images
//import  PrivacyProjectImage from 'https://mwcm.nyt.com/dam/LP/privacy-page/img/privacy_icon.jpg';

class PrivacyProject extends Component{
    
    render(){

        return (

            <div className="PrivacyProject">

                <section className="privacy-project">
                    <div className="container">
                        <div className="round-corner-box privacy-project-box">
                            <div className="privacy-project-box__image-holder">
                                <img src='https://mwcm.nyt.com/dam/LP/privacy-page/img/privacy_icon.jpg' className="privacy-project-box__image-holder__img"/>
                            </div>

                            <div className="privacy-project-box__content">
                                <h4 className="privacy-project-box__content__title"> <a href="https://www.nytimes.com/interactive/2019/opinion/internet-privacy-project.html">The Privacy Project</a></h4>
                                <p className="privacy-project-box__content__text">As companies and governments gain new powers to follow people everywhere, they erode our current conception of privacy. Our Opinion series explores the benefits and costs of this world-changing trend.</p>
                                <a className="privacy-project-box__content__cta" href="https://www.nytimes.com/interactive/2019/opinion/internet-privacy-project.html">READ</a>
                            </div>
                            
                        </div>
       
                    </div>

                </section>

            </div>
        );
    }
}

export default PrivacyProject;