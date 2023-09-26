import React from 'react'
import Ticker from './ticker'
import BangBlue from '../images/BANG_BLUE.png'
import PerformaLogo from '../images/performa_banner.png'
import { Link } from 'gatsby'
import MailForm from './mailForm'

const Footer = () => {
  return (
    <div className='footer-container'>
      <Ticker text='Tickets Available Now!' big></Ticker>
      <div className='footer-row'>
        <div className='footer-bang-container'>
          <img src={BangBlue} className='footer-bang-blue' alt=''></img>
        </div>
        <div className='footer-top-item'>
          <p>
            Join Performa’s mailing list to stay up to date on the latest news
            and upcoming events.
          </p>
          <div className='email-input-container'>
            <MailForm></MailForm>
          </div>
        </div>
        <div className='footer-top-item'>
          <p>
            Performa is powered by supporters like you who make groundbreaking
            and innovative art possible.
          </p>
          <a
            href='https://performa-arts.org/donations'
            target='_blank'
            rel='noreferrer'
            className='secondary-button'
          >
            Donate
          </a>
        </div>
      </div>
      <div className='footer-bottom-row'>
        <div className='footer-bottom-item'>
          <h4>Follow</h4>
          <div className='footer-links-container'>
            <a
              href='https://www.instagram.com/performanyc/'
              target='_blank'
              rel='noreferrer'
            >
              Instagram
            </a>
            <a
              href='https://twitter.com/performanyc'
              target='_blank'
              rel='noreferrer'
            >
              Twitter
            </a>
            <a
              href='https://www.facebook.com/PerformaBiennial'
              target='_blank'
              rel='noreferrer'
            >
              Facebook
            </a>
          </div>
        </div>
        <div className='footer-bottom-item'>
          <h4>About</h4>
          <div className='footer-links-container'>
            <Link to='/'>Performa</Link>
            <Link to='/'>2023 Biennial</Link>
            <Link to='/'>Performa Team</Link>
            <Link to='/'>FAQ</Link>
          </div>
        </div>
        <div className='footer-bottom-item'>
          <h4>Get In Touch</h4>
          <div className='footer-links-container'>
            <Link to='/'>Support</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Press</Link>
          </div>
        </div>
        <div className='footer-bottom-item'>
          <h4>Performa 2023</h4>
          <div className='footer-links-container'>
            <Link to='/'>Shop</Link>
            <Link to='/'>Commissions</Link>
            <Link to='/'>The Hub</Link>
            <Link to='/'>Pavilion</Link>
          </div>
        </div>
      </div>
      <div className='footer-credits'>
        <a
          href='https://www.pacificpacific.pub'
          target='_blank'
          rel='noreferrer'
          className='pacific-credit'
        >
          Website designed and developed by Pacific
        </a>
        <Link to='/'>
          <img src={PerformaLogo} alt='' className='footer-logo'></img>
        </Link>
      </div>
    </div>
  )
}

export default Footer
