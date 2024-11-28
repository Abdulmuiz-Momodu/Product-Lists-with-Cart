import React from 'react'
import Header from '../header/Header'
import Section from '../section/Section'
import './Hero.css'

export default function Hero({handleClick, toggle}) {
  return (
    <div className="hero">

        <Header/>
        <Section handleClick={handleClick} toggle={toggle}/>
    </div>
)
  
}
