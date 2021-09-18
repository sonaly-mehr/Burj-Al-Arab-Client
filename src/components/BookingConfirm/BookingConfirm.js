import React, { useContext, useEffect, useState } from 'react';
import './BookingConfirm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import { List } from '@material-ui/core';

const BookingConfirm = () => {

    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://peaceful-waters-44919.herokuapp.com/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data));
    })
    return (
        <div className="boking-confirmation">
            <div className="container">
                <div className="confirmation">
                    <div className="check-icon">
                        <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    </div>
                    <h4>Your Booking has been Confirmed!</h4>
                    <p>Thank you for being with us</p>
                </div>
                <div className="order-details">
                    <div className="row">
                        {
                            // bookings.map(list => <div>
                            //     <li>{list.name} from {(new Date(list.checkIn).toDateString('dd/MM/yyyy'))} To {(new Date(list.checkOut).toDateString('dd/MM/yyyy'))}</li>
                            // </div>)
                            bookings.map(booking => <div className="col-md-12">
                                <div className="bookings-wrap">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4 className="order-heading">Order Details</h4>
                                            <div className="order-detail-left">
                                                <img src={booking.img} alt="" />

                                                <div className="order-left-data">
                                                    <h4>{booking.room}</h4>
                                                    <span>Check In: {(new Date(booking.checkIn).toDateString('dd/MM/yyyy'))}</span> <br />
                                                    <span>Check Out: {(new Date(booking.checkOut).toDateString('dd/MM/yyyy'))}</span> <br />
                                                    <span className="total">Sub Total: {booking.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="order-detail-right">
                                                <h4>Your Information</h4>
                                                <p>Name: <span>{booking.name}</span></p>
                                                <p>Email Address: <span>{booking.email}</span></p>
                                                <p>Country: <span>Bangladesh</span></p>
                                                <p>Zip Code: <span>1348</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirm;