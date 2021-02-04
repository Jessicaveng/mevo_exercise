import React from 'react'
import logodark  from '../logodark.svg'
import '../Scss/index.scss'

function Nav() {
  return (
    <div className="Nav">
        <img src={logodark} className="logodark" alt="logo" />
        <div className="nav-link">  
          <a href ="">How It Works </a>
          <a href ="">Pricing </a>
          <a href ="">Home Zone</a>
          <a href ="">Business</a>
          <a href ="">FAQS</a>
          <button type="button" className="sign-in-button"> Sign In </button>
          <button type="button" className = "button-with-outline"> Join For Free</button>
          </div>
       


    </div>
  )
}

export default Nav
