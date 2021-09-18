import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './BookingList.css';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://peaceful-waters-44919.herokuapp.com/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data));
    })
    return (
        <div className="booking-list-section">
            <div className="container">
                    <div className="order-details">
                        {
                            bookings.length>0 ?
                            <h2>Your Booking Histoy!</h2>
                            :
                            <h2>You Dont have any Bookings yet!</h2>
                        }
                        <div className="row booking-row">
                        {
                            bookings.map(list => <div className="col-md-12">
                                <div className="bookings-wrap">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="order-detail-left order-img">
                                                <img src={list.img} alt="" />

                                                <div className="order-left-data">
                                                    <h4>{list.room}</h4>
                                                    <span>Check In: {(new Date(list.checkIn).toDateString('dd/MM/yyyy'))}</span> <br />
                                                    <span>Check Out: {(new Date(list.checkOut).toDateString('dd/MM/yyyy'))}</span> <br />
                                                    <span className="total">Sub Total: {list.price}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="order-detail-right order-margin">
                                                <h4>Your Information</h4>
                                                <p>Name: <span>{list.name}</span></p>
                                                <p>Email Address: <span>{list.email}</span></p>
                                                <p>Country: <span>Bangladesh</span></p>
                                                <p>Zip Code: <span>1348</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;