import React, { Component, Fragment } from 'react';
import { NavLink } from "react-router-dom";   
import { ReactComponent as NytLogo } from './svg_components/nytlogo.svg';

export class Footer extends Component {

    render() {

        const {isMenuOn} = this.props;
        const {isContentHidden} = this.props;

        function startTop() {
            window.scrollTo(0, 0)   
        }



        return (
            <Fragment>
            <div className='Footer' id="footer" aria-hidden={(isMenuOn ? true : false )} hidden={(isContentHidden ? "hidden" : "")}>   

                <footer className="footer-section">
                    <div className="footer-section__logo">
                        <a className="nyt_logo" href='https://www.nytimes.com/' aria-label='The New York Times'>
                            <NytLogo/>
                        </a>
                        <p className="footer-section__text">&copy;<span className="current-year">{new Date().getFullYear()}</span> The New York Times Company</p>
                        <a className="ccpaOptOut" role="button" tabIndex="0">Do not sell my personal information</a>
                    </div>

                    <div className="footer_links">
                        <NavLink className='footer_links__link' exact={true} to="/" activeClassName='active' onClick={()=>{startTop()}}>Privacy F.A.Q.</NavLink>
                        <NavLink className='footer_links__link' to="/privacy" activeClassName='active' onClick={()=>{startTop()}}>Privacy Policy</NavLink>
                        <NavLink className='footer_links__link' to="/cookie" activeClassName='active' onClick={()=>{startTop()}}>Cookie Policy</NavLink>
                        <a href="https://help.nytimes.com/hc/en-us/articles/115014893428-Terms-of-service" className='footer_links__link'>Terms of Service</a>
                    </div>

                </footer>

                <div className="ccpaSnackbar ccpaSnackbarHidden" role="status"></div>

            </div>
            </Fragment>
        )
    }
}

export default Footer;
