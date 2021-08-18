import React from "react";
import './Contact.css'
import emailIcon from '../Assets/Icons/email.png'
import linkedInIcon from '../Assets/Icons/linkedin.png'
import githubIcon from '../Assets/Icons/github.png'

function Contact () {
  return (
    <div
      className='contact-container'
    >
      <h2 id='contact'>contact</h2>
      <hr />
      <ul>
        <li>
          <img
            src={emailIcon}
            alt='e-mail icon'
          />
          &nbsp;
          <a
            href='mailto:trey@tbrittain.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            email
          </a>
        </li>
        <li>
          <img
            src={githubIcon}
            alt='GitHub icon'
          />
          &nbsp;
          <a
            href='https://github.com/tbrittain'
            target='_blank'
            rel='noopener noreferrer'
          >
            tbrittain
          </a>
        </li>
        <li>
          <img
            src={linkedInIcon}
            alt='LinkedIn icon'
          />
          &nbsp;
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
