import React from 'react';
import './RoomDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const RoomDetails = (props) => {
  
    const {id, room, img, desc} = props.book;
    console.log(props.book.id);
    return (
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 bedroom-margin">
          <div className="single-bedroom">
            <div className="single-bedroom-img">
            <img src={img} alt="" />
            </div>
        </div>
        </div>
        <div className="col-md-6 bedroom-margin">
          <div className="single-bedroom-content">
            <div className="review-star">
              <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon> 
              <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
              <span>12 Reviews</span>
            </div>
            <div className="room-heading">
              <h2>{room}</h2>
              <p>{desc}</p>
              <div className="room-price">
                <span>Starts from</span> 
                <h4>$299<span> /Night</span></h4>
              </div>
              <div className="room-stuff">
                <div><h6>Status</h6><span>Available</span></div>
                <div><h6>Payment</h6><span>30% Advanced</span></div>
                <div><h6>Guest</h6><span>3</span></div>
                <div><h6>Beds</h6><span>2</span></div>
              </div>
              <button className="book-btn"><Link to={`/book/${id}`}>Book Now</Link></button>
              {/* onClick={() => handleBook()} */}
            </div>
          </div>
        </div>
        </div>
        </div>
    );
};

export default RoomDetails;