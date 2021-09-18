import React, { useContext, useEffect } from 'react';
import { Link, useParams,useHistory } from 'react-router-dom';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import './Book.css';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { useState } from 'react';
// import { useContext } from 'react';
// import { UserContext } from '../../App';
// import { alpha } from '@material-ui/core';
import Banner from '../Banner/Banner';
// import room from '../../images/bedroom1.jpg';
import { faVectorSquare, faStar, faBed, faToilet, faWifi, faDoorOpen, faPrayingHands, faAudioDescription, faUtensils, faProcedures, faUsers, faBuilding, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bookingsData from '../../components/FakeData/FakeData.json';
import popular1 from '../../images/popular1.jpg';
import popular2 from '../../images/popular2.jpg';
import popular3 from '../../images/popular3.jpg';
import { UserContext } from '../../App';

const Book = () => {

    const { bedType } = useParams();
    const book = bookingsData.find(bk => bk.id === bedType);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();

    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date(),
        checkOut: new Date()
    });
    const [services, setServices] = useState({
        room: book.room,
        price: book.price,
        img: book.img
    })

    const handleCheckInDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkIn = date;
        setSelectedDate(newDates);
    };

    const handleCheckOutDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.checkOut = date;
        setSelectedDate(newDates);
    };

    const handleBooking = () => {
        const newBooking = { ...loggedInUser, ...selectedDate, ...services };
        alert('Booking Has been created successfully')
        history.push('/bookingConfirm')
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(success => {
                if(success){
                
                }
            })
    }


    return (
        <div className="booking-section">
            <Banner></Banner>
            <div className="container">
                <div className="booking-section-heading">
                    <h1>Let's book a <span>{book.room}</span> Room.</h1>
                    <p>Want a <Link to="/rooms">different room?</Link> </p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="room-details">
                            <div className="detail-heading">
                                <h2>{book.room}</h2>
                                <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
                                <span>12 Reviews</span>
                            </div>
                            <img src={book.img} alt="" />
                            <div className="room-banner">
                                <div className="col-md-3">
                                    <div className="single-room-banner">
                                        <FontAwesomeIcon className="banner-icon" icon={faVectorSquare}></FontAwesomeIcon>
                                        <h6>30 Sf</h6>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="single-room-banner">
                                        <FontAwesomeIcon className="banner-icon" icon={faUsers}></FontAwesomeIcon>
                                        <h6>3 Guests</h6>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="single-room-banner">
                                        <FontAwesomeIcon className="banner-icon" icon={faBed}></FontAwesomeIcon>
                                        <h6>3 Guests</h6>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="single-room-banner" style={{borderRight: 'none'}}>
                                        <FontAwesomeIcon className="banner-icon" icon={faBuilding}></FontAwesomeIcon>
                                        <h6>City View</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="book-desc">
                                <h6>Description</h6>
                                <p>{book.desc}</p>
                            </div>

                            <div className="facilities">
                                <h6>Facilities</h6>
                                <div className="facility-wrap">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="single-facility">
                                                <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
                                                <span>Delux luxury bed</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single-facility">
                                                <FontAwesomeIcon className="faci-icon" icon={faToilet}></FontAwesomeIcon>
                                                <span>Luxury wash room</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single-facility">
                                                <FontAwesomeIcon className="faci-icon" icon={faWifi}></FontAwesomeIcon>
                                                <span>Free Wifi</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single-facility">
                                                <FontAwesomeIcon className="faci-icon" icon={faDoorOpen}></FontAwesomeIcon>
                                                <span>Two side belcony</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single-facility">
                                                <FontAwesomeIcon className="faci-icon" icon={faPrayingHands}></FontAwesomeIcon>
                                                <span>Prayer room</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single-facility">
                                                <FontAwesomeIcon className="faci-icon" icon={faAudioDescription}></FontAwesomeIcon>
                                                <span>kidz corner</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single-facility">
                                                <FontAwesomeIcon className="faci-icon" icon={faUtensils}></FontAwesomeIcon>
                                                <span>restrurent service</span>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="single-facility">
                                                <FontAwesomeIcon className="faci-icon" icon={faProcedures}></FontAwesomeIcon>
                                                <span>Rest room</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="booking-details-right">
                            <div className="booking-form">
                                <div className="sub-total">
                                    <span>Sub Total</span>
                                    <h5>${book.price}</h5>
                                </div>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justifyContent="space-around">
                                        <div className="date-row">
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="dd/MM/yyyy"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="Check In Date"
                                                value={selectedDate.checkIn}
                                                onChange={handleCheckInDate}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </div> <br />
                                        <div className="">
                                            <KeyboardDatePicker
                                                margin="normal"
                                                id="date-picker-dialog"
                                                label="Check Out Date"
                                                format="dd/MM/yyyy"
                                                value={selectedDate.checkOut}
                                                onChange={handleCheckOutDate}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </div>
                                    </Grid>
                                    <div className="extra-service">
                                        <h6>Add extra service</h6>
                                        <FontAwesomeIcon className="plus" icon={faPlusCircle}></FontAwesomeIcon>
                                    </div>
                                    <button className="booking-btn" onClick={()=> handleBooking()}>Book now</button>
                                    {/* onClick={handleBooking} */}
                                </MuiPickersUtilsProvider>
                            </div>
                            <div className="booking-help">
                                <p>Booking Help</p>
                                <h4>+0123728491371</h4>
                            </div>

                            <div className="popular-rooms">
                                <h6>Popular Rooms</h6>
                                <div className="single-popular-room">
                                    <img src={popular1} alt="" />
                                    <div className="popular-heading">
                                        <h6>Super luxury delux room</h6>
                                        <p>starts from <span>$299</span></p>
                                        <button>Book now</button>
                                    </div>
                                </div>
                                <div className="single-popular-room">
                                    <img src={popular2} alt="" />
                                    <div className="popular-heading">
                                        <h6>Super luxury delux room</h6>
                                        <p>starts from <span>$299</span></p>
                                        <button>Book now</button>
                                    </div>
                                </div>
                                <div className="single-popular-room">
                                    <img src={popular3} alt="" />
                                    <div className="popular-heading">
                                        <h6>Super luxury delux room</h6>
                                        <p>starts from <span>$299</span></p>
                                        <button>Book now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;