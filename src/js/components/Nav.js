import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SlideToggle from 'react-slide-toggle';

//svg
import { ReactComponent as NytLogo } from './svg_components/nytlogo.svg';
import { ReactComponent as MenuIcon } from './svg_components/hamburger.svg';
import { ReactComponent as CloseIcon } from './svg_components/close-icon.svg';

class Nav extends Component {

    state = {
        on : false,
    }

    toggle = () =>{
        this.setState({
            on: !this.state.on
        })
    }

    render() {

        return (

            <div className='Nav'>
             
                <div className='top-bar'>   
                    <div className='container'>
                        <div className='logo'>
                            <a className='nyt_logo' href='https://www.nytimes.com/'>
                                <NytLogo/>     
                            </a>
                            <p className='logo__text'>The Times and your Data</p>
                            {//this.state.on &&  <h1>Toggle Me</h1>
                            }
                            <button className='mobile-menu-btn' onClick={this.toggle}>
                                {this.state.on ? (
                                    <CloseIcon/>
                                ) : (
                                    <MenuIcon/>
                                )}
                            </button>
                        </div>

                        <nav className={"nav " + (this.state.on ? 'open' : 'close')}>
                            <div className='nav__links'>
                                <Link className='nav__link' to="/" onClick={this.toggle}>Privacy Hub</Link>
                                <Link className='nav__link' to="/privacy" onClick={this.toggle}>Privacy Policy</Link>
                                <Link className='nav__link' to="/cookie" onClick={this.toggle}>Cookie Policy</Link>
                            </div>
                        </nav>

                    </div>  

                </div>
            </div>
        )
    }
}

export default Nav;
