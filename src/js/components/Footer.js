import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import { ReactComponent as NytLogo } from './svg_components/nytlogo.svg';

export class Footer extends Component {

    render() {
        
        return (
            <div className='Footer'>

                <footer className="footer">
                    <div className="footer__logo">
                        <a className="nyt_logo" href='https://www.nytimes.com/'>
                            <NytLogo/> 
                        </a>
                        <p className="footer__text">&copy;<span className="current-year">2019</span> The New York Times Company</p>
                    </div>
                </footer>

            </div>
        )
    }
}

export default Footer;
