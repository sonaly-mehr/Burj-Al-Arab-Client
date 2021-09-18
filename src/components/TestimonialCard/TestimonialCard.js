import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = (props) => {
    const {icon, star, review, img, name, proffesion} = props.testimonail;
    return (
        <div className="col-md-3">
            <div className="single-testimonail">
                <h4><FontAwesomeIcon icon={icon}></FontAwesomeIcon></h4>
                <span><FontAwesomeIcon icon={star}></FontAwesomeIcon></span> 
                <span><FontAwesomeIcon icon={star}></FontAwesomeIcon></span>  
                <span><FontAwesomeIcon icon={star}></FontAwesomeIcon></span>  
                <span><FontAwesomeIcon icon={star}></FontAwesomeIcon></span> 
                <span><FontAwesomeIcon icon={star}></FontAwesomeIcon></span> 
                <p>{review}</p>
                <div className="user-detail">
                    <img src={img} alt="" />
                    <div className="user-name-pro">
                        <h6>{name}</h6>
                        <span>{proffesion}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;