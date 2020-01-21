import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { ReactComponent as NytLogo } from './svg_components/nytlogo.svg';

export class Footer extends Component {

    render() {

        function startTop() {
            window.scrollTo(0, 0)
        }

        return (
            <div className='Footer'>

                <footer className="footer-section">
                    <div className="footer-section__logo">
                        <a className="nyt_logo" href='https://www.nytimes.com/' aria-label='The New York Times'>
                            <NytLogo/>
                        </a>
                        <p className="footer-section__text">&copy;<span className="current-year">2020</span> The New York Times Company</p>
                        <a className="ccpaOptOut" role="button" tabIndex="0">Do not sell my personal information</a>
                    </div>

                    <div className="footer_links">
                        <NavLink className='footer_links__link' exact={true} to="/" onClick={()=>{startTop()}}>Privacy F.A.Q.</NavLink>
                        <NavLink className='footer_links__link' to="/privacy" onClick={()=>{startTop()}}>Privacy Policy</NavLink>
                        <NavLink className='footer_links__link' to="/cookie" onClick={()=>{startTop()}}>Cookie Policy</NavLink>
                        <a href="https://help.nytimes.com/hc/en-us/articles/115014893428-Terms-of-service" className='footer_links__link'>Terms of Service</a>
                    </div>

                </footer>

                <div className="ccpaSnackbar ccpaSnackbarHidden" role="status"></div>

            </div>
        )
    }
}

export default Footer;
