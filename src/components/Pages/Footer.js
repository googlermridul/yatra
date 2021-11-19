import React from 'react';
import { Link } from 'react-router-dom';
import plane from '../../images/paper-plane.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="row">
               <div className="col-sm-6 col-lg-3 pe-sm-5">
                  <h2 className="logo"><img src={plane} alt="" /> Yatra</h2>
                  <p>Doctery is a health care center which provide patient treatment with specialized medical and nursing staff and medical equipment.</p>
               </div>
               <div className="col-sm-6 col-lg-3">
                  <h4>Useful Links</h4>
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <Link className="link" to="/home">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/services">Services</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/about">About Us</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/appointment">Appointment</Link>
                     </li>
                  </ul>
               </div>
               <div className="col-sm-6 col-lg-3">
                  <h4>Socials</h4>
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <Link className="link" to="/">Facebook</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/">Instagram</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/">Twitter</Link>
                     </li>
                  </ul>
               </div>
               <div className="col-sm-6 col-lg-3">
                  <h4>Contact Us</h4>
                  <div className="d-flex">
                     <FontAwesomeIcon className="fa-icon" icon={faMapMarkerAlt} />
                     <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                  </div>
                  <div className="d-flex align-items-top">
                     <FontAwesomeIcon className="fa-icon" icon={faPhoneAlt} />
                     <p>1900 654 321.</p>
                  </div>
                  <div className="d-flex align-items-top">
                     <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
                     <p>support@yatra.com</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;