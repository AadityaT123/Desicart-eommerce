import React from 'react'
import'./Footer.css'
import footer_logo from '../Assets/logo_big.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import twitter_icon from   '../Assets/twitter_icon.png'
import instagram_icon from '../Assets/instagram_icon.png'
import linkdin_icon from '../Assets/linkedin_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>DESICART</p>
      </div>
      <ul className="footer-links">
         <li>Company</li>
         <li>Products</li>
         <li>Offices</li>
         <li>About</li>
         <li>Contact</li>
      </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={twitter_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
            <img src={linkdin_icon} alt="" />
        </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved </p>
        </div>

    </div>
  )
}

export default Footer
