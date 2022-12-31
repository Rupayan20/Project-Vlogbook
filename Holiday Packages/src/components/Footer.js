import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRight } from '@fortawesome/sharp-solid-svg-icons'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Img1 from '../assets/britain.jpg'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='about-us' data-aos="fade-right" data-aos-delay="200">
                <h2>About us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis
                    iure, autem nulla tenetur repellendus
                </p>

                
            </div>
            <div className='newsletter' data-aos="fade-right" data-aos-delay="200">
                <h2>Newsletter</h2>
                <p>Stay update with our latest</p>
                <div className='form-element'>
                    <input type="text" placeholder='Email'></input><span><FontAwesomeIcon icon={faRight} /></span>
                </div>

            </div>

            <div className='instagram' data-aos="fade-left" data-aos-delay="200">
                <h2>Instagram</h2>
                <div className='flex-row'>
                    <img src={Img1} alt=""></img>
                    <img src={Img1} alt=""></img>
                    <img src={Img1} alt=""></img>
                    
                </div>
            </div>
            <div className='follow' data-aos='fade-left' data-aos-delay="200">
                <h2>Follow us</h2>
                <p>Let us be Social</p>
                <div className='social'>
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
                <FaYoutube />
                </div>
            </div>
            
        </div>
        <div className='rights flex-row'>
            <h4 className='text-gray'>
                Copyright ©2022 All rights reserved
            </h4>
        </div>

    </div>
  )
}

export default Footer
