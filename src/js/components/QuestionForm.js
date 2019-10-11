import React, { Component } from 'react';

class QuestionForm extends Component{
    
    render(){

        return (
            <div className="QuestionForm">

                <section className="question-form">   
                    <div className="container">    
                        
                        <div className="form-holder">
                            <h3 className="form-holder__title">Any other questions?</h3>
                            <p className="form-holder__text"><a href="">Contact us</a> with any further questions. These questions will be directed to our policy experts, who will respond to the most pressing queries. We will not use or share your email address for any other purpose.</p>

                            <form className="form-holder__form">
                                <div className="form-holder__form__field">
                                    <label for="email" className="email">Your Email Address</label>
                                    <input type="email" name="email" value="" required pattern=""/>
                                </div>
                                <div className="form-holder__form__field">
                                    <label for="email" className="text">Your Question</label>
                                    <textarea rows="" cols="" name="text"></textarea>
                                </div>
                                <div className="form-holder__form__field">
                                    <input type="submit" name="submit" value="submit" className="cta"/>
                                    <p className="messages">Please complete both fields.</p>
                                </div>
                            </form>

                        </div>

                    </div>

                </section>
                
            </div>
        );
    }
}

export default QuestionForm;