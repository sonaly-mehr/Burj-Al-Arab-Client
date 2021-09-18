import React from 'react';
import './Banner.css';
import banner from '../../images/header.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner-section">
            <img src={banner} alt="" />
            <div className="banner-content">
                <span>The finest hotel near Burj Al</span>
                <h2>Burj Al Arab</h2>
                <h4>A global icon of arabian lulury</h4>
                <button><Link to="/rooms">Explore Rooms</Link></button>
            </div>
        </div>
    );
};

export default Banner;