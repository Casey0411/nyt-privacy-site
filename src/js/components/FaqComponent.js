import React, { useState, useRef} from 'react';
import FaqItem from './FaqItem';
import SlideToggle from 'react-slide-toggle';
//import PropTypes from 'prop-types';

//SVG
import { ReactComponent as CollapseExpand } from './svg_components/collapse-expand.svg';
import { ReactComponent as Collapse } from './svg_components/collapse.svg';
import { ReactComponent as Expand } from './svg_components/expand.svg';


function FaqComponent() {

    
    // state = {
    //     faq :[
    //         {
    //             id: 1,
    //             question: 'Why does The Times collect (and use) my data?',
    //             answer:{
    //                 paragraph1: 'At The Times, our mission is to help people understand the world. This means creating the best possible reader experience across every medium — which involves knowing certain things about our readership. Data like page views, preferred devices and beyond can help us understand what our readers care about. That information lets us tailor future content to your needs.',
    //                 paragraph2: 'Beyond that, The Times is primarily funded by subscriptions and advertising. Both functions require the use of readers’ data. For example, we use readers’ data to identify who may be interested in a subscription in order to show you Times ads on other websites. Our advertisers might ask us to use readers’ data so we can show their ads to the right audiences.',
    //             }
    
    //         },
    //         {
    //             id: 2,
    //             question: 'What type of data is collected about me when I’m accessing The Times?',
    //             answer:{
    //                 paragraph1: 'There are effectively two types of data collection: direct and indirect.',
    //                 paragraph2: 'Direct collection means you are submitting data to us. For example, when you create an account with The Times, you submit your email address to set up and personalize it. When you subscribe, you submit the necessary billing info to process your payment.',
    //                 paragraph3:'Indirect data collection takes place passively as you interact with our site. These tools allow us to gather data on your reading behaviors, including the articles you’ve read and how often you access The Times. Other data is collected via ads by third-party advertisers.'
    //             }
    
    //         }
    //     ]
    // }

    const answerEl = "answer";

    const [faqs, setFaq] = useState([
        {
            question : 'Why does The Times collect (and use) my data?',
            //answer: 'At The Times, our mission is to help people understand the world. This means creating the best possible reader experience across every medium — which involves knowing certain things about our readership. Data like page views, preferred devices and beyond can help us understand what our readers care about. That information lets us tailor future content to your needs.',
            answer: 'At The Times, our mission is to help people understand the world. This means creating the best possible reader experience across every medium — which involves knowing certain things about our readership. Data like page views, preferred devices and beyond can help us understand what our readers care about. That information lets us tailor future content to your needs.',
            answer: 'Direct collection means you are submitting data to us. For example, when you create an account with The Times, you submit your email address to set up and personalize it. When you subscribe, you submit the necessary billing info to process your payment.',
            open: false,
            id: '1'
        }
    ]);


    const [setActive, setActiveState] = useState("");
    const [setVisible, SetVisibleState] = useState("close");
    const [setIcon, SetIconState] = useState(<Expand/>);

    const content = useRef(null);

    function toggleAccordion () {
        setActiveState (setActive === "" ? "active" : "");
        SetVisibleState(
            setActive === "active" ? "close" : "open"
        );
        SetIconState(
            setActive === "active" ? <Expand/> : <Collapse/> 
        );

        

    }



    return (

        <div className="FaqComponent">
            <section className="faq-section" id="faq-section">
                <div className="container">

                    <div className="faq-title">
                        <h4 className="faq-title__text">Frequently asked questions</h4>
                        <button className="all-faq-trigger">
                            <CollapseExpand/>
                        </button>
                    </div>

                    <div className="faq-holder">

                        <div className="faq-question">
                            <h5 className={`question ${setActive}`} onClick ={toggleAccordion}>
                                Why does The Times collect (and use) my data?
                                <div className="question__icon">
                                    {setIcon}
                                </div>
                            </h5>
                            <div className={`answer  ${setVisible}`}>
                                <p className="answer__text">At The Times, our mission is to help people understand the world. This means creating the best possible reader experience across every medium — which involves knowing certain things about our readership. Data like page views, preferred devices and beyond can help us understand what our readers care about. That information lets us tailor future content to your needs.</p>
                                <p className="answer__text">Beyond that, The Times is primarily funded by subscriptions and advertising. Both functions require the use of readers’ data. For example, we use readers’ data to identify who may be interested in a subscription in order to show you Times ads on other websites. Our advertisers might ask us to use readers’ data so we can show their ads to the right audiences.</p>
                            </div>
                        </div>

                        <div className="faq-question">
                            <h5 className="question">
                                What type of data is collected about me when I’m accessing The Times?
                                <div className="question__icon">
                                    <Expand/>
                                </div>
                            </h5>
                            <div className="answer">
                                <p className="answer__text">There are effectively two types of data collection: direct and indirect.</p>
                                <p className="answer__text">Direct collection means you are submitting data to us. For example, when you create an account with The Times, you submit your email address to set up and personalize it. When you subscribe, you submit the necessary billing info to process your payment.</p>
                                <p className="answer__text">Indirect data collection takes place passively as you interact with our site. These tools allow us to gather data on your reading behaviors, including the articles you’ve read and how often you access The Times. Other data is collected via ads by third-party advertisers.</p>
                            </div>
                        </div>

                        <div className="faq-question">
                            <h5 className="question">
                                How are you keeping my data safe?
                                <div className="question__icon">
                                    <Expand/>
                                </div>
                            </h5>
                            <div className="answer">
                                <p className="answer__text">We’ve implemented organizational, technological and physical safeguards to ensure that our readers’ data remains secure internally. The Times has a specific team dedicated to building, maintaining and upgrading the measures we take to protect your data.</p>
                                <p className="answer__text">We cannot get too specific here, for obvious security reasons.</p>
                            </div>
                        </div>

                        <div className="faq-question">
                            <h5 className="question">
                                What are some ways I can protect my data?
                                <div className="question__icon">
                                    <Expand/>
                                </div>
                            </h5>
                            <div className="answer">
                                <p className="answer__text">We do our best to keep your data secure on our end, but we cannot guarantee your data’s absolute security. To learn more ways to better protect  your data, please see our guide.</p>
                            </div>
                        </div>

                        <div className="faq-question">
                            <h5 className="question">
                                Why am I given the option to use Facebook and Google for log-in?
                                <div className="question__icon">
                                    <Expand/>
                                </div>
                            </h5>
                            <div className="answer">
                                <p className="answer__text">Our readers had previously voiced a desire for our log-in process to become even simpler.</p>
                                <p className="answer__text">When you use one of these websites to log in, the email address associated with that account becomes your Times account email address. Your data will then be handled as per the policies of the respective company.</p>
                            </div>
                        </div>

                    </div>

                    {
                        //<FaqItem/>
                    }
                    
                    {
                    // faqs.map((faq, i) => (
                    //    <FaqItem faq={faq} index={i} />
                    // ))
                    
                    }

                </div>
            </section>

        </div>
    );
    
}

export default FaqComponent;