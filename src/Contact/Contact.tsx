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
          <a
            href='mailto:trey@tbrittain.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            &nbsp;email
          </a>
        </li>
        <li>
          <img
            src={githubIcon}
            alt='GitHub icon'
          />
          <a
            href='https://github.com/tbrittain'
            target='_blank'
            rel='noopener noreferrer'
          >
            &nbsp;tbrittain
          </a>
        </li>
        <li>
          <img
            src={linkedInIcon}
            alt='LinkedIn icon'
          />
          <a
            href='https://www.linkedin.com/in/tbritt/'
            target='_blank'
            rel='noopener noreferrer'
          >
            &nbsp;tbritt
          </a>
        </li>
        {/* <li>
          resume:&nbsp;
          <a
            href={require('../Assets/Documents/resume.pdf')}
            target='_blank'
            rel='noopener noreferrer'
          >
            download
          </a>
        </li> */}
      </ul>
    </div>
  )
}

export default Contact
