import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import ScrollIntoView from 'react-scroll-into-view'

//import PropTypes from 'prop-types';
import Accordion from './Accordion'

//SVG
import { ReactComponent as CollapseExpand } from './svg_components/collapse-expand.svg';


class FaqTemplate extends Component{

    

    state ={
        reachedTop :false,
        footerShow: false
    }

    handleWaypointEnter = () =>{
        //console.log('reach top');
    }

    constructor(props) {
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
        this._isMounted = false;
    }

    handleScroll (){
        this.setState({scroll: window.scrollY});


        var footer = document.querySelector('.footer-section');
        var position = footer.getBoundingClientRect();
    
        // checking for partial visibility
        if(position.top < window.innerHeight && position.bottom >= 0) {
            //console.log('Element is partially visible in screen');
            this.setState({footerShow: true});
        }else{
            //console.log('Element is NOT visible in screen');
            this.setState({footerShow: false});
        }

    }

    componentDidMount() {
        this._isMounted = true;
        const el = document.querySelector('.faq .container');

        if(this._isMounted){
            this.setState({top: el.offsetTop - 50, height: el.offsetHeight});
            window.addEventListener('scroll', this.handleScroll);
        }

        // window.addEventListener('scroll', function() {
            
            
        // }).bind(this);
    }

    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener('scroll', this.handleScroll);    
    }

    startTop = () =>{
        window.scrollTo(0, 0);
        //const {message} = this.props;
        //message = "this is the third party page";

        //return message; 
    }


    render(){

        

        var getCookie = function (c_name) {
            var cookval = '';
            var i, x, y, ARRcookies = document.cookie.split(";");
            for (i = 0; i < ARRcookies.length; i++) {
                x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
                y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
                x = x.replace(/^\s+|\s+$/g, "");
                if (x === c_name) {
                    cookval = unescape(y);
                }
            }
            return cookval;
        };

        if(getCookie('nyt-purr').indexOf('s') > -1) {
            console.log('console log message for cookie: character IS THERE!');

            $("body").addClass("show-ccpa-content");
        }

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

        function clickOptOut () {
            //$('.ccpaOptOut').trigger('click');
            document.querySelector('.ccpaOptOut').click();
            //alert('opting Out');
        }

        const faqNumbers = {
            number1: "1",
            number2: "2",
            number3: "3",
            number4: "4",
            number5: "5",
            number6: "6",
            number7: "7",
            number8: "8",
            number9: "9",
            number10: "10",
            number11: "11",
            number12: "12", 
            number13: "13"
        }

        return (

            <div className="FaqTemplate">

                <section className="faq">

                    <div className="container">

                        <div className={"faq__sidebar "  + (this.state.scroll > this.state.top ? "fixed-nav " : "") +  (this.state.footerShow? "absolute-nav" : "")}>
                            <ol className="faq__sidebar__ul">
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">1.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`faq${faqNumbers.number1}`} to={`faq${faqNumbers.number1}`} offset={-50} spy={true} smooth={true} duration={500} href={`faq${faqNumbers.number1}`} aria-label='sidebar link'> What Information Do We Gather About You? </Link>
                                    {/*<a className="faq__sidebar__ul__list__link" name={`faq${faqNumbers.number1}`} href={`#faq${faqNumbers.number1}`} > What Information Do We Gather About You? </a>*/}
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">2.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`faq${faqNumbers.number2}`} to={`faq${faqNumbers.number2}`}  offset={-50} spy={true} smooth={true} duration={500} href={`faq${faqNumbers.number2}`} aria-label='sidebar link'>What Do We Do With The Information We Collect About You?</Link>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">3.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`faq${faqNumbers.number3}`} to={`faq${faqNumbers.number3}`}  offset={-50} spy={true} smooth={true} duration={500} href={`faq${faqNumbers.number3}`} aria-label='sidebar link'>With Whom Do We Share The Information We Gather?</Link>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">4.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`faq${faqNumbers.number4}`} to={`faq${faqNumbers.number4}`}  offset={-50} spy={true} smooth={true} duration={500} href={`faq${faqNumbers.number4}`} aria-label='sidebar link'>What Are Your Rights?</Link>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">5.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`faq${faqNumbers.number5}`} to={`faq${faqNumbers.number5}`}  offset={-50} spy={true} smooth={true} duration={500} href={`faq${faqNumbers.number5}`} aria-label='sidebar link'>What About Sensitive Personal Information?</Link>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">6.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`faq${faqNumbers.number6}`} to={`faq${faqNumbers.number6}`}  offset={-50} spy={true} smooth={true} duration={500} href={`faq${faqNumbers.number6}`} aria-label='sidebar link'>How Long Do You Retain Data?</Link>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">7.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`faq${faqNumbers.number7}`} to={`faq${faqNumbers.number7}`}  offset={-50} spy={true} smooth={true} duration={500} href={`faq${faqNumbers.number7}`} aria-label='sidebar link'>How Do You Protect My Information?</Link>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">8.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`faq${faqNumbers.number8}`} to={`faq${faqNumbers.number8}`}  offset={-50} spy={true} smooth={true} duration={500} href={`faq${faqNumbers.number8}`} aria-label='sidebar link'>Are There Guidelines for Children?</Link>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">9.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`faq${faqNumbers.number9}`} to={`faq${faqNumbers.number9}`}  offset={-50} spy={true} smooth={true} duration={500} href={`faq${faqNumbers.number9}`} aria-label='sidebar link'>How Is Information Transfered Internationally?</Link>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">10.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`faq${faqNumbers.number10}`} to={`faq${faqNumbers.number10}`}  offset={-50} spy={true} smooth={true} duration={500} href={`faq${faqNumbers.number10}`} aria-label='sidebar link'>What Is Our Legal Basis?</Link>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">11.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`faq${faqNumbers.number11}`} to={`faq${faqNumbers.number11}`}  offset={-50} spy={true} smooth={true} duration={500} href={`faq${faqNumbers.number11}`} aria-label='sidebar link'>What About Links to Third-Party Services?</Link>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">12.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`faq${faqNumbers.number12}`} to={`faq${faqNumbers.number12}`}  offset={-50} spy={true} smooth={true} duration={500} href={`faq${faqNumbers.number12}`} aria-label='sidebar     link'>How Are Changes to This Privacy Policy Communicated?</Link>
                                </li>

                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">13.</div>
                                    <Link className="faq__sidebar__ul__list__link" name={`faq${faqNumbers.number13}`} to={`faq${faqNumbers.number13}`}  offset={-50} spy={true} smooth={true} duration={500} href={`faq${faqNumbers.number13}`} aria-label='sidebar link'>How Can You Contact Us? Who Is the Controller of Your Personal Information?</Link>
                                </li>

                            </ol>

                        </div>

                        <div className="faq__main-content">

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

                            <div className="mobile-collapse">
                                <button className='all-faq-trigger' onClick={toggleAllQuestions} aria-label='colapse and expand all accordion'>
                                    <CollapseExpand/>
                                </button>
                            </div>

                            <div className="question-answers-holder">

                                <Accordion title="What Information Do We Gather About You?" number="1" name="faq">
                                    <p className="answer__text">The information we gather about you depends on the context. By and large, it’s information about you that can personally identify you — either on its own or when combined with other information. </p>
                                    <p className="answer__text">The following describes the information we collect and how we obtain it.</p>
                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">A) Information Collected Through Times Services.</strong>
                                    </p>
                                    <ol className="answer__text__category__ol roman-numerals">

                                        <li className="answer__text__category__ol__li">
                                            <strong>Information That You Voluntarily Give Us</strong>

                                            <ul className="answer__text__category__ul bullet-point">
                                                <li className="answer__text__category__ul__li">
                                                    <strong>For Registration:</strong>
                                                    <p className="answer__text">When you sign up for a Times Service <span className="italic">(e.g., a subscription)</span>, we collect your contact information and account credentials. Once you’re registered, we assign you a unique ID number. This ID number helps us recognize you when you’re signed in.</p>
                                                    <p className="answer__text">For some Times Services, you can instead sign up by linking your Facebook or Google account. See &ldquo;<Link to="anchor-question1-sectionB"  offset={-80} spy={true} smooth={true} duration={500}>Information Collected From Other Sources</Link>&rdquo; below. </p>
                                                    <p className="answer__text">If you register for an event or conference, we might ask for additional information <span className="italic">(e.g., your company name, your job title or your dietary restrictions)</span>. </p>
                                                </li>
                                                <li className="answer__text__category__ul__li">
                                                    <strong>For Billing:</strong>
                                                    <p className="answer__text">To process payments or donations, we collect and use your payment information.</p>
                                                    <p className="answer__text">This can include your name, your address, your telephone number, your email address, your credit or debit card information and any other relevant information.</p>
                                                </li>
                                                <li className="answer__text__category__ul__li">
                                                    <strong>For User-Generated Content: </strong>
                                                    <p className="answer__text">We offer you the ability to post content that other users can read <span className="italic">(e.g., comments or recipe reviews)</span>. Anyone can read, collect and use any personal information that accompanies your posts. See the <a href="https://help.nytimes.com/hc/en-us/articles/115014792387-Comments">Comments F.A.Q.</a>, or read &ldquo;<a href="https://help.nytimes.com/hc/en-us/articles/115014893428-Terms-of-service#3">User-Generated Content</a>&rdquo; in our Terms of Service for more information.</p>
                                                    <p className="answer__text">We do not have to publish any of your content. If the law requires us to take down, remove or edit your personal information, we will comply to the required extent.</p>
                                                </li>
                                                <li className="answer__text__category__ul__li">
                                                    <strong>For Contests, Sweepstakes and Special Offers:</strong>
                                                    <p className="answer__text">When you sign up for these, you give us your name, email and any other required information.</p>
                                                </li>
                                                <li className="answer__text__category__ul__li">
                                                    <strong>For Reader Surveys, Research, Panels and Experience Programs:</strong>
                                                    <p className="answer__text">We gather information through questionnaires, surveys and feedback programs. We also conduct similar research for advertisers. We ask you for your consent to use this information when you participate in these programs and events.</p>
                                                </li>
                                                <li className="answer__text__category__ul__li">
                                                    <strong>During Contact With Our Call Centers:</strong>
                                                    <p className="answer__text">We collect information from you when you place an order over the phone or contact customer service through one of our toll-free numbers.</p>
                                                </li>
                                                <li className="answer__text__category__ul__li">
                                                    <strong>Personal Contacts Data:</strong>
                                                    <p className="answer__text">We never scan your device for your contacts or upload this data.</p>
                                                    <p className="answer__text">With your consent, we do comply with your requests to collect data about your friends, family or acquaintances <span className="italic">(e.g., Refer a Friend campaigns)</span>. This functionality is only meant for U.S. residents. By using it, you acknowledge and agree that both you and your contacts are based in the United States — and that you have everyone’s consent for us to use their contact information.</p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="answer__text__category__ol__li">
                                            <strong>Information Collected Automatically</strong>

                                            <ul className="answer__text__category__ul bullet-point">
                                                <li className="answer__text__category__ul__li">
                                                    <strong>With Tracking Technologies in Your Browser and Mobile Apps:</strong>
                                                    <p className="answer__text">These technologies include cookies, web beacons, tags and scripts, software development kits (or SDKs) and beyond.</p>
                                                    <p className="answer__text">We track and store data about how you visit and use Times Services, particularly through our websites and apps. The items we log include:</p>
                                                    <ul className="answer__text__category__ul bullet-point root-list">
                                                        <li className="answer__text__category__ul__li"> Your IP address</li>
                                                        <li className="answer__text__category__ul__li"> Your location</li>
                                                        <li className="answer__text__category__ul__li"> Your operating system</li>
                                                        <li className="answer__text__category__ul__li"> Your browser</li>
                                                        <li className="answer__text__category__ul__li"> Your browser language</li>
                                                        <li className="answer__text__category__ul__li"> The URLs of any pages you visit on our sites and apps</li>
                                                        <li className="answer__text__category__ul__li"> Device identifiers</li>
                                                        <li className="answer__text__category__ul__li"> Advertising identifiers</li>
                                                        <li className="answer__text__category__ul__li"> Other usage information.</li>
                                                    </ul>
                                                    <p className="answer__text">We combine this data with other information we collect about you. For more information about tracking methods on Times Services, and how to manage them, read our <a href="https://www.nytimes.com/subscription/dg-cookie-policy/cookie-policy.html">Cookie Policy</a>.</p>
                                                    <p className="answer__text">If your browser doesn’t accept our cookies, you can&rsquo;t access certain parts of our websites <span className="italic">(e.g., your account on nytimes.com)</span>. Because the “Do Not Track” browser-based standard signal has yet to gain widespread acceptance, we don’t currently respond to those signals.</p>
                                                </li>
                                                <li className="answer__text__category__ul__li">
                                                    <strong>With GPS Technologies:</strong>
                                                    <p className="answer__text">Some of our apps can provide content based on your GPS location, if you enable this feature <span className="italic">(e.g., the New York Times Real Estate app)</span>. Your GPS location is your exact location.</p>
                                                    <p className="answer__text">You choose whether to enable GPS features when you first install the app. You can edit that setting on your device at any time. If you enable these features, your GPS location can be found by satellite, cell phone tower or Wi-Fi and used by the app. If you save a location-based search in your history, that data moves to our service provider’s servers &mdash; see <Link to="anchor-question2-sectionE" offset={-80} spy={true} smooth={true} duration={500} onClick={() => {FaqOpen(2)}}>below</Link> for the definition of service provider.</p>
                                                    <p className="answer__text">If you do not enable GPS location-based services, or if a specific app does not have location-based features <span className="italic">(e.g., the New York Times app)</span>, we don’t collect your precise GPS location. We do collect your IP address, which can establish your approximate location. Ads on our sites and apps may be targeted based on this approximate location, but are never targeted based on your GPS location.</p>
                                                </li>
                                            </ul>

                                        </li>
                                    </ol>

                                    <p className="answer__text" id="anchor-question1-sectionB">
                                        <strong className="answer__text__category italic">B) Information Collected From Other Sources.</strong>
                                    </p>

                                    <ol className="answer__text__category__ol roman-numerals">
                                        <li className="answer__text__category__ol__li">
                                            <strong>Privately Owned Databases:</strong>
                                            <p className="answer__text">Marketing, data analytic and social media-owned databases give us access to a range of information — like public data, survey data and beyond. This data sometimes includes your mailing address, your gender, your age, your household income and other demographic data.</p>
                                        </li>
                                        <li className="answer__text__category__ol__li">
                                            <strong>Social Media Platforms and Other Third-Party Services:</strong>
                                            <p className="answer__text italic">(Social media platforms include Facebook. Third-party services include Google, Kindle and Nook.)</p>
                                            <p className="answer__text">You can link your social media or other third-party account to a Times Service. By linking the services, you authorize us to collect, store and use any information they may give us <span className="italic">(e.g., your email address)</span>. You can disconnect your nytimes.com registration from third-party accounts at any time.</p>
                                            <p className="answer__text">We also receive information from you when you interact with our pages, groups, accounts or posts on social media platforms. This includes aggregate data on our followers <span className="italic">(e.g., age, gender and location)</span>, engagement data <span className="italic">(e.g., &ldquo;likes,&rdquo; comments, shares, reposts and clicks)</span>, awareness data <span className="italic">(e.g., number of impressions and reach)</span> and individual users’ public profiles.</p>
                                            <p className="answer__text">For more information, refer to our <a href="https://help.nytimes.com/hc/en-us/articles/115014887628-Social-login">social login</a>, <a href="https://help.nytimes.com/hc/en-us/articles/115014889068-Kindle-subscribers">Kindle</a> and <a href="https://help.nytimes.com/hc/en-us/articles/115014917867-NOOK-subscribers">Nook</a> F.A.Q.</p>
                                        </li>
                                        <li className="answer__text__category__ol__li">
                                            <strong>Workplace and Schools:</strong>
                                            <p className="answer__text">When your employer or school buys an organizationwide subscription to nytimes.com, they sometimes provide us with your name and organization email address to grant you access as a user.</p>
                                        </li>
                                    </ol>

                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">A note about future updates:</strong>
                                    </p>
                                    <p className="answer__text">We are always improving our products and services, and we create new features regularly. These updates sometimes require us to collect new information, or use what we already have differently. If there is a significant or material change in the way we handle your personal information, we will notify you as detailed below.</p>

                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top">Back to top</Link>
                                </Accordion>


                                <Accordion title="What Do We Do With the Information We Gather?" number="2" name="faq">
                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">A) We provide the Times Services.</strong>
                                    </p>
                                    <p className="answer__text">We use your information to help you use and navigate Times Services, such as:</p>

                                    <ul className="answer__text__category__ul bullet-point root-list">
                                        <li className="answer__text__category__ul__li">
                                                Making a Times Service available to you
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Arranging access to your account
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Providing customer service
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Responding to your inquiries, requests, suggestions or complaints
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Completing your payments and transactions
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Sending service-related messages <span className="italic">(e.g., a change in our terms and conditions)</span>
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Saving your reading list, recipes or property searches
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Displaying your Crossword stats
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Letting you take part in paid services, polls, promotions, surveys, panels, research and comments.
                                        </li>
                                    </ul>

                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">B) We Personalize Your Experience.</strong>
                                    </p>
                                    <p className="answer__text">
                                        We track your interests and reading habits <span className="italic">(e.g., the articles you read)</span> to personalize your reading experience using technology like algorithmic recommendations and machine learning. This is how we highlight articles you might be interested in and de-emphasize articles you’ve already read. For more information about content personalization on Times Services, you can read the <a href="https://help.nytimes.com/hc/en-us/articles/360003965994-Personalization">Personalization F.A.Q.</a> We also show you prices, promotions, products or services we believe you’ll find interesting, based on demographic and usage data.
                                    </p>

                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">C) We Allow You to Share User-Generated Content.</strong>
                                    </p>
                                    <p className="answer__text">Any information you disclose in your content becomes public — along with your chosen screen name and uploaded photo.</p>

                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">D) We Develop Products and Services, and Do Analysis. </strong>
                                    </p>
                                    <p className="answer__text">We analyze data on our users’ subscription, purchase and usage behaviors. This helps us make business and marketing decisions. </p>
                                    <p className="answer__text">For example, our analysis lets us predict preferences and price points for our products and services. It helps us determine whether our marketing is successful. It also shows us characteristics about our readers, which we sometimes share in aggregate with advertisers.</p>
                                    <p className="answer__text">Google Analytics is one of the analytics providers we use. You can find out <a href="https://policies.google.com/technologies/partner-sites">how Google Analytics uses data</a> and <a href="https://tools.google.com/dlpage/gaoptout">how to opt out of Google Analytics</a>.</p>
                                    <p className="answer__text" id="anchor-question2-sectionE">
                                        <strong className="answer__text__category italic">E) We Carry Out Administrative Tasks.</strong>
                                    </p>

                                    <ul className="answer__text__category__ul bullet-point root-list">
                                        <li className="answer__text__category__ul__li">
                                            For auditing: We verify that our internal processes work as intended and comply with legal, regulatory and contractual requirements.
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            For fraud and security monitoring: We detect and prevent cyberattacks or unauthorized robot activities.
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            For customer satisfaction: We assess users&rsquo; satisfaction with Times Services and our customer care team.
                                        </li>
                                    </ul>
                                    <p className="answer__text">The above activities can involve outside companies, agents or contractors (&ldquo;service providers&rdquo;) with whom we share your personal information for these purposes (discussed further below). </p>


                                    <p className="answer__text" id="anchor-question2-sectionF">
                                        <strong className="answer__text__category italic">F) We Offer Sweepstakes, Contests and Other Promotions.</strong>
                                    </p>

                                    <p className="answer__text">You can take part in our sweepstakes, contests and other promotions. Some might have additional rules about how we use and disclose your personal information.</p>

                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">G) We Allow for Personalized Advertising on Times Services.</strong>
                                    </p>

                                    <p className="answer__text">We gather data and work with <NavLink to="/thirdparty" onClick={this.startTop}>third parties</NavLink> to show you personalized ads. This data comes from ad tracking technologies <span className="italic">(e.g., cookies)</span>, the information you provide <span className="italic">(e.g., your email address)</span>, data collected as you use Times Services <span className="italic">(e.g., your reading history)</span>, data from advertisers or advertising vendors <span className="italic">(e.g., demographic data)</span> and anything inferred from any of this information. We only use or share this information in a manner that does not reveal your identity.</p>
                                    <p className="answer__text">For example, we use Google to serve ads on Times Services. Google uses cookies or unique device identifiers, in combination with their own data, to show you ads based on you visiting nytimes.com and other sites. You can opt out of the use of the Google cookie by visiting the <a href="https://policies.google.com/technologies/ads?hl=en">related Google privacy policy</a>.</p>

                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">Additional notes:</strong>
                                    </p>

                                    <ul className="answer__text__category__ul bullet-point root-list">
                                        <li className="answer__text__category__ul__li">
                                            For more about targeted advertising, and how to opt out with your specific browser and device, go to the <a href="http://optout.aboutads.info/?c=2&lang=EN">DDA Webchoices Browser Check</a> and <a href="http://optout.networkadvertising.org/?c=1">NAI Opt Out of Interest-Based Advertising</a>. You can <a href="https://youradchoices.com/appchoices">download the AppChoices app</a> to opt out in mobile apps. You can also follow the instructions in the <Link to="anchor-question4" offset={-110} spy={true} smooth={true} duration={500} onClick={() => {FaqOpen(4)}}>“What Are Your Rights?”</Link> section below.
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            We try to limit how our third-party advertising technology vendors use the information they gather from you. Many of these providers require us to enter into contracts that allow them to optimize their own services and products, or that help them create their own.<br/><br/>
                                            Essentially, these providers combine any information they gather about you through Times Services with information they receive from their other clients. This helps them target ads to you on behalf of their other clients, not just us.
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            These third parties sometimes use other services in order to serve ads; check <NavLink to="/thirdparty" onClick={this.startTop}>their privacy policies for more details</NavLink>. For further information on tracking technologies and your rights and choices regarding them, see the applicable <a href="https://www.nytimes.com/subscription/dg-cookie-policy/cookie-policy.html">Cookie Policy</a>. <span className="ccpa-content">Effective January 1, 2020, California residents have the right to instruct us not to “sell” their personal information. More information is available <Link to="anchor-question4-sectionE" offset={-110} spy={true} smooth={true} duration={500} onClick={() => {FaqOpen(4)}}>below</Link>.</span>
                                        </li>
                                    </ul>

                                    <p className="answer__text" id="anchor-question2-sectionH">
                                        <strong className="answer__text__category italic">H) We Advertise Times Services to You.</strong>
                                    </p>

                                    <p className="answer__text">We market our properties to you. Sometimes we use marketing vendors to do this.</p>
                                    <p className="answer__text">We serve ads through websites, locations, platforms and services operated and owned by third parties. Often these ads are targeted at people who have visited or registered for a Times Service but have not subscribed or purchased anything. The ads are also targeted at people with similar traits or behaviors to our subscribers or customers.</p>
                                    <p className="answer__text">We target our advertising to these users by uploading an encrypted customer list to a third party, or by incorporating a tracking technology from a third party onto our Times Service. The third party then matches individuals who appear in both our data and their data. Because of how this matching process works, the third party can’t read our encrypted customer list if they don’t already have it. <span className="ccpa-content">We will also opt you out of such matched ads if you are a California resident and you exercise your right not to have your personal information &ldquo;sold&rdquo; after January 1, 2020, as discussed further <Link to="anchor-question4-sectionE" offset={-110} spy={true} smooth={true} duration={500} onClick={() => {FaqOpen(4)}}>below</Link>.</span></p>
                                    <p className="answer__text">To opt out of receiving these matched ads, contact the applicable <NavLink to="/thirdparty" onClick={this.startTop}>third parties</NavLink>. For example, when we use &ldquo;Custom Audience&rdquo; to serve you our ad through Facebook, you should be able to hover over the box in the right corner of that Facebook ad and opt out. We are not responsible for any third party&rsquo;s failure to comply with opt-out requests.</p>

                                    <p className="answer__text">We periodically send you targeted email newsletters or promotional emails. For information on opting out of these emails, see <Link to="anchor-question4" offset={-110} spy={true} smooth={true} duration={500} onClick={() => {FaqOpen(4)}}>&ldquo;What Are Your Rights?&rdquo;</Link></p>

                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">I) We Aggregate (or De-identify) Personal Information Into Larger Findings.</strong>
                                    </p>

                                    <p className="answer__text">Sometimes we aggregate or de-identify information so that it can no longer identify you, under applicable laws. This helps us better understand and represent our users, such as when we measure ad performance or compile survey results. We can use and disclose this aggregated or de-identified information for any purpose, unless an applicable law says otherwise.</p>
                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" >Back to top</Link>
                                </Accordion>


                                <Accordion title="With Whom Do We Share the Information We Gather?" number="3" name="faq">
                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">A) Within The New York Times Company: </strong>
                                    </p>

                                    <p className="answer__text">We share your information with our affiliates for the purposes listed here. See <a href="https://help.nytimes.com/hc/en-us/articles/360004990014">a list of our affiliates</a>.</p>

                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">B) With Service Providers:</strong>
                                    </p>

                                    <p className="answer__text">We work with service providers, as defined <Link to="anchor-question2-sectionE" offset={-70} spy={true} smooth={true} duration={500} onClick={() => {FaqOpen(2)}}>above</Link>, to carry out certain tasks:</p>

                                    <ul className="answer__text__category__ul bullet-point root-list">
                                        <li className="answer__text__category__ul__li">
                                            Processing your payments
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Fulfilling your orders
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Maintaining technology and related infrastructure
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Offering you customer service
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Serving and targeting ads
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Measuring ad performance
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Presenting surveys
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Shipping you products and mailings
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Distributing emails
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            List processing and analytics
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Managing and analyzing research
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Managing promotions
                                        </li>
                                    </ul>

                                    <p className="answer__text">When performing these tasks, service providers often have access to your personal information.</p>
                                    <p className="answer__text">We sometimes allow them to use aggregated or de-identified information for other purposes, in accordance with applicable laws</p>

                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">C) With Other Third Parties:</strong>
                                    </p>

                                    <p className="answer__text">There are situations when we share your information with third parties beyond our service providers. We never share your email address with these third parties without your consent, except in encrypted form to engage in the matched ads process described <Link to="anchor-question2-sectionH" offset={-70} spy={true} smooth={true} duration={500}>above</Link>.</p>

                                    <ol className="answer__text__category__ol roman-numerals">
                                        <li className="answer__text__category__ol__li">
                                            <p className="answer__text">If you&rsquo;re a U.S. print subscriber, we may share your name and mailing address (among other information) with other reputable companies that want to market to you by mail.</p>
                                            <p className="answer__text ccpa-content">This may be a &ldquo;sale&rdquo; of personal information under California law effective January 1, 2020. If you prefer we don&rsquo;t share this information, refer <Link to="anchor-question4" offset={-110} spy={true} smooth={true} duration={500} onClick={() => {FaqOpen(4)}}>below</Link> to “What Are Your Rights?”</p>    
                                        </li>
                                        <li className="answer__text__category__ol__li">
                                            <p className="answer__text">We share information about our live event and conference attendees <span className="italic">(e.g., your name, your company or your job title)</span> with the event sponsors. In those cases we notify you when you provide us the information.</p>
                                        </li>
                                        <li className="answer__text__category__ol__li">
                                            <p className="answer__text">We share information about participants in our sweepstakes, contests and similar promotions with the promotions&rsquo; sponsors. In those cases we notify you when you provide us the information.</p>
                                        </li>

                                        <li className="answer__text__category__ol__li">
                                            <p className="answer__text">We process payments you make through Times Services with external services.</p>

                                            <p className="answer__text">There are two ways this can happen:</p>

                                            <ul className="answer__text__category__ul bullet-point">

                                                <li className="answer__text__category__ul__li">
                                                    We collect your information and share it with the third-party service for processing.
                                                </li>
                                                <li className="answer__text__category__ul__li">
                                                The third-party service collects your information for processing.
                                                </li>

                                            </ul>
                                        </li>

                                        <li className="answer__text__category__ol__li">
                                            <p className="answer__text">In the event of a reorganization, merger, sale, joint venture, assignment, transfer or other disposition of all or any portion of our business, assets or stock (including in connection with any bankruptcy or similar proceedings), we would have a legitimate interest in disclosing or transferring your information to a third party — such as an acquiring entity and its advisers.</p>
                                        </li>

                                        <li className="answer__text__category__ol__li">
                                            <p className="answer__text">We can preserve or share personal information if the law requires us to do so. We can also preserve or share personal information if we believe it would be necessary to:</p>
                                            <ul className="answer__text__category__ul bullet-point ">
                                                <li className="answer__text__category__ul__li">
                                                    Comply with the law or with legal process
                                                </li>
                                                <li className="answer__text__category__ul__li">
                                                    Protect and defend our rights and property
                                                </li>
                                                <li className="answer__text__category__ul__li">
                                                    Protect against misuse or unauthorized use of the Times Services
                                                </li>
                                                <li className="answer__text__category__ul__li">
                                                    Protect the safety or property of our users or the general public <span className="italic">(e.g., if you provide false information or attempt to pose as someone else, we could share your information to help investigations into your actions)</span>
                                                </li>
                                                <li className="answer__text__category__ul__li">
                                                    Cooperate with government authorities, which could be outside your country of residence.
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="answer__text__category__ol__li">
                                            We disclose public activities in our RSS feeds, APIs and other distribution formats. Your public activities could thus appear on other websites, blogs or feeds.
                                        </li>
                                    </ol>

                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" >Back to top</Link>
                                </Accordion>

                                <Accordion title="What Are Your Rights?" number="4" name="faq">
                                    <p className="answer__text" id="anchor-question4">
                                        <strong className="answer__text__category italic">A) How Do I Opt Out of Email, Phone, Mail and Push Notifications?</strong>
                                    </p>
                                    <p className="answer__text">The opt-out methods described below are limited to the email address, phone or device used. They won&rsquo;t affect subsequent subscriptions.</p>
                                    <ol className="answer__text__category__ol roman-numerals">

                                        <li className="answer__text__category__ol__li">
                                            <strong>Email:</strong>
                                            <p className="answer__text">We offer a variety of commercial emails and email newsletters. You can unsubscribe from them by following the &ldquo;unsubscribe&rdquo; instructions near the bottom of the email. You can also email us at <a href="mailto:privacy@nytimes.com">privacy@nytimes.com</a>.</p>
                                            <p className="answer__text">You can <a href="https://myaccount.nytimes.com/seg/settings">manage your nytimes.com newsletter preferences</a>.</p>
                                        </li>
                                        <li className="answer__text__category__ol__li">
                                            <strong>Mail or Telephone Promotions:</strong>
                                            <p className="answer__text">You can ask us to unsubscribe from our mail or telephone solicitations. You can also ask us to not share your information with third parties for marketing purposes. To do so, email us at <a href="mailto:privacy@nytimes.com">privacy@nytimes.com</a> with &ldquo;Opt Out&rdquo; in the subject line, and your account number and phone number in the body of the email.</p>
                                            <p className="answer__text">You can write to us at: <span className="italic">Customer Care, P.O. Box 8041, Davenport, IA 52808-8041 — or, for International Edition customers, The New York Times International Edition, Immeuble Le Lavoisier, 4, Place des Vosges, CS 10001, 92052 Paris La Défense Cedex, France</span>. Please include your account number and phone number in the body of the letter. </p>

                                        </li>
                                        <li className="answer__text__category__ol__li">
                                        <strong>Push Notifications:</strong>
                                            <p className="answer__text">You can opt out any time by adjusting your device settings, or uninstalling our app.</p>

                                        </li>

                                        <li className="answer__text__category__ol__li">
                                        <strong>Text Messages:</strong>
                                            <p className="answer__text">You can opt out of text alerts any time by replying &ldquo;STOP,&rdquo; or any alternative keyword we’ve shared with you.</p>
                                        </li>
                                    </ol>

                                    <p className="answer__text">We complete any opt-out request as quickly as we can. This opt-out request won’t prohibit us from sending you important nonmarketing notices.</p>

                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">B) How Do You Access, Change, Delete or Update Your Personal Information?</strong> <br/>
                                        In some parts of the world, you have the right to:
                                    </p>

                                    <ul className="answer__text__category__ul bullet-point root-list">
                                        <li className="answer__text__category__ul__li">
                                            Access, modify, or delete the personal information we have about you
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Receive an electronic copy of the personal information we have about you, for data portability
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Restrict, or object to, how we process personal information about you

                                        </li>

                                        <li className="answer__text__category__ul__li">
                                            Not receive discriminatory treatment by us for the exercise of your privacy rights.
                                        </li>
                                    </ul>

                                    <p className="answer__text">If you&rsquo;d like to exercise any of the above rights, contact us via <a href="https://www.nytimes.com/data-subject-request">this form</a> or by calling us at our toll-free number, 1-800-NYTIMES. In your request, please be specific. State the information you want changed, whether you&rsquo;d like your information suppressed from our database or whether there are limitations you&rsquo;d like us to put on how we use your personal information. Please use the email address linked to that personal information — we only complete requests on the information linked to your email address. To verify your identity, we will email the email address you provide us, and which matches our records, and wait for your response. In some instances we may also ask for additional information. This is how we verify your identity before complying. </p>
                                    <p className="answer__text">You can designate an authorized agent to make a request on your behalf. In order to do that, please provide us a notarized power of attorney. We&rsquo;ll respond to your request in a manner consistent with applicable law.</p>
                                    <p className="answer__text">We might need to keep certain information for recordkeeping purposes, or to complete a transaction you began prior to requesting a change or deletion <span className="italic">(e.g., if you make a purchase or enter a promotion, you might not be able to change or delete the personal information provided until after the completion of the purchase or promotion)</span>.</p>
                                    <p className="answer__text">In some cases, your request doesn&rsquo;t ensure complete removal of the content or information <span className="italic">(e.g., if another user has reposted your content)</span>.</p>
                                    <p className="answer__text">If you&rsquo;d like, you can lodge a complaint with a data protection authority. A <a href="https://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080">list of E.U. data protection authorities</a> is available.</p>

                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">C) How Do You Manage Your Digital and Home Delivery Accounts?</strong>
                                    </p>
                                    <p className="answer__text">You can update your account information and see <a href="https://myaccount.nytimes.com">your transaction history</a> (for <a href="https://customercare.inyt.com">International Edition print subscribers</a>). If you need assistance, call our toll-free number, 1-800-NYTIMES. <a href="https://subscribe.inyt.com/footer?requestAction=displayContactIht">Other local numbers</a> are available. </p>
                                    <p className="answer__text">It works differently if you subscribed via Apple&rsquo;s App Store or Google Play. Register with us to access the Account area, and contact Apple or Google for your transaction history.</p>

                                    <p className="answer__text">
                                        <strong className="answer__text__category italic">D) What Are Your California Shine the Light Privacy Rights?</strong>
                                    </p>
                                    <p className="answer__text">Under the California &ldquo;Shine the Light&rdquo; law, California residents can opt out of our sharing of their information to third parties (and sometimes affiliates) for their direct marketing purposes. </p>
                                    <p className="answer__text">To do so, email us at <a href="mailto:privacy@nytimes.com">privacy@nytimes.com</a> with &ldquo;Shine the Light Opt Out&rdquo; in the subject line, and your account number and phone number in the body of the email. You can also write to us at: Customer Care, P.O. Box 8041, Davenport, IA 52808-8041. Include your account number and phone number in the body of the letter. </p>

                                    <p className="answer__text ccpa-content" id="anchor-question4-sectionE">
                                        <strong className="answer__text__category italic">E) What Are My California &ldquo;Do Not Sell My Personal Information&rdquo; Rights?</strong>
                                    </p>
                                    <p className="answer__text ccpa-content">If you&rsquo;re a California resident, you can request that we stop sharing your personal information with third parties who are not our service providers (in accordance with the California Consumer Privacy Act). Click this <Link className="optOut" role="button" tabIndex="0" onClick={()=>{clickOptOut()}}>link</Link> or email us at <a href="mailto:privacy@nytimes.com">privacy@nytimes.com</a> with the subject line &ldquo;California Residents - Do Not Sell&rdquo; with the subject line &ldquo;California Resident - Do Not Sell.&rdquo;</p>

                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" >Back to top</Link>
                                </Accordion>

                                <Accordion title="What About Sensitive Personal Information?" number="5" name="faq">
                                    <p className="answer__text">
                                        We generally don&rsquo;t want to gather any sensitive information about you. This includes:
                                    </p>
                                    <ul className="answer__text__category__ul bullet-point root-list">
                                        <li className="answer__text__category__ul__li">
                                            Your social security number
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Your racial or ethnic origin
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Your political opinions
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Your religion or other beliefs
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Your health, biometric or genetic characteristics
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Any trade union membership
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Any criminal background
                                        </li>
                                    </ul>
                                    <p className="answer__text">
                                        There are rare situations when we request this information <span className="italic">(e.g., a reader survey asks about your political leanings)</span>, but you can decline to answer. Outside those situations we would prefer you never share that information with us.
                                    </p>
                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" >Back to top</Link>
                                </Accordion>
                                <Accordion title="How Long Do You Retain Data?" number="6" name="faq">
                                    <p className="answer__text">
                                        It depends. We store your personal information for as long as needed, or permitted, based on the reason why we obtained it (consistent with applicable law). This means we might retain your personal information even after you close your account with us.
                                    </p>
                                    <p className="answer__text">
                                        When deciding how long to keep your information, we consider:
                                    </p>
                                    <ul className="answer__text__category__ul bullet-point root-list">
                                        <li className="answer__text__category__ul__li">
                                            How long we've had a relationship with you or provided a Times Service to you
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Whether we are subject to any legal obligations <span className="italic">(e.g., any laws that require us to keep transaction records for a certain period of time before we can delete them)</span>
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            Whether we have taken any legal positions <span className="italic">(e.g., in connection with any statutes of limitation)</span>.
                                        </li>
                                    </ul>
                                    <p className="answer__text">
                                        Rather than delete your data, we might de-identify it by removing identifying details.
                                    </p>
                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" >Back to top</Link>
                                </Accordion>
                                <Accordion title="How Do You Protect My Information?" number="7" name="faq">
                                    <p className="answer__text">
                                        We protect your personal information with a series of organizational, technological and physical safeguards — but we cannot guarantee its absolute security. We recommend that you use complex and unique passwords for your Times accounts and for third-party accounts linked to them. Do not share your password with anyone.
                                    </p>
                                    <p className="answer__text">
                                        If you have reason to believe your interaction with us is no longer secure, notify us immediately.
                                    </p>
                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" >Back to top</Link>
                                </Accordion>
                                <Accordion title="Are There Guidelines for Children?" number="8" name="faq">
                                    <p className="answer__text">
                                        Times Services are intended for a general audience, and are not directed at children under (13) years of age.
                                    </p>
                                    <p className="answer__text">
                                        We do not knowingly gather personal information (as defined by the U.S. Children&rsquo;s Privacy Protection Act, or COPPA) in a manner not permitted by COPPA. If you are a parent or guardian and you believe we have collected information from your child in a manner not permitted by law, contact us at <a href="mailto:privacy@nytimes.com">privacy@nytimes.com</a>. We will remove the data to the extent required by applicable laws.
                                    </p>
                                    <p className="answer__text ccpa-content">
                                        In California we do not knowingly &ldquo;sell&rdquo; the personal information of minors under 16 years old (<Link to="anchor-question4-sectionE" offset={-70} spy={true} smooth={true} duration={500}>to understand what &ldquo;sell&rdquo; means</Link>).
                                    </p>
                                    <p className="answer__text ccpa-content">
                                        If you are a California resident under 18 years old and you are registered with a Times Service, you can ask us to remove content or information you&rsquo;ve posted to a Times Service. Email us at <a href="mailto:privacy@nytimes.com">privacy@nytimes.com</a> with &ldquo;California Under 18 Content Removal Request&rdquo; in the subject line, and tell us what you want removed.
                                    </p>
                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" >Back to top</Link>
                                </Accordion>
                                <Accordion title="How Is Information Transferred Internationally?" number="9" name="faq">
                                    <p className="answer__text">
                                        The New York Times Company is headquartered in the United States. If you are located outside the United States, your information is collected in your country and then transferred to the United States — or to another country in which we (or our affiliates or service providers) operate.
                                    </p>
                                    <p className="answer__text">
                                        If we transfer your data out of the European Economic Area (E.E.A.), we implement at least one of the three following safeguards:
                                    </p>
                                    <ul className="answer__text__category__ul bullet-point root-list">
                                        <li className="answer__text__category__ul__li">
                                            We transfer your information to countries that have been recognized by the European Commission as providing an adequate level of data protection according to E.E.A. standards (see the <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en">full list of these countries</a>).
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            We use a service provider in the United States that is <a href="https://www.privacyshield.gov/welcome">Privacy Shield</a> certified.
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            We take steps to ensure that the recipient is bound by E.U. Standard Contractual Clauses to protect your personal data. You can see a <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en">copy of these clauses</a>.
                                        </li>
                                    </ul>
                                    <p className="answer__text">
                                        In certain situations, the courts, law enforcement agencies, regulatory agencies or security authorities in those countries might be entitled to access your personal information.
                                    </p>
                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" >Back to top</Link>
                                </Accordion>
                                <Accordion title="What Is Our Legal Basis?" number="10" name="faq">
                                    <p className="answer__text">
                                        In some jurisdictions, like the European Union and the European Economic Area, we only collect, use or share information about you when we have a valid reason. This is called &ldquo;lawful basis.&rdquo; Specifically, this is one of the following:
                                    </p>
                                    <ul className="answer__text__category__ul bullet-point root-list">
                                        <li className="answer__text__category__ul__li">
                                            <p className="answer__text">The consent you provide to us at the point of collection of your information</p>
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            <p className="answer__text">The performance of the contract we have with you</p>
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            <p className="answer__text">The compliance of a legal obligation to which we are subject or</p>
                                        </li>
                                        <li className="answer__text__category__ul__li">
                                            <p className="answer__text">The legitimate interests of The Times, a third party or yourself. &ldquo;Legitimate interest&rdquo; is a technical term under international laws, including the European Union General Data Protection Regulation. It means that there are good reasons for the processing of your personal information, and that we take measures to minimize the impact on your privacy rights and interests. &ldquo;Legitimate interest&rdquo; also refers to our use of your data in ways you would reasonably expect and that have a minimal privacy impact.</p>

                                            We have a legitimate interest in gathering and processing personal information, for example: (1) to ensure that our networks and information are secure; (2) to administer and generally conduct business within The New York Times Company; (3) to prevent fraud; and (4) to conduct our marketing activities.
                                        </li>
                                    </ul>
                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" >Back to top</Link>
                                </Accordion>
                                <Accordion title="Links to Third-Party Services?" number="11" name="faq">
                                    <p className="answer__text">
                                        Some Times Services contain links to third-party websites, resources, vendors and advertisers. These third parties are not Times Services. We do not control (and are not responsible for) third party content or privacy practices. Any personal data you provide to them is not covered by this Privacy Policy.
                                    </p>
                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" >Back to top</Link>
                                </Accordion>
                                <Accordion title="How Are Changes to This Privacy Policy Communicated?" number="12" name="faq">
                                    <p className="answer__text">
                                        We periodically update this Privacy Policy. We will post any changes on this page by updating this policy.
                                    </p>
                                    <p className="answer__text">
                                        If we make a significant or material change in the way we collect, use or share your personal information, we will notify you at least 30 days prior to the changes taking effect. We will do this via email or prominent notice within Times Services. If you object to any change, you can stop using the Times Services.
                                    </p>
                                    <p className="answer__text">
                                        After we post any changes on this page, your continued use of Times Services is subject to the updated Privacy Policy.
                                    </p>
                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" >Back to top</Link>
                                </Accordion>
                                <Accordion title="How Can You Contact Us? Who Is the Controller of Your Personal Information?" number="13" name="faq">
                                    <p className="answer__text">
                                        If you have any questions, email us at <a href="mailto:privacy@nytimes.com">privacy@nytimes.com</a> or write us at:
                                    </p>
                                    <p className="answer__text">
                                        The New York Times Company<br/>
                                        620 Eighth Avenue<br/>
                                        New York, N.Y. 10018<br/>
                                        Attn.: Privacy Counsel
                                    </p>
                                    <p className="answer__text">
                                        We can also be reached by phone at 1-800-NYTIMES (see <a href="https://subscribe.inyt.com/footer?requestAction=displayContactIht">a list of our local telephone numbers outside the United States</a>).
                                    </p>
                                    <p className="answer__text">
                                        The New York Times Company is referred to in this Privacy Policy as &ldquo;The Times,&rdquo; &ldquo;we&rdquo; or &ldquo;our.&rdquo;
                                    </p>
                                    <Link to="root" spy={true} smooth={true} duration={500} className="back-top" >Back to top</Link>
                                </Accordion>

                            </div>

                        </div>

                    </div>

                </section>

            </div>
        );
    }
}

export default FaqTemplate;
