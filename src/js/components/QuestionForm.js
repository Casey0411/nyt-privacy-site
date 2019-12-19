import React, { Component } from 'react';

import axios from 'axios';

const initialState = {
    email: "",
    text: "",
    emailError: "",
    textError: "",
    thanksMessage: ""
}

export class QuestionForm extends Component{

    state = initialState;

    handleChange = event => {

        let thanksMessage = ""; 
        this.setState({thanksMessage});

       // console.log({[fieldName]: event.target.value});
      // console.log(event.target.name);

        this.setState({[event.target.name]: event.target.value});

        // const isCheckbox = event.target.type === "checkbox";
        // this.setState({
        //     [event.target.name]: isCheckbox
        //     ? event.target.checked
        //     : event.taget.value

        // });

    };

    validate = () =>{
        let emailError = "";
        let textError = "";

        if (!this.state.email.includes('@')){
            emailError = 'Please enter a valid email address.';
        }

        if (!this.state.text){
            textError = 'Please enter your question.';
        }

        if (emailError || textError){
            this.setState({emailError, textError});
            return false;
        }
        
        return true;

    };

    thankyouMessage = () =>{
        let thanksMessage = "";
        thanksMessage = "Thank you. Your message has been sent.";
        console.log('thank you message is: ' + thanksMessage);

        if (thanksMessage){
            this.setState({thanksMessage});
            return false;
        }

        return true;
    };

    handleSubmit = event =>{

        event.preventDefault();
        const isValid = this.validate();
        

        if (isValid){

            console.log('email: ' + this.state.email);
            console.log('question: ' + this.state.text);
            
            this.setState(initialState);
            
            

            this.thankyouMessage();
        }
    };
    
    render(){

        //console.log(this.state.email);

        return (
            <div className="QuestionForm">

                <section className="question-form">   
                    <div className="container">    
                        
                        <div className="form-holder">
                            <h3 className="form-holder__title">Any other questions?</h3>
                            <p className="form-holder__text">Our team is here to help with any questions or concerns you may have about our privacy policy. Please send an email to <a href="mailto:privacy@nytimes.com">privacy@nytimes.com</a>.</p>

                            

                            {/*
                            <form className="form-holder__form" onSubmit={this.handleSubmit} action="mailto:casey.ojeda@nytimes.com" method="post">
                        
                                <div className="form-holder__form__field">
                                    <label htmlFor="email" className="email">Your Email Address</label>
                                    <input name="email" onChange={this.handleChange} value={this.state.email} />
                                </div>
                                <div className="form-holder__form__field">
                                    <label htmlFor="text" className="text">Your Question</label>
                                    <textarea rows="" cols="" name="text" value={this.state.text} onChange={this.handleChange}></textarea>
                                </div>
                                <div className="form-holder__form__field">
                                    <button type="submit" name="submit" value="submit" className="cta" >
                                        Submit
                                    </button> 
                                    <p className="messages">
                                        {//Please complete both fields.
                                        }
                                        <span> 
                                            {this.state.emailError}
                                        </span>
                                        <span> 
                                            {this.state.textError}
                                        </span>

                                        <span> 
                                            {this.state.thanksMessage}
                                        </span>
                                    </p>
                                </div>
                            </form>
                            */
                            }

                        </div>

                    </div>

                </section>
                
            </div>
        );
    }
}

export default QuestionForm;