import React from "react";
import './Contact.css'

function Contact () {
  return (
    <div
      className='contact-container'
    >
      <h2 id='contact'>contact</h2>
      <hr />
      <ul>
        <li>
          email: my first name [at] this domain
        </li>
        <li>
          github:&nbsp;
          <a
            href='https://github.com/tbrittain'
            target='_blank'
            rel='noopener noreferrer'
          >
            tbrittain
          </a>
        </li>
        <li>
          linkedin:&nbsp;
          <a
            href='https://www.linkedin.com/in/tbritt/'
            target='_blank'
            rel='noopener noreferrer'
          >
            tbritt
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact
