import React, { Component } from 'react';

function FaqItem ({faq, index}){

  console.log(faq.answer);

    return (
      <div className="FaqItem" style={{background: "red"}}>
        <div className="faq-question active" key={index}>
            <h5 className="question">
                {faq.question}
                <div className="question__icon"></div>
            </h5>
            <div className="answer " style={{height: "auto", maxHeight:"1000px"}}>
                {faq.answer}
                
               
            </div>
        </div>    
        
      </div>
    );
  }


export default FaqItem;