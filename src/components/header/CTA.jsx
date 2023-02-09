import React from 'react'
import CV from '../../Pictures/CV.pdf'
/*call to action*/


const CTA = () => {
  return ( /*class for two buttons, btn is for pre set boxes (in index.css)*/
    <div className='cta'> 
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA