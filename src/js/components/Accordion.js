import React, { useState, useRef, useEffect } from 'react'

//SVG
import { ReactComponent as Collapse } from './svg_components/collapse.svg';
import { ReactComponent as Expand } from './svg_components/expand.svg';

const Accordion = props => {
  const [active, setActive] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    //${contentRef.current.scrollHeight}px
    contentRef.current.style.maxHeight = active ? `10000px` : '0px'
  }, [contentRef, active])
  
  const toogleActive = () => {
    setActive(!active)
  }

  return (

    <div className={`accordion-section faq-question ${active? "active": "notActive"}`} id={`${props.name}${props.number}`} aria-label='accordion_item'>
      <button className="accordion-title question" onClick={toogleActive} aria-expanded={active? "true": "false"} role="button" aria-controls={`region-${props.name}${props.number}`}>  
        <div className="question__number">{props.number}.</div>
        <p>{props.title}</p>
        <div className="question__icon">
            {active ?<Collapse/>: <Expand/>}
        </div>
      </button>
      <div ref={contentRef} className={`accordion-content answer ${active? "open": "close"}`} role="region" aria-labelledby={`accordion${props.name}${props.number}`} id={`region-${props.name}${props.number}`}  hidden={active? "": "hidden"}>
        {props.children}
      </div>
    </div>
  )
}

export default Accordion
