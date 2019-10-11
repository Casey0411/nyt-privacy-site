import React, { Component } from 'react';
import FaqItem from './FaqItem';
//import PropTypes from 'prop-types';

//SVG
import { ReactComponent as Collapse } from './svg_components/collapse.svg';
import { ReactComponent as Expand } from './svg_components/expand.svg';


class FaqTemplate extends Component{

    // state ={
    //     reachedTop :false,
    // }

    // handleWaypointEnter = () =>{
    //     console.log('reach top');
    // }

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
        this.setState({top: el.offsetTop - 50, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
 
    render(){

        return (

            <div className="FaqTemplate">

                <section className="faq">
                
                    <div className="container">

                        <div className={"faq__sidebar " + (this.state.scroll > this.state.top ? "fixed-nav" : "")}>
                            <ul className="faq__idebar__ul">
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">1.</div>
                                    <a href="" className="faq__sidebar__ul__list__link">What Information Do We Gather About You?</a>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">2.</div>
                                    <a href="" className="faq__sidebar__ul__list__link">What Do We Do With The Information We Collect About You?</a>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">3.</div>
                                    <a href="" className="faq__sidebar__ul__list__link">With Whom Do We Share The Information We Gather?</a>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">4.</div>
                                    <a href="" className="faq__sidebar__ul__list__link">Your Rights</a>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">5.</div>
                                    <a href="" className="faq__sidebar__ul__list__link">Sensitive Personal Information</a>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">6.</div>
                                    <a href="" className="faq__sidebar__ul__list__link">Data Retention</a>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">7.</div>
                                    <a href="" className="faq__sidebar__ul__list__link">How Do We Protect Your Information?</a>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">8.</div>
                                    <a href="" className="faq__sidebar__ul__list__link">Children’s Guidelines</a>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">9.</div>
                                    <a href="" className="faq__sidebar__ul__list__link">International Transfers`</a>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">10.</div>
                                    <a href="" className="faq__sidebar__ul__list__link">Links to Third-Party Services</a>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">11.</div>
                                    <a href="" className="faq__sidebar__ul__list__link">Changes to This Privacy Policy</a>
                                </li>
                                <li className="faq__sidebar__ul__list">
                                    <div className="faq__sidebar__ul__list__number">12.</div>
                                    <a href="" className="faq__sidebar__ul__list__link">How to Contact Us and the Controller of Your Personal Information</a>
                                </li>

                            </ul>

                        </div>

                        <div className="faq__main-content">

                            <p className="faq__main-content__parapgraph">This Privacy Policy describes our practices when you use our print and digital products and services. It does not apply to our information processing activities that link to a separate privacy policy. The list below describes what products and services are included in this Privacy Policy. In this Privacy Policy, we refer to any or all of the following as the “NYT Services”:</p>

                            <ul className="faq__main-content__ul">
                                <li className="faq__main-content__ul__li">The New York Times newspaper (including its international edition),</li>
                                <li className="faq__main-content__ul__li">Websites (such as NYTimes.com),</li>
                                <li className="faq__main-content__ul__li">Apps (such as The New York Times app and apps for The New York Times Cooking, and The New York Times Crossword),</li>
                                <li className="faq__main-content__ul__li">Email newsletters (like Cooking and The Morning Briefing)</li>
                                <li className="faq__main-content__ul__li">Our pages or ads on social media networks, and</li>
                                <li className="faq__main-content__ul__li">anywhere we gather information from you, offline or online, and link to or provide this Privacy Policy.</li>
                            </ul>

                            <p className="faq__main-content__parapgraph">How we handle your information depends on how you use the NYT Services. For example, if you have a print subscription, we collect and use different information than if you browse our websites without a subscription. Some NYT Services have additional terms that further explain our collection and use of the information through that specific service (for example, our Reader Submission Terms). For more information, please visit the relevant section below.</p>

                            <div className="question-answers-holder">

                                <div className="faq-question">
                                    <h5 className="question">
                                        <div className="question__number">1.</div>
                                        What Information Do We Gather About You?
                                        <div className="question__icon"><Expand/></div>
                                    </h5>
                                    <div className="answer">
                                        <p className="answer__text">When you use the NYT Services, we gather different kinds of information about you. That information may personally identify you (either alone or when combined with other information).  The following lists main examples of such information and describes how we (or our service providers on our behalf) gather it.</p>
                                        <p className="answer__text">
                                            <strong className="answer__text__category">A) Through the NYT Services.</strong>
                                        </p>
                                        <ol className="answer__text__category__ol roman-numerals">
                                            
                                            <li className="answer__text__category__ol__li">
                                                <strong>Information That You Voluntarily Give Us</strong>

                                                <ul className="answer__text__category__ul bullet-point">
                                                    <li className="answer__text__category__ul__li"><strong>Registration:</strong> When you register for a NYT Service (such as a subscription, a newsletter, a conference, or an event), we collect your contact information and, if applicable, account credentials. When you register for an account with a NYT Service, we assign you a unique ID number that we use to recognize you when you are signed in to our NYT Service. You might choose to sign up by linking your Facebook or Google accounts (we talk more about that below in the section about how we collect personal information “From Other Sources”). Registration for an event or conference may request additional information, such as company name, title, and dietary restrictions.
                                                    </li>
                                                    <li className="answer__text__category__ul__li"><strong>Billing:</strong> To enable payment and donations, we collect and use your name, address, telephone number, email address, credit or debit card information and other billing information. </li>
                                                    <li className="answer__text__category__ul__li"><strong>User-Generated Content and Public Activities (Including Comments and Reader Reviews):</strong> We offer you opportunities to provide us with information that is visible to other users. For example, you may choose to make comments, recommendations, reader reviews, ratings or other public statements. Of course, if you post any content on our sites or apps, anyone else who uses the NYT Services can read, collect, see, and use your personal information associated with your content. We do not have to publish any of your content. If and to the extent the law requires us to take down, remove, or edit your personal information, we will do so. Your personal information is different from content that you post that does not personally identify you. For more information about this, see the Comments FAQ and read the “User-Generated Content: Submissions Including Comments, Reader Reviews and More” section of our Terms of Service.</li>
                                                    
                                                    <li className="answer__text__category__ul__li"><strong>Contests, Sweepstakes and Special Offers:</strong> We gather your name, email and any other information you provide us when you participate in sweepstakes, contests or special offers.</li>
                                                    <li className="answer__text__category__ul__li"><strong>Reader Surveys, Reader Panels, Reader Experience Programs and Market Research:</strong> We gather information through questionnaires, surveys and feedback programs. We also conduct similar research for advertisers. We will ask you for your consent to use your information in various ways when you participate in these surveys, panels and research.</li>
                                                    <li className="answer__text__category__ul__li"><strong>Contact with Our Call Centers:</strong> We collect information from you when you place an order over the phone or contact customer service through one of our toll-free numbers.</li>
                                                    <li className="answer__text__category__ul__li"><strong>Personal Contacts Data:</strong> We collect data about your friends, family or acquaintances with your consent and to fulfill a request by you, such as during our Refer a Friend campaigns. Note that we would never scan your device for contacts data, or upload said data. Such functionality is only intended for U.S. residents. By using this functionality, you acknowledge and agree that both you and your contacts are based in the U.S. and that you have your contacts’ consent for us to use their contact information to fulfill your request.</li>
                                                </ul>
                                            </li>
                                            <li className="answer__text__category__ol__li">
                                                <strong>Information Collected Automatically Using Technology</strong>

                                                <ul className="answer__text__category__ul bullet-point">
                                                    <li className="answer__text__category__ul__li"><strong>Information that is collected from you using cookies, web beacons, tags and scripts, software development kits (or SDKs) and other tracking technologies including local storage objects such as HTML5:</strong> We log usage information when you visit or otherwise use a NYT Service including websites and apps. We log your Internet protocol (IP) address, geolocation (discussed more below), browser type, unique device identifiers, advertising identifiers, operating system, and other usage information, including a history of the pages you view on our websites and apps. When we are the one collecting this information, we automatically combine this information with other information we collect about you. For more detailed information about the use of tracking technologies by us and third parties on NYT Services, and how to manage them for the applicable NYT Service, see the applicable Cookie Policy here. You will not be able to access certain areas of our websites, including your account on NYTimes.com, if your computer does not accept tracking technologies from us. Because the “do not track” browser-based standard signal has failed to date to gain the level of acceptance that would render it meaningful, we currently do not respond to such signals.
                                                    </li>
                                                    <li className="answer__text__category__ul__li"><strong>Location Information:</strong> Some of our mobile applications can deliver content based on your precise GPS location if you choose to enable that feature of the app (these have included the Real Estate app and T Brand Studio Augmented Reality app done in partnership with the movie “Hidden Figures”). If you have enabled GPS location-based features, your location can be derived, for example, by the use of satellite, cell phone tower, or WiFi signals. You have the choice to enable GPS location-based features when you initially install the app, but you can change that election within the settings of your device at any time.  If you enable the GPS location-based feature, your current GPS location will be stored locally on your device and used by the app. If you elect to have a GPS location-based search saved to your history, we will store that information on our servers. If you do not enable the GPS location-based service, or if an app does not have that feature, the app will not transmit to us, and we will not collect or store, your GPS location information. We collect your Internet protocol (IP) address from which we can deduct your non-precise location. The ads in our apps are not targeted to you based on your current GPS location, but they are targeted to you based on your ZIP code or device’s IP address.
                                                    </li>
                                                </ul>
                                            
                                            </li>
                                        </ol>

                                        <p className="answer__text">
                                            <strong className="answer__text__category">B) From Other Sources.</strong>
                                        </p>
                                        <p className="answer__text">We also gather information about you from other sources. The following are some examples:</p>

                                        <ol className="answer__text__category__ol roman-numerals">
                                            <li className="answer__text__category__ol__li">Privately-owned databases. These databases include publicly available information, information from surveys, and data from other providers. They are from marketing and data analytics companies as well as social media companies. For example, we receive demographic information such as your gender, age range, or household income from these sources.
                                            </li>
                                            <li className="answer__text__category__ol__li">Joint marketing third parties. In this case, the third party collects and then shares the information with us. For example, we have in the past offered joint marketing bundles with Spotify and Scribd.</li>
                                            <li className="answer__text__category__ol__li">Social-media platforms (such as Facebook and Google), and other third-party services (such as Kindle or Nook). If you choose to link your social-media account or account relating to other third-party services to the NYT Services, those third parties send us certain information about you from those social media accounts or services accounts, such as your email address. By linking those services, you authorize us to collect, store, and use that information. You can disconnect your NYTimes.com registration from third-party accounts any time. For more detail, please see our Social Media FAQ. We also receive information from you when you interact with our official pages, groups, accounts or posts on social media platforms, such as your public profile, aggregated information about the audience that follows us (such as age, gender and location), engagement (like, comments, shares, reposts, and clicks) and awareness (number of impressions and reach).</li>
                                            <li className="answer__text__category__ol__li">Workplace and schools. When your employer or school buys a subscription to nytimes.com for your use, they sometimes provide us with your name and professional email address in addition to their IP address(es) in order to grant you access to nytimes.com.</li>
                                        </ol>

                                        <p className="answer__text">
                                            <strong className="answer__text__category">C) Anything else?</strong>
                                        </p>
                                        <p className="answer__text">Our NYT Services are always improving and new features are created regularly. Such new features may require the collection of new information or a different usage of the information we have. If we make a significant or material change in the way we collect, use or share your personal information, we will notify you (as further detailed below). </p>

                                        <a className="back-top" href="javascript:void(0)">Back to top</a>
                                    </div> 

                                </div>


                                <div className="faq-question">
                                    <h5 className="question">
                                        <div className="question__number">2.</div>
                                        What Do We Do With The Information We Collect About You?
                                        <div className="question__icon"><Expand/></div>
                                    </h5>

                                    <div className="answer">

                                        <a className="back-top" href="javascript:void(0)">Back to top</a>
                                    </div>

                                </div>


                                <div className="faq-question">
                                    <h5 className="question">
                                        <div className="question__number">3.</div>
                                        With Whom Do We Share The Information We Gather?
                                        <div className="question__icon"><Expand/></div>
                                    </h5>

                                    <div className="answer">

                                        <a className="back-top" href="javascript:void(0)">Back to top</a>
                                    </div>

                                </div>


                                <div className="faq-question">
                                    <h5 className="question">
                                        <div className="question__number">4.</div>
                                        Your Rights
                                        <div className="question__icon"><Expand/></div>
                                    </h5>

                                    <div className="answer">


                                        <a className="back-top" href="javascript:void(0)">Back to top</a>
                                    </div>

                                </div>


                                <div className="faq-question">
                                    <h5 className="question">
                                        <div className="question__number">5.</div>
                                        Sensitive Personal Information
                                        <div className="question__icon"><Expand/></div>
                                    </h5>

                                    <div className="answer">

            
                                        <a className="back-top" href="javascript:void(0)">Back to top</a>
                                    </div>

                                </div>


                                <div className="faq-question">
                                    <h5 className="question">
                                        <div className="question__number">6.</div>
                                        Data Retention
                                        <div className="question__icon"><Expand/></div>
                                    </h5>

                                    <div className="answer">
                                        <a className="back-top" href="javascript:void(0)">Back to top</a>
                                    </div>

                                </div>

                                <div className="faq-question">
                                    <h5 className="question">
                                        <div className="question__number">7.</div>
                                        How Do We Protect Your Information?
                                        <div className="question__icon"><Expand/></div>
                                    </h5>

                                    <div className="answer">
                                        <a className="back-top" href="javascript:void(0)">Back to top</a>
                                    </div>

                                </div>

                                <div className="faq-question">
                                    <h5 className="question">
                                        <div className="question__number">8.</div>
                                        Children’s Guidelines
                                        <div className="question__icon"><Expand/></div>
                                    </h5>

                                    <div className="answer">
                                        <a className="back-top" href="javascript:void(0)">Back to top</a>
                                    </div>
                                </div>


                                <div className="faq-question">
                                    <h5 className="question">
                                        <div className="question__number">9.</div>
                                        International Transfers
                                        <div className="question__icon"><Expand/></div>
                                    </h5>

                                    <div className="answer">
                                        <a className="back-top" href="javascript:void(0)">Back to top</a>
                                    </div>

                                </div>

                                <div className="faq-question">
                                    <h5 className="question">
                                        <div className="question__number">10.</div>
                                        Links to Third-Party Services
                                        <div className="question__icon"><Expand/></div>
                                    </h5>

                                    <div className="answer">
                                        <a className="back-top" href="javascript:void(0)">Back to top</a>
                                    </div>
                                </div>

                                <div className="faq-question">
                                    <h5 className="question">
                                        <div className="question__number">11.</div>
                                        Changes to This Privacy Policy
                                        <div className="question__icon"><Expand/></div>
                                    </h5>

                                    <div className="answer">
                                        <a className="back-top" href="javascript:void(0)">Back to top</a>
                                    </div>
                                </div>

                                <div className="faq-question">
                                    <h5 className="question">
                                        <div className="question__number">12.</div>
                                        How to Contact Us and the Controller of Your Personal Information
                                        <div className="question__icon"><Expand/></div>
                                    </h5>

                                    <div className="answer">
                                        <a className="back-top" href="javascript:void(0)">Back to top</a>
                                    </div>

                                </div>

                            </div>
                            
                        </div>

                    </div>

                </section>             

            </div>
        );
    }
}

export default FaqTemplate;