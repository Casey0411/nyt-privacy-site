import React, { Component } from 'react';

const initialState = {
    list: "",
    email: "",
    text: "",
    listError: "",
    emailError: "",
    textError: "" ,
}

export class QuestionForm extends Component{

    state = initialState;

    handleChange = event => {

       // console.log({[fieldName]: event.target.value});
       console.log(event.target.name);

        this.setState({[event.target.name]: event.target.value});

        // const isCheckbox = event.target.type === "checkbox";
        // this.setState({
        //     [event.target.name]: isCheckbox
        //     ? event.target.checked
        //     : event.taget.value

        // });

    };


    validate = () =>{
        let listError = "";
        let emailError = "";
        let textError = "";

        if (!this.state.email.includes('@')){
            emailError = '-Invalid email';
        }

        if (!this.state.list){
            listError = '-Please choose a list';
        }

        if (!this.state.text){
            textError = '-Please enter a question';
        }

        if (emailError || listError || textError){
            this.setState({emailError, listError, textError});
            return false;
        }
        
        return true;

    };

    handleSubmit = event =>{
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
            console.log(this.state);



            this.setState(initialState);
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
                            <p className="form-holder__text">Our team is here to help with any questions or concerns you may have about our privacy policy.</p>

                            <form className="form-holder__form" onSubmit={this.handleSubmit}>
                                {/*
                                <div className="form-holder__form__field">
                                    <label htmlFor="list" className="email">Select</label>
                                    <select name="list" value={this.state.list} onChange={this.handleChange}>
                                        <option value=""> --Please choose an option-- </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>

                                </div>
                                */}
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
                                            {this.state.listError} 
                                        </span>
                                        <span> 
                                            {this.state.emailError}
                                        </span>
                                        <span> 
                                            {this.state.textError}
                                        </span>
                                    </p>
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