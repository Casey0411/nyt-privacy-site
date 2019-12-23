import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

//svg
import { ReactComponent as NytLogo } from './svg_components/nytlogo.svg';
import { ReactComponent as MenuIcon } from './svg_components/hamburger.svg';
import { ReactComponent as CloseIcon } from './svg_components/close-icon.svg';

export class Nav extends Component {

    state = {
        on : false,
    }

    toggle = () =>{

        this.setState({
            on: !this.state.on
        })

        window.scrollTo(0, 0)

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
                            <button className={'mobile-menu-btn' + (this.state.on ? ' active' : '')} onClick={this.toggle}>
                                {this.state.on ? (
                                    <CloseIcon/>
                                ) : (
                                    <MenuIcon/>
                                )}
                            </button>
                        </div>

                        <nav className={"nav " + (this.state.on ? 'open' : 'close')}>
                            <div className='nav__links'>
                                {
                                    /*
                                <NavLink className='nav__link' exact={true} activeClassName='active' to="/subscription/privacy-policy" onClick={this.toggle}>Privacy F.A.Q.</NavLink>
                                <NavLink className='nav__link' activeClassName='active' to="/subscription/privacy-policy/privacy" onClick={this.toggle}>Privacy Policy</NavLink>
                                <NavLink className='nav__link' activeClassName='active' to="/subscription/privacy-policy/cookie" onClick={this.toggle}>Cookie Policy</NavLink>
                                    */
                                }
                                <NavLink className='nav__link' exact={true} activeClassName='active' to="/" onClick={this.toggle}>Privacy F.A.Q.</NavLink>
                                <NavLink className='nav__link' activeClassName='active' to="/privacy" onClick={this.toggle}>Privacy Policy</NavLink>
                                <NavLink className='nav__link' activeClassName='active' to="/cookie" onClick={this.toggle}>Cookie Policy</NavLink>
                            </div>
                        </nav>

                    </div>

                </div>
            </div>
        )
    }
}

export default Nav;
