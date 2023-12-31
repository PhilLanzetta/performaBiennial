import React from 'react'
import Ticker from './ticker'
import { Link, navigate } from 'gatsby'
import MailForm from './mailForm'
import { StaticImage } from 'gatsby-plugin-image'
import useWindowSize from '../utils/useWindowSize'

const Footer = ({ location, handleCategoryFilter }) => {
  const { width } = useWindowSize()
  const mobile = width < 601
  return (
    <div className='footer-container'>
      <Ticker text='Tickets Available Now!' inverse></Ticker>
      <div className='footer-row'>
        {mobile ? (
          <StaticImage
            src='../images/Performa_Logo_Mobile.png'
            alt=''
            className='footer-bang-blue'
          ></StaticImage>
        ) : (
          <StaticImage
            src='../images/BANG_BLUE.png'
            className='footer-bang-blue'
            alt=''
          ></StaticImage>
        )}
      </div>
      <div className='footer-row'>
        <div className='footer-top-item'>
          <p>
            Join Performa’s mailing list to stay up to date on the latest news
            and upcoming events.
          </p>
          <div className='email-input-form-container'>
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
            <Link to='/about'>Performa</Link>
            <Link to='/artists'>2023 Biennial</Link>
            <Link to='/about/#team'>Performa Team</Link>
            <Link to='/faq'>FAQ</Link>
          </div>
        </div>
        <div className='footer-bottom-item'>
          <h4>Get In Touch</h4>
          <div className='footer-links-container'>
            <a
              href='https://secure.givelively.org/donate/performa-inc/performa-commissioning-fund'
              target='_blank'
              rel='noreferrer'
            >
              Support
            </a>
            <a href='mailto:info@performa-arts.org'>Contact</a>
            <a href='mailto:performa@culturalcounsel.com'>Press</a>
          </div>
        </div>
        <div className='footer-bottom-item'>
          <h4>Performa 2023</h4>
          <div className='footer-links-container'>
            <a
              href='https://performa.bigcartel.com/'
              target='_blank'
              rel='noreferrer'
            >
              Shop
            </a>
            {location?.pathname === '/' ? (
              <button
                onClick={() => {
                  handleCategoryFilter(['Performa Commission'])
                  navigate('/#calendar')
                }}
              >
                Commissions
              </button>
            ) : (
              <Link
                to='/#calendar'
                state={{ category: ['Performa Commission'] }}
              >
                Commissions
              </Link>
            )}
            <Link to='/the-hub'>The Hub</Link>
            <Link to='/pavilions'>Pavilion</Link>
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
        <a
          href='https://performa-arts.org/'
          target='_blank'
          rel='noreferrer'
          className='footer-logo-container'
        >
          <StaticImage
            src='../images/performa_banner.png'
            alt=''
            className='footer-logo'
          ></StaticImage>
        </a>
      </div>
    </div>
  )
}

export default Footer
