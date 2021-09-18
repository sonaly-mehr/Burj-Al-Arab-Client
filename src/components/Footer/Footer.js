import React from 'react';
import './Footer.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/icons/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="single-footer">
                            <img src={logo} alt="" />
                            <p>Hotel Luxe is an all-in-one WordPress theme to make hotel websites of any kind. Make the hotel website you’ve always dreamt of with Hotel Luxe.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-footer">
                            <h6>Contact Us</h6>
                            <ul>
                                <li><FontAwesomeIcon className="footer-icon" icon={faMapMarkedAlt}></FontAwesomeIcon>221 B, Baker Street, London</li>
                                <li><FontAwesomeIcon className="footer-icon" icon={faPhoneAlt}></FontAwesomeIcon>+01-7458292</li>
                                <li><FontAwesomeIcon className="footer-icon" icon={faEnvelope}></FontAwesomeIcon>example@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="single-footer">
                            <h6>Quick Links</h6>
                            <ul>
                                <li>Home</li>
                                <li>Terms & Conditions</li>
                                <li>FAQ</li>
                                <li>Newsletter</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-footer">
                            <h6>DON’T MISS ANY UPDATES</h6>
                            <input type="email" name="" id="" placeholder="Your email" />
                            <input type="submit" value="Sign up now"/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="footer-p">
                <p>© Built with pride and caffeine by ThemeBubble. All rights reserved.</p>
            </div>
            
        </div>
    );
};

export default Footer;