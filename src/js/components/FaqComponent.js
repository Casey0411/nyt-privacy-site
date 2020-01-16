import React from 'react';
import $ from 'jquery';

import Accordion from './Accordion'

//SVG
import { ReactComponent as CollapseExpand } from './svg_components/collapse-expand.svg';

function FaqComponent() {

    function toggleAllQuestions () {

        if($('.faq-question.active').length === $('.faq-question').length){
            $('.question').trigger('click');
        }else{
            $('.faq-question.notActive .question').trigger('click');
        }

    }

    return (

        <div className="FaqComponent">
            <section className="faq-section" id="faq-section">
                <div className="container">

                    <div className="faq-title">
                        <h4 className="faq-title__text">Frequently asked questions</h4>
                        <button className="all-faq-trigger" onClick={toggleAllQuestions}>
                            <CollapseExpand/>
                        </button>
                    </div>

                    <div className="faq-holder">

                        <Accordion title="Why does The Times collect (and use) my data?" number="1">
                            <p className="answer__text">At The Times, we aim to create the best possible reader experience across every medium. This involves knowing certain things about our readership. For example, knowing which articles you read helps us understand your interests. That information lets us select the types of articles we show you in certain parts of the app or site. (This article selection process is still guided by our journalistic judgment, and doesn't impact large portions of the app or site.)</p>
                            <p className="answer__text">It is important to note that The Times is primarily funded by subscriptions and advertising. Both functions require the use of readers’ data. For example, we use readers’ data to identify who may be interested in a subscription in order to show you Times ads on other websites. Our advertisers ask us to use reader data so their ads can be targeted at the right audiences.</p>
                        </Accordion>
                        <Accordion title="What type of data is collected about me when I’m accessing The Times?" number="2">
                            <p className="answer__text">Different types of data are collected based on the different Times services you use. There are effectively two types of data collection: direct and indirect.</p>
                            <p className="answer__text"><strong>Direct data collection</strong> means you are submitting data to us. For example, when you create an account with The Times, you submit your email address to set up and personalize it.</p>
                            <p className="answer__text"><strong>Indirect data collection</strong> takes place passively as you interact with our site or apps. Our tracking technologies collect data about your reading behavior, like which articles you read or how often you visit The Times. Third-party advertisers collect behavioral data associated with their ads shown on our site or apps. Additionally, we collect data about readers from sources like privately owned databases and social media platforms.</p>
                        </Accordion>
                        <Accordion title="What does The Times do with data it collects on me?" number="3">
                            <p className="answer__text">We use it to cater our journalism and other offerings to you, like by recommending stories that may be of interest. The specific data we use depends on the offering, and how you are accessing it. We also use your data to tailor your experience, which includes marketing and advertising.</p>
                        </Accordion>
                        <Accordion title="How are you keeping my data safe?" number="4">
                            <p className="answer__text">We have implemented organizational, technological and physical safeguards designed to keep our readers’ data secure internally. The Times is dedicated to building, maintaining and upgrading the measures we take to protect your data.</p>
                        </Accordion>
                        <Accordion title="What are some ways I can protect my data?" number="5">
                            <p className="answer__text">We encourage our readers to take steps to safeguard their own data. We recently published a guide on this topic: <a href="https://www.nytimes.com/guides/privacy-project/how-to-protect-your-digital-privacy">&ldquo;How to Protect Your Digital Privacy.&rdquo;</a></p>
                        </Accordion>
                        <Accordion title="Why am I given the option to use Facebook and Google for log-in?" number="6">
                            <p className="answer__text">Our readers have voiced a desire for our log-in process to be even simpler.</p>
                            <p className="answer__text">If you sign up via Facebook or Google, they share limited data with us so we can create an account for you. We do not share any data about your reading behavior with Facebook or Google when you sign up. To learn more, see our <a href="https://help.nytimes.com/hc/en-us/articles/115014887628-Social-login">social login page</a>.</p>
                        </Accordion>

                        <Accordion title="How can I learn more about how companies use personal data online?" number="7">
                            <p className="answer__text">The Times regularly publishes pieces on the topic, including in <a href="https://www.nytimes.com/2019/11/04/business/secret-consumer-score-access.html">Business</a>, <a href="https://www.nytimes.com/2019/11/19/technology/artificial-intelligence-dawn-song.html">Technology</a> and <a href="https://www.nytimes.com/2019/11/24/smarter-living/privacy-online-how-to-stop-advertiser-tracking-opt-out.html">Smarter Living</a>.</p>

                            <p className="answer__text">Our Opinion series, <a href="https://www.nytimes.com/series/new-york-times-privacy-project">The Privacy Project</a>, explains how online privacy affects your daily life — and shows you how to take control of your data.</p>
                        </Accordion>

                    </div>

                </div>

            </section>

        </div>
    );

}

export default FaqComponent;
