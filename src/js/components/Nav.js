import React, { Component, Fragment } from 'react';
import { NavLink} from "react-router-dom";

//svg
import { ReactComponent as NytLogo } from './svg_components/nytlogo.svg';
import { ReactComponent as MenuIcon } from './svg_components/hamburger.svg';
import { ReactComponent as CloseIcon } from './svg_components/close-icon.svg';

export class Nav extends Component {



    render() {

        const {toggleMenu} = this.props;
        const {isMenuOn} = this.props;
        const {isMenuHidden} = this.props;

        return (

            <Fragment>

                <div className='Nav'>

                    <div className='top-bar' role="dialog" aria-modal={(isMenuOn ? true : false )} >

                        <div className='container'>
                            <div className='logo'>
                                <a className='nyt_logo' href='https://www.nytimes.com/' aria-label='The New York Times'>
                                    <NytLogo/>
                                </a>
                                <p className='logo__text'>The Times and your Data</p>
                                {//isMenuOn &&  <h1>Toggle Me</h1>
                                }
                                <button className={'mobile-menu-btn' + (isMenuOn ? ' active' : '')} onClick={toggleMenu} aria-label='navigation menu'>
                                    {isMenuOn ? (
                                        <CloseIcon/>
                                    ) : (
                                        <MenuIcon/>
                                    )}
                                </button>
                            </div>

                            <nav className={"nav " + (isMenuOn ? 'open' : 'close')} aria-label='dialog_title' hidden={(isMenuHidden ? "hidden" : "")} > {/*(isMenuOn? "hidden": "") */}
                                <div className='nav__links'>
                                    <h2 id="dialog_title" className="menu_title"> Main Menu </h2>
                                    {
                                        /*
                                    <NavLink className='nav__link' exact={true} activeClassName='active' to="/subscription/privacy-policy" onClick={toggleMenu}>Privacy F.A.Q.</NavLink>
                                    <NavLink className='nav__link' activeClassName='active' to="/subscription/privacy-policy/privacy" onClick={toggleMenu}>Privacy Policy</NavLink>
                                    <NavLink className='nav__link' activeClassName='active' to="/subscription/privacy-policy/cookie" onClick={toggleMenu}>Cookie Policy</NavLink>
                                        */
                                    }
                                    <NavLink className='nav__link' exact={true} activeClassName='active' to="/" onClick={toggleMenu}>Privacy F.A.Q.</NavLink>
                                    <NavLink className='nav__link' activeClassName='active' to="/privacy" onClick={toggleMenu}>Privacy Policy</NavLink>
                                    <NavLink className='nav__link' activeClassName='active' to="/cookie" onClick={toggleMenu}>Cookie Policy</NavLink>
                                </div>
                            </nav>

                        </div>

                    </div>
                </div>

            </Fragment>
        )
    }
}

export default Nav;
