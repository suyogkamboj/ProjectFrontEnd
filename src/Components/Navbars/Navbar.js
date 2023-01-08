import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import Cdac_logo from '../../Cdac_logo.jpg'

import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';


const Navbar = () => {
  return (
        <nav className='main-nav'>
            {/* 1st menu part */}
            <div className='logo' >
                <img className='logo_img' src={Cdac_logo} alt='CDAC-Logo' />
            </div>

            {/* 2nd menu part */}
            <div className='menu-link'>
                <ul>
                    <li>
                        <a href='/home'>Home</a>
                    </li>
                    <li>
                        {/* <a href='/About'>About</a> */}
                        <Link to='/About' >About</Link>
                    </li>
                    <li>
                        {/* <a href='/Login'>Login</a> */}
                        <Link to='/login' >Login</Link>
                    </li>
                    <li>
                        {/* <a href='/Contact'>Contact</a> */}
                        <Link to='/ContactUs' >ContactUs</Link>
                    </li>
                </ul>
            </div>

            {/* 3rd scocial media link */}
            <div className='social-media'>
                <ul className='social-media-desktop'>
                    <li>
                        <a href='https://www.facebook.com/' 
                        target='_blank'> <FaFacebookSquare className='facebook'/> </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/accounts/login/' 
                        target='_blank'> <FaInstagramSquare className='instagram'/> </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/' 
                        target='_blank'> <FaYoutubeSquare className='youtube'/> </a>
                    </li>
                </ul>

            </div>
        </nav>
  )
}

export default Navbar

