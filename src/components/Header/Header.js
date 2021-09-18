import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section className="header-section">
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="phone-location">
                                <span><FontAwesomeIcon icon={faPhoneAlt} className="fontaswm"></FontAwesomeIcon>1 877 834 245 </span> <span><FontAwesomeIcon icon={faMapMarkerAlt} className="fontaswm"></FontAwesomeIcon>Burj Al Arab, Arab </span>
                            </div>
                        </div>
                        <div className="col-md-2 offset-md-6">
                            <div className="social">
                                <ul>
                                    <li><a href="#"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faGooglePlusG}></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="menu">
                                <ul>
                                    <li><Link to="/home" className="active">Home</Link></li>
                                    <li><Link to="/rooms">Room</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/bookings">Bookings</Link></li>
                                    {!loggedInUser ?
                                        <li>
                                            <Link className="login" to="/login">Login</Link>
                                        </li>
                                        :
                                        <li ><Link to="/login" style={{ color: '#A28549', fontWeight: '700' }}>{loggedInUser.name}</Link></li>
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 offset-md-2">
                            <div className="book">
                                <button><Link to="/rooms">Book Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;