import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from "react-scroll";

//components


function ThirdParty (){
    return (
        <Fade>
            <div className="ThirdParty">

            <section className="third-party">
                <div className="container">

                    <div className="third-party__hero">
                        <h1 className="third-party__hero__title">Third Parties</h1>

                    </div>

                    <div className="third-party__main">

                        <p className="third-party__main__text">We collaborate with vendors for a wide range of reasons. This page was created to list these vendors, and to make it easier to find their respective privacy policies. Keep in mind that this list might not be complete. We sometimes update this page and will post any changes here.</p>

                        <p className="third-party__main__text">We do not control these vendors’  privacy practices and cannot be held responsible for them (e.g., if they fail to comply with opt-out requests). Any personal data you provide to them is covered by their privacy policies, not ours.</p>

                        <p className="third-party__main__text">Note: This list does not include the third parties used by these third parties or by our advertisers.</p>

                    </div>

                    <div className="third-party__listsection">
                        <h3 class="third-party__listsection__title">List of third parties engaged by The Times:</h3>

                        <div className="third-party__list">

                            <div className="third-party__list__column">

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Adobe</h4>
                                    <a className="third-party__list__slot__link" href="https://www.adobe.com/privacy/opt-out.html">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Amazon</h4>
                                    <a className="third-party__list__slot__link">Privacy Policy</a>
                                    <p className="third-party__list__slot__text">To opt out, visit <a href="https://www.amazon.co.uk/adprefs">here</a> or <a href="http://www.youronlinechoices.com/">here</a>.</p>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">AppFlyer</h4>
                                    <a className="third-party__list__slot__link">Privacy Policy</a>
                                    <p className="third-party__list__slot__text">To opt out, email a request to privacy@appsflyer.com or by completing the form <a href="https://www.appsflyer.com/optout">here</a>.</p>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">AppNexus</h4>
                                    <a className="third-party__list__slot__link" href="https://www.appnexus.com/platform-privacy-policy#choices">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Bing</h4>
                                    <a className="third-party__list__slot__link" href="https://about.ads.microsoft.com/en-us/resources/policies/opt-out-of-the-microsoft-advertising-optimization-program">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Chartbeat</h4>
                                    <a className="third-party__list__slot__link" href="https://static.chartbeat.com/opt-out.html">Privacy Policy<br/> Opt out</a>
                                </div>


                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">comScore</h4>
                                
                                    <p className="third-party__list__slot__text">To opt out, see <a href="https://www.comscore.com/About/Privacy-Policy">comScore Privacy Policy</a> for instructions. </p>
                                </div>


                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Facebook</h4>
                                    <a className="third-party__list__slot__link" href="https://www.facebook.com/help/568137493302217">Privacy Policy<br/> Opt out</a>
                                </div>


                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Google</h4>
                                    <a className="third-party__list__slot__link">Privacy Policy</a>
                                    <p className="third-party__list__slot__text">See also <a href="https://adssettings.google.com/authenticated">Google Ads &amp; Data Opt out</a></p>
                                    <p className="third-party__list__slot__text">You can then either turn ad personalization off completely or turn off what you do not find relevant. These settings would be reflective across all of Google ad services and on their partner sites.</p>
                                    <p className="third-party__list__slot__text">You can also manage the activity and data saved in your Google account by going <a href="https://myactivity.google.com/myactivity?authuser=0">here</a>. The data saved there also gives you more personalized experiences across Google services.</p>
                                </div>


                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Google Analytics</h4>
                                    <a className="third-party__list__slot__link" href="https://tools.google.com/dlpage/gaoptout">Privacy Policy<br/> Opt out</a>
                                </div>


                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">LinkedIn</h4>
                                    <a className="third-party__list__slot__link" href="https://www.linkedin.com/help/linkedin/answer/62931?trk=microsites-frontend_legal_privacy-policy&lang=en">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Liveintent </h4>
                                    <a className="third-party__list__slot__link" href="http://optout.aboutads.info/?c=2&lang=EN">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">LivePerson </h4>
                                    <a className="third-party__list__slot__link" href="https://www.allaboutcookies.org/manage-cookies/ and www.youronlinechoices.eu">Privacy Policy</a>
                                    <p className="third-party__list__slot__text">To opt out, visit <a href="">here</a> and <a href="">here</a>.</p>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Localytics </h4>
                                    <a className="third-party__list__slot__link" href="https://www.localytics.com/privacy-policy/">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Media.net</h4>
                                    <a className="third-party__list__slot__link" href="https://www.media.net/privacy-policy">Privacy Policy</a>
                                    <p className="third-party__list__slot__text">To opt out, visit <a href="http://www.networkadvertising.org/choices/">here</a> and <a href="http://www.networkadvertising.org/mobile-choice">here</a>.</p>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Moveable Ink </h4>
                                    <a className="third-party__list__slot__link" href="http://optout.aboutads.info/?c=2&lang=EN">Privacy Policy<br/> Opt out</a>
                                </div>

                            </div>

                            <div className="third-party__list__column">

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Omnivirt</h4>
                                    <a className="third-party__list__slot__link" href="https://www.omnivirt.com/tos/privacy/">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">OpenX</h4>
                                    <a className="third-party__list__slot__link" href="https://www.openx.com/legal/privacy-policy/">Privacy Policy</a>
                                    <p className="third-party__list__slot__text">To opt out, see <a href="">OpenX Privacy Policy</a> for instructions.</p>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Optimizely </h4>
                                    <a className="third-party__list__slot__link" href="https://www.optimizely.com/legal/opt-out/">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Oracle</h4>
                                    <a className="third-party__list__slot__link" href="https://datacloudoptout.oracle.com/#optout">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Pinterest</h4>
                                    <a className="third-party__list__slot__link" href="https://help.pinterest.com/en/article/personalization-and-data">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Pubmatic</h4>
                                    <a className="third-party__list__slot__link" href="https://pubmatic.com/legal/opt-out/">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Rakuten</h4>
                                    <a className="third-party__list__slot__link" href="https://rakutenmarketing.com/legal-notices/services-privacy-policy/">Privacy Policy</a>
                                    <p className="third-party__list__slot__text">To opt out, see <a href="https://rakutenmarketing.com/legal-notices/services-privacy-policy/">Rakuten Services Privacy Policy</a> for instructions.</p>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Reddit</h4>
                                    <a className="third-party__list__slot__link" href="https://www.reddit.com/personalization/">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">ROKT</h4>
                                    <a className="third-party__list__slot__link" href="https://rokt.com/privacy-policy/">Privacy Policy </a>
                                    <p className="third-party__list__slot__text">To opt out, see <a href="https://rokt.com/privacy-policy/">ROKT Privacy Policy</a> for instructions.</p>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Rubicon</h4>
                                    <a className="third-party__list__slot__link" href="https://rubiconproject.com/rubicon-project-advertising-technology-privacy-policy/">Privacy Policy</a>
                                    <p className="third-party__list__slot__text" href="">To opt out, visit <a href="http://rubiconproject.com/privacy/consumer-online-profile-and-opt-out/">here</a> and <a href="http://www.networkadvertising.org/mobile-choice">here</a>.</p>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Sizmek</h4>
                                    <a className="third-party__list__slot__link" href="https://www.sizmek.com/privacy-policy/optedout/#options">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Snap</h4>
                                    <a className="third-party__list__slot__link" href="https://support.snapchat.com/en-US/a/advertising-preferences">Privacy Policy<br/> Opt out</a>
                                </div>


                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">The Trade Desk</h4>
                                    <a className="third-party__list__slot__link" href="https://www.thetradedesk.com/general/privacy#_Toc514494731">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Triplelift</h4>
                                    <a className="third-party__list__slot__link" href="https://triplelift.com/privacy/">Privacy Policy</a>
                                    <p className="third-party__list__slot__text">To opt out, see <a href="triplelift.com">Triplelift Privacy Policy</a> for instructions.</p>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Tune</h4>
                                    <a className="third-party__list__slot__link" href="https://www.tune.com/resources/data-and-privacy/privacy-policies/">Privacy Policy</a>
                                    <p className="third-party__list__slot__text">To opt out, see <a href="https://www.tune.com/resources/data-and-privacy/privacy-policies/">Tune Privacy Policy</a> for instructions.</p>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Twitter</h4>
                                    <a className="third-party__list__slot__link" href="https://help.twitter.com/en/safety-and-security/privacy-controls-for-tailored-ads">Privacy Policy<br/> Opt out</a>
                                </div>

                                <div className="third-party__list__slot">
                                    <h4 className="third-party__list__slot__title">Verizon OATH</h4>
                                    <a className="third-party__list__slot__link" href="https://www.verizonmedia.com/policies/in/en/verizonmedia/privacy/controls/index.html">Privacy Policy<br/> Opt out</a>
                                </div>
 
                            </div>

                        </div>

                        <Link to="root" spy={true} smooth={true} duration={500} className="back-top" >Back to top</Link>

                    </div>

                </div>
            </section>

            </div>
        </Fade>
    );

}

export default ThirdParty;