import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Pictures/me.jpg'

/*top of the page the */
const Header = () => {
  return (
    /*everything is wraped in the container, #contact if */ 
    <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Jeff Cao</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />

      <div className="me">
        <img src={ME} alt="me" />
      </div>

  
      <a href="#contact" className=''></a>
      </div>
    </header>
  )
}

export default Header