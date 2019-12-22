import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie';

//import PropTypes from 'prop-types';
import Accordion from './Accordion'

//SVG
import { ReactComponent as CollapseExpand } from './svg_components/collapse-expand.svg';
import { ReactComponent as Collapse } from './svg_components/collapse.svg';
import { ReactComponent as Expand } from './svg_components/expand.svg';


class CookieFaqTemplate extends Component{

    state ={
        reachedTop :false,
    }

    handleWaypointEnter = () =>{
        console.log('reach top');
    }

    constructor(props) {
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll (){
        this.setState({scroll: window.scrollY});
    }
  
    componentDidMount() {
        const el = document.querySelector('.faq .container');
        this.setState({top: el.offsetTop + 20, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }


    render(){                                                         

        var getCookie = function (c_name) {
            var cookval = '';
            var i, x, y, ARRcookies = document.cookie.split(";");
            for (i = 0; i < ARRcookies.length; i++) {
                x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
                y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
                x = x.replace(/^\s+|\s+$/g, "");
                if (x == c_name) {
                    cookval = unescape(y);
                }
            }
            return cookval;
        };

        if(getCookie('nyt-purr').indexOf('s') > -1) {
            console.log('console log message for cookie: character IS THERE!');
            
            $("body").addClass("show-ccpa-content");
        }

   
        // function scrollMount(){

        //     $(window).on('scroll', function() {
        //         var scrollTop = $(this).scrollTop();

  
        //         var topDistance = $('.faq').offset().top;

        //         if ( (topDistance - 50) < scrollTop ) {
        //             //alert( ' was scrolled to the top' );
        //             $('.faq__sidebar').addClass('fixed-nav');
        //         }else{
        //             $('.faq__sidebar').removeClass('fixed-nav');
        //         } 
        //     });

        // }  

        // scrollMount();

        function FaqOpen(faqNumber) {
            var faqId = "#faq"+faqNumber;

            if ($(window).width() < 768) {
                $(faqId + '.notActive .question').trigger('click');
            }
            
        }  

        function toggleAllQuestions () {
    
            if($('.faq-question.active').length === $('.faq-question').length){
                $('.question').trigger('click');
            }else{
                $('.faq-question.notActive .question').trigger('click');
            }
    
        }

        const faqNumbers = {
            number1: "1",
            number1: "2",
            number1: "3 "
        }

        return (

            <div className="FaqTemplate CookieFaq">

                <section className="faq">
                
                    <div className="container">

                        <div className={"faq__sidebar "  + (this.state.scroll > this.state.top ? "fixed-nav" : "")}> 
                            <ul className="faq__idebar__ul">
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">1.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`cookieFaq1`} to={`cookieFaq1`} offset={-90} spy={true} smooth={true} duration={500} >What Is a Tracker?</Link>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">2.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`cookieFaq2`} to={`cookieFaq2`} offset={-50} spy={true} smooth={true} duration={500} >What Trackers Do We Use?</Link>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">3.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`cookieFaq3`} to={`cookieFaq3`} offset={-50} spy={true} smooth={true} duration={500} >How Do I Manage Trackers?</Link>
                                </li>
                            </ul>

                        </div>

                        <div className="faq__main-content">

                            {/*

                            <p className="faq__main-content__parapgraph">This policy describes how we handle your data when you use &ldquo;Times Services,&rdquo; listed below:</p>

                            <ul className="faq__main-content__ul">
                                <li className="faq__main-content__ul__li">The New York Times newspaper, plus our International Edition</li>
                                <li className="faq__main-content__ul__li">Our websites, <span className="italic">like nytimes.com</span></li>
                                <li className="faq__main-content__ul__li">Our apps, <span className="italic">like the New York Times app and the New York Times Crossword app</span></li>
                                <li className="faq__main-content__ul__li">Our email newsletters, <span className="italic">like Cooking and Morning Briefing</span></li>
                                <li className="faq__main-content__ul__li">Our pages or ads on social media networks, <span className="italic">like our Facebook and Instagram pages</span></li>
                                <li className="faq__main-content__ul__li">Anywhere we gather information from you and refer you to this Privacy Policy</li>
                            </ul>

                            <p className="faq__main-content__parapgraph">How we handle information about you depends on which Times Services you use — and how you use them. We use different information about print subscribers than website visitors.</p>
                            <p className="faq__main-content__parapgraph">Be aware that certain Times Services work differently. Some have additional terms that supplement this policy <span className="italic">(e.g., <a href="https://help.nytimes.com/hc/en-us/articles/360004901454-Reader-submission-terms">Reader Submissions</a>)</span>. Others refer to a different privacy policy altogether, so this one does not apply.</p>

                            */}

                            <div className="mobile-collapse">
                                <button className="all-faq-trigger" onClick={toggleAllQuestions}>
                                    <CollapseExpand/>
                                </button>
                            </div>

                            <div className="question-answers-holder">

                                <Accordion title="What Is a Tracker?" number="1" name="cookieFaq">
                                    <p className="answer__text">The following describes the information we collect and how we obtain it.</p>
                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">A) Cookies</strong>
                                    </p>
                                    <p className="answer__text">A cookie is a small string of text that a website (or online service) stores on a user’s browser. It saves data on your browser about your visit to our site or other sites. It often includes a unique identifier (e.g., cookie #123).</p>
                                    <p className="answer__text">&ldquo;First-party cookies&rdquo; are cookies set by us (or on our behalf) on our site. &ldquo;Third-party cookies&rdquo; are cookies set by other companies whose functionality is embedded into our site (e.g., google.com).</p>
                                    <p className="answer__text">&ldquo;Session cookies&rdquo; are temporary cookies stored on your device while you visit our site. They expire when you close your browser. &ldquo;Persistent cookies&rdquo; are stored on your browser for a period of time after you leave our site. Persistent cookies expire on a set expiration date, or when they are deleted manually.</p>
                                    <p className="answer__text">You can choose whether to accept cookies by editing your browser settings. However, if cookies are refused, your experience on our site may be worse, and some features may not work as intended.</p>

                                    <p className="answer__text" id="anchor-question1-sectionB">
                                        <strong className="answer__text__category italic">B) Pixels</strong>
                                    </p>
                                    <p className="answer__text">Pixels (also known as “web beacons,” “GIFs” or “bugs”) are one-pixel transparent images located on web pages or messages. They track whether you have opened these web pages or messages. Upon firing, a pixel logs a visit to the current page or message and may read or set cookies. </p>
                                    <p className="answer__text">Pixels often rely on cookies to work, so turning off cookies can impair them. But even if you turn off cookies, pixels can still detect a web page visit.</p>

                                    <p className="answer__text" id="anchor-question1-sectionB">
                                        <strong className="answer__text__category italic">C) Javascript</strong>
                                    </p>
                                    <p className="answer__text">JavaScript is a programming language. It can be used to write trackers that, when embedded into a page, allow us to measure how you interact with our site and other sites.</p>

                                    <p className="answer__text" id="anchor-question1-sectionB">
                                        <strong className="answer__text__category italic">D) Software Development Kits (or SDKs)</strong>
                                    </p>
                                    <p className="answer__text">SDKs are pieces of code provided by our digital vendors (e.g., third-party advertising companies, ad networks and analytics providers) in our mobile apps to collect and analyze certain device and user data.</p>

                                    <p className="answer__text" id="anchor-question1-sectionB">
                                        <strong className="answer__text__category italic">E) Device Identifiers</strong>
                                    </p>
                                    <p className="answer__text">Device identifiers are user-resettable identifiers comprised of numbers and letters. They are unique to a specific device. They are stored directly on the device. These include Apple’s ID For Advertisers (IDFA) and Google’s Android Advertising ID (AAID). They are used to recognize you and/or your devices(s) on, off and across different apps and devices for marketing and advertising purposes.</p>

                                    <p className="answer__text" id="anchor-question1-sectionB">
                                        <strong className="answer__text__category italic">F) ID Synching</strong>
                                    </p>
                                    <p className="answer__text">In order to decide what type of ad might interest you, our digital and marketing vendors sometimes link data — inferred from your browsing of other sites or collected from other sources — using a method knowns as “ID synching” or “cookie synching.” To do this, they match the tracker ID they have assigned to you with one or more tracker IDs that are held in another company’s database and that are likely also associated with you. Any of the linked trackers may have certain interests and other demographic information attributed to it. That information is then used to determine which ad to show you.</p>

                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" onClick="" >Back to top</Link>
                                </Accordion>

                                <Accordion title="What Trackers Do We Use?" number="2" name="cookieFaq">
                                    <p className="answer__text">Below is a list of the types of trackers that appear on our site.</p>
                                    <p className="answer__text">
                                        <strong className="answer__text__category">Essential Trackers</strong>
                                    </p>
                                    <p className="answer__text">Essential trackers are required for our site to operate. They allow you to navigate our site and use its services and features (e.g., cookies that help you stay logged in). Without essential trackers, our site will not run smoothly; in fact, our site (or certain services or features) might not even be available to you simply because of technical limitations.</p>

                                    <table className="cookie-table gdpr-more-content" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Tracker name</th>
                                                <th>Description of purpose</th>
                                                <th>If tracker is a cookie, is it a persistent or session cookie? When do persistent cookies expire?</th>
                                                <th>If tracker is a cookie, 1st party or 3rd party cookie? If 3rd party, indicate legal name and URL for cookie policy.</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td> LPSessionID </td>
                                                <td> Customer support </td>
                                                <td> session </td>
                                                <td> LivePerson </td>
                                            </tr>

                                            <tr>
                                                <td> LPVisitorID </td>
                                                <td> Customer support </td>
                                                <td> 1 year </td>
                                                <td> LivePerson </td>
                                            </tr>

                                            <tr>
                                                <td> LPVID </td>
                                                <td> Customer support </td>
                                                <td> 1 year </td>
                                                <td> LivePerson </td>
                                            </tr>

                                            <tr>
                                                <td> nyt-a </td>
                                                <td> User identification </td>
                                                <td> 1 year </td>
                                                <td> first party </td>
                                            </tr>

                                            <tr>
                                                <td> NYT-S </td>
                                                <td> User identification </td>
                                                <td> 1 year </td>
                                                <td> first party </td>
                                            </tr>
                                            <tr>
                                                <td> nyt-gdpr </td>
                                                <td> Geographic eligibility </td>
                                                <td> 4 hours </td>
                                                <td> first party </td>
                                            </tr>
                                            <tr>
                                                <td> nyt-purr </td>
                                                <td> Privacy eligibility </td>
                                                <td> 1 year </td>
                                                <td> first party </td>
                                            </tr>
                                            <tr>
                                                <td> nyt-geo </td>
                                                <td> Geographic information </td>
                                                <td> 4 hours </td>
                                                <td> first party </td>
                                            </tr>
                                            <tr>
                                                <td> edu_cig_opt </td>
                                                <td> Educational institution information </td>
                                                <td> 1 year </td>
                                                <td> first party </td>
                                            </tr>
                                            <tr>
                                                <td> b2b_cig_opt </td>
                                                <td> Business institution information </td>
                                                <td> 1 year </td>
                                                <td> first party </td>
                                            </tr>
                                            <tr>
                                                <td> optimizelyEndUserId </td>
                                                <td> Asset delivery </td>
                                                <td> 6 months </td>
                                                <td> first party </td>
                                            </tr>
                                            <tr>
                                                <td> nyt-us </td>
                                                <td> Geographic information </td>
                                                <td> 4 hours </td>
                                                <td> first party </td>
                                            </tr>
                                            <tr>
                                                <td> nyt-jkidd </td>
                                                <td> Data backend </td>
                                                <td> 1 year </td>
                                                <td> first party </td>
                                            </tr>
                                            <tr>
                                                <td> datadome </td>
                                                <td> Fraud detection </td>
                                                <td> 1 year </td>
                                                <td> DataDome </td>
                                            </tr>
                                            <tr>
                                                <td> OTZ </td>
                                                <td> Payment support (only used on the payment page, with Google Pay) </td>
                                                <td> 4 weeks </td>
                                                <td> Google </td>
                                            </tr>
                                        </tbody>

                                    </table>

                                    <p className="answer__text">
                                        <strong className="answer__text__category">Preference Trackers</strong>
                                    </p>
                                    <p className="answer__text">Preference trackers allow us to store information about your choices, settings and preferences. They also help us recognize you when you return to our site, remember your language settings (among others) and customize our site accordingly. They are not essential to the functioning of our site.</p>

                                    <table className="cookie-table gdpr-more-content" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Tracker name</th>
                                                <th>Description of purpose</th>
                                                <th>If tracker is a cookie, is it a persistent or session cookie? When do persistent cookies expire?</th>
                                                <th>If tracker is a cookie, 1st party or 3rd party cookie? If 3rd party, indicate legal name and URL for cookie policy.</th>
                                                <th>Privacy Policy and Opt-out</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td> nyt-Edition </td>
                                                <td> Remember which edition user prefers </td>
                                                <td> 1 year </td>
                                                <td> first party </td>
                                                <td></td>
                                            </tr>

                                        </tbody>

                                    </table>

                                    <p className="answer__text">
                                        <strong className="answer__text__category">Analytics Trackers</strong>
                                    </p>
                                    <p className="answer__text">Analytics trackers collect or use information about your site use, which helps us improve our site. Among the uses of analytics trackers are to show us which pages are most frequently visited, help us record difficulties you have with our site, track subscription purchases and behaviors leading to subscription purchases, and measure how well ads perform. </p>
                                    <p className="answer__text">These trackers add up our readers’ visits to show us larger patterns in our audience. We look at these larger patterns to analyze site traffic.</p>

                                    <table className="cookie-table gdpr-more-content" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Tracker name</th>
                                                <th>Description of purpose</th>
                                                <th>If tracker is a cookie, is it a persistent or session cookie? When do persistent cookies expire?</th>
                                                <th>If tracker is a cookie, 1st party or 3rd party cookie? If 3rd party, indicate legal name and URL for cookie policy.</th>
                                                <th>Privacy Policy and Opt-out</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td> __gads </td>
                                                <td> User analytics </td>
                                                <td> 1 year </td>
                                                <td> Google Analytics </td>
                                                <td><a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> _gcl_au </td>
                                                <td> User analytics </td>
                                                <td> 3 months </td>
                                                <td> Google Analytics </td>
                                                <td><a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> walley </td>
                                                <td> User analytics </td>
                                                <td> 1 year </td>
                                                <td> Google Analytics </td>
                                                <td><a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> walley_gid </td>
                                                <td> User analytics </td>
                                                <td> 1 day </td>
                                                <td> Google Analytics </td>
                                                <td><a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> iter_id </td>
                                                <td> User analytics </td>
                                                <td> 9 years </td>
                                                <td> Google Analytics </td>
                                                <td><a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> _gat_UA-58630905-1 </td>
                                                <td> User analytics </td>
                                                <td> session </td>
                                                <td> Google Analytics </td>
                                                <td><a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> _cb_ls </td>
                                                <td> User analytics </td>
                                                <td> 1 year </td>
                                                <td> Chartbeat </td>
                                                <td><a href="https://chartbeat.com/privacy/">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> _cb </td>
                                                <td> User analytics </td>
                                                <td> 1 year </td>
                                                <td> Chartbeat </td>
                                                <td><a href="https://chartbeat.com/privacy/">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> _cb_svref </td>
                                                <td> User analytics </td>
                                                <td> session </td>
                                                <td> Chartbeat </td>
                                                <td><a href="https://chartbeat.com/privacy/">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> _chartbeat2 </td>
                                                <td> User analytics </td>
                                                <td> 1 year </td>
                                                <td> Chartbeat </td>
                                                <td><a href="https://chartbeat.com/privacy/">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> _chartbeat4 </td>
                                                <td> User analytics= </td>
                                                <td> session </td>
                                                <td> Chartbeat </td>
                                                <td><a href="https://chartbeat.com/privacy/">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> sumologic.logger.session </td>
                                                <td> Application logging </td>
                                                 <td> session </td>
                                                <td> SumoLogic </td>
                                                <td><a href="https://www.sumologic.com/privacy-statement/">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> Localytics SDK </td>
                                                <td> User analytics in apps </td>
                                                <td> Not applicable </td>
                                                <td> Localytics </td>
                                                <td><a href="https://www.localytics.com/privacy-policy/">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> AppsFlyer SDK </td>
                                                <td> User analytics in apps </td>
                                                <td> Not applicable </td>
                                                <td> AppsFlyer </td>
                                                <td><a href="https://www.appsflyer.com/services-privacy-policy">Privacy Policy Opt-out</a></td>
                                            </tr>

                                        </tbody>

                                    </table>

                                    <p className="answer__text">
                                        <strong className="answer__text__category">Marketing Trackers</strong>
                                    </p>
                                    <p className="answer__text">These trackers help us determine which ads to show you for Times properties — both on our site and on other sites. To do this, these trackers use information about your behavior on various sites to target our ads.</p>
                                    <p className="answer__text">These trackers allow us to limit the number of times you see our ad across your devices. They help us personalize the ads we show you. They also enable us to measure the effectiveness of our marketing campaigns (e.g., measure if you subscribe after seeing our ads).</p>

                                    <table className="cookie-table gdpr-more-content" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Tracker name</th>
                                                <th>Description of purpose</th>
                                                <th>If tracker is a cookie, is it a persistent or session cookie? When do persistent cookies expire?</th>
                                                <th>If tracker is a cookie, 1st party or 3rd party cookie? If 3rd party, indicate legal name and URL for cookie policy.</th>
                                                <th>Privacy Policy and Opt-out</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td> _fbp </td>
                                                <td> Retargeting users on Facebook, only exists on marketing pages. </td>
                                                <td> 2 months </td>
                                                <td> Facebook </td>
                                                <td><a href="https://www.facebook.com/privacy/explanation">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> fr </td>
                                                <td> Retargeting users on Facebook, only exists on marketing pages </td>
                                                <td> 2 months </td>
                                                <td> Facebook </td>
                                                <td><a href="https://www.facebook.com/privacy/explanation">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> Facebook SDK </td>
                                                <td> Retargeting users on Facebook, only exists on marketing pages. </td>
                                                <td> Not applicable </td>
                                                <td> Facebook </td>
                                                <td><a href="https://www.facebook.com/privacy/explanation">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> sc_at </td>
                                                <td> Retargeting users on SnapChat, only exists on marketing pages. </td>
                                                <td> 1 year </td>
                                                <td> Snap </td>
                                                <td><a href="https://www.snap.com/en-US/privacy/privacy-policy">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> bkdc </td>
                                                <td> Building audiences to target users off site and target on-site. </td>
                                                <td> 6 months </td>
                                                <td> Oracle BlueKai </td>
                                                <td><a href="https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> bku </td>
                                                <td> Building audiences to target users off site and target on-site. </td>
                                                <td> 6 months </td>
                                                <td> Oracle BlueKai </td>
                                                <td><a href="https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> personalization_id </td>
                                                <td> Retargeting users on Twitter, only exists on marketing pages. </td>
                                                <td> 1 year </td>
                                                <td> Twitter </td>
                                                <td><a href="https://twitter.com/en/privacy">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> ANONCHK </td>
                                                <td> Retargeting users on Bing, only exists on marketing pages. </td>
                                                <td> session </td>
                                                <td> Microsoft Bing </td>
                                                <td><a href="https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> MR </td>
                                                <td> Retargeting users on Bing, only exists on marketing pages. </td>
                                                <td> 6 months </td>
                                                <td> Microsoft Bing </td>
                                                <td><a href="https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> MUID </td>
                                                <td> Retargeting users on Bing, only exists on marketing pages. </td>
                                                <td> 1 year </td>
                                                <td> Microsoft Bing </td>
                                                <td><a href="https://about.ads.microsoft.com/en-us/resources/policies/microsoft-advertising-privacy-policy">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> lang </td>
                                                <td> Retargeting users on LinkedIn, only </td>
                                                <td> session </td>
                                                <td> Microsoft LinkedIn </td>       
                                                <td><a href="https://www.linkedin.com/legal/privacy-policy">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> lidc </td>
                                                <td> Retargeting users on LinkedIn, only exists on marketing pages. </td>
                                                <td> 1 day </td>
                                                <td> Microsoft LinkedIn </td>       
                                                <td><a href="https://www.linkedin.com/legal/privacy-policy">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> UserMatchHistory </td>
                                                <td> Retargeting users on LinkedIn, only exists on marketing pages. </td>
                                                <td> 4 weeks </td>
                                                <td> Microsoft LinkedIn </td>       
                                                <td><a href="https://www.linkedin.com/legal/privacy-policy">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> bcookie </td>
                                                <td> Retargeting users on LinkedIn, only exists on marketing pages. </td>
                                                <td> 2 years </td>
                                                <td> Microsoft LinkedIn </td>       
                                                <td><a href="https://www.linkedin.com/legal/privacy-policy">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> bscookie </td>
                                                <td> Retargeting users on LinkedIn, only exists on marketing pages. </td>
                                                <td> 2 years </td>
                                                <td> Microsoft LinkedIn </td>       
                                                <td><a href="https://www.linkedin.com/legal/privacy-policy">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> everest_g_v2 </td>
                                                <td> Advertising to users through Adobe. </td>
                                                <td> 1 year </td>
                                                <td> Adobe </td>       
                                                <td><a href="https://www.adobe.com/privacy/policy.html">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> ev_sync_enc </td>
                                                <td> Advertising to users through Adobe. </td>
                                                <td> 1 year </td>
                                                <td> Adobe </td>       
                                                <td><a href="https://www.adobe.com/privacy/policy.html">Privacy Policy Opt-out</a></td>
                                            </tr>

                                        </tbody>

                                    </table>

                                    <p className="answer__text">
                                        <strong className="answer__text__category">Advertising Trackers</strong>
                                    </p>
                                    <p className="answer__text">Advertising trackers help us determine which ads from third parties are selected for you. Some of these trackers collect or use information about your behavior on various sites to aid  this targeting. These trackers sometimes limit the number of times you see an ad, make an ad more relevant to you or measure the effectiveness of an ad campaign. </p>
                                    <p className="answer__text gdpr-more-content">In the European Economic Area (E.E.A.), advertising is not personalized or targeted by third parties through personal data given to them. Instead, the ads you see are either not personalized, or personalized using only information that we have about you and that is not shared with third parties.</p>
                                    <p className="answer__text">We work with advertisers, ad agencies and other vendors to serve these ads. The ads served can include additional trackers. </p>

                                    <table className="cookie-table gdpr-more-content" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Tracker name</th>
                                                <th>Description of purpose</th>
                                                <th>If tracker is a cookie, is it a persistent or session cookie? When do persistent cookies expire?</th>
                                                <th>If tracker is a cookie, 1st party or 3rd party cookie? If 3rd party, indicate legal name and URL for cookie policy.</th>
                                                <th>Privacy Policy and Opt-out</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td> NID </td>
                                                <td> Operating non-personalized advertising </td>
                                                <td> 6 months </td>
                                                <td> Google </td>
                                                <td><a href="https://policies.google.com/privacy?hl=en">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> S </td>
                                                <td> Operating non-personalized advertising </td>
                                                <td> session </td>
                                                <td> Google </td>
                                                <td><a href="https://policies.google.com/privacy?hl=en">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> IDE </td>
                                                <td> Operating non-personalized advertising </td>
                                                <td> 1 year </td>
                                                <td> Google </td>
                                                <td><a href="https://policies.google.com/privacy?hl=en">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> Google Mobile Ads SDK </td>
                                                <td> Operating non-personalized advertising </td>
                                                <td> Not applicable </td>
                                                <td> Google </td>
                                                <td><a href="https://policies.google.com/privacy?hl=en">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> UID </td>
                                                <td> Advertising audience sizing </td>
                                                <td> 1 year </td>
                                                <td> comScore </td>
                                                <td><a href="https://www.comscore.com/About/Privacy-Policy">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> comScore SDK </td>
                                                <td> Advertising audience sizing in apps </td>
                                                <td> Not applicable </td>
                                                <td> comScore </td>
                                                <td><a href="https://www.comscore.com/About/Privacy-Policy">Privacy Policy Opt-out</a></td>
                                            </tr>

                                            <tr>
                                                <td> __cfduid </td>
                                                <td> Brand surveys </td>
                                                <td> 4 weeks </td>
                                                <td> IterateHQ </td>
                                                <td><a href="https://iteratehq.com/privacy">Privacy Policy Opt-out</a></td>
                                            </tr>

                                        </tbody>

                                    </table> 
                                    
                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" onClick="" >Back to top</Link>   

                                </Accordion>

                                <Accordion title="How Do I Manage Trackers?" number="3" name="cookieFaq">
                                    <p className="answer__text">When you first come to  our site, you may receive a notification that trackers are present. By clicking or tapping “accept,” you agree to the use of these trackers as described here. </p>
                                    <p className="answer__text">You can manage your tracker settings by opting out of specific (or all) trackers.</p>
                                    <p className="answer__text gdpr-more-content">To opt out of New York Times nonessential trackers, please click or tap this button: [Opt out] of New York Times nonessential trackers. By clicking or tapping this button you are not opting out of any advertising-related third-party trackers. To opt out of all third-party trackers, please follow the instructions for your browser as well as the Ad Choices and Online Choices paragraphs below.</p>
                                    <p className="answer__text">In addition to the options above, you can refuse or accept trackers from our site (or any other site) in your browser’s settings. If you refuse trackers, you might not be able to sign in or use other tracker-dependent features of our site.</p>
                                    <p className="answer__text">Most browsers automatically accept cookies, but this is typically something you can adjust. Information for each browser can be found in the links below:</p>

                                    <ul className="answer__text__category__ul root-list bullet-point">
                                        <li className="answer__text__category__ul__li">
                                            <p className="answer__text"><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">Safari on desktop</a> and <a href="https://support.apple.com/en-us/HT201265">Safari Mobile (iPhone and iPads)</a>: Note that, by default, Safari is engineered to protect you from being tracked from site to site unless you disable Intelligent Tracking Prevention (ITP). </p>
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            <p className="answer__text"><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectlocale=en-US&redirectslug=delete-cookies-remove-info-websites-stored">Firefox</a>: By default, Firefox protects you from cross-site tracking so long as you have not disabled Enhanced Tracking Protection (ETP). There is therefore less need to manage cookies to protect your privacy.</p>
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            <p className="answer__text"><a href="https://support.google.com/chrome/answer/95647?hl=en">Chrome</a></p>
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            <p className="answer__text"><a href="https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy">Microsoft Edge</a>: Enabling tracking prevention with Edge will protect you from being tracked between sites, such that there will be less of a need to manage your cookies in order to protect your privacy.</p>
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            <p className="answer__text"><a href="https://aboutdevice.com/clear-cookies-history-cache-on-samsung-internet-browser-android/">Samsung Internet Browser</a></p>
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            <p className="answer__text">Brave: Brave has several mechanisms to keep you from being tracked online, but you can <a href="https://support.brave.com/hc/en-us/articles/360017989132-How-do-I-change-my-Privacy-Settings-">change your privacy settings</a> if you wish to have greater control over its decisions.</p>
                                        </li>
                                    </ul>

                                    <p className="answer__text">For more information about other browsers, please refer to this <a href="https://www.allaboutcookies.org/manage-cookies/">“All About Cookies” guide</a>.</p>

                                    <p className="answer__text">To opt out of Google Analytics data collection, follow <a href="https://tools.google.com/dlpage/gaoptout">these Google instructions</a>.</p>

                                    <p className="answer__text">To reset your device identifier, follow <a href="https://support.google.com/googleplay/android-developer/answer/6048248?hl=en">Google instructions</a> and <a href="https://support.apple.com/en-us/HT205223">Apple instructions</a>.</p>

                                    <p className="answer__text">The third-party advertisers, ad agencies and other vendors with which we work may be members of the Network Advertising Initiative, the Digital Advertising Alliance Self-Regulatory Program for Online Behavioural Advertising and/or the European Digital Advertising Alliance. To opt out of interest-based advertising from the participating companies, please visit <a href="http://optout.aboutads.info/?c=2&lang=EN">AboutAds.info</a> or <a href="http://www.youronlinechoices.eu/">the European Digital Advertising Alliance</a> for laptops and <a href="https://www.networkadvertising.org/mobile-choice/">NAI Mobile Choices</a> or <a href="https://youradchoices.com/appchoices">AppChoices</a> for mobile devices. Note that opting out through these channels does not mean you will no longer see ads. You will still receive other types of ads from these companies, and any type of ad from nonparticipating companies. The sites you visit may still collect your information for other purposes.</p>

                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" onClick="" >Back to top</Link>

                                </Accordion>

                            </div>
                            
                        </div>

                    </div>

                </section>             

            </div>
        );
    }
}

export default CookieFaqTemplate;