import './Footer.css'
import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Mail'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://www.linkedin.com/in/yahyaiahmed/' target='_blank' rel='noopener noreferrer'>
          <LinkedInIcon />
        </a>
        <a href='https://github.com/yiahmed' target='_blank' rel='noopener noreferrer'>
          <GitHubIcon />
        </a>
        <a href='mailto:yahyahmed28@gmail.com' target='_blank' rel='noopener noreferrer'>
          <EmailIcon />
        </a>
      </div>
      <p>&copy; Yahya Ahmed</p>
    </div>
  )
}

export default Footer

