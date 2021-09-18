import React from 'react';
import './NewsEvents.css';
import hotel from '../../images/hotel.jpg';
import hotel1 from '../../images/hotel1.webp';
import hotel2 from '../../images/hotel2.png';
import hotel3 from '../../images/hotel3.jpg';
import hotel4 from '../../images/hotel4.jpg';

const NewsEvents = () => {
    return (
        <div className="news-section">
            <div className="container">
                <div className="similar-headers">
                    <h6>Know more about us</h6>
                    <h4>Latest news & Events</h4>
                    <p className="news-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque rerum at, reprehenderit maiores ducimus soluta!</p>
                </div>

                <div className="news-events-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="news-left-wrap">
                                <img src={hotel} alt="" />
                                <div className="news-left">
                                    <h6>News | <span>jan 03, 2021</span></h6>
                                    <h4>Anuis consr nisl efficitur</h4>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single-news-wrap">
                                        <img src={hotel1} alt="" />
                                        <div className="sinlge-news">
                                            <h6>Events | <span>Feb 03, 2021</span></h6>
                                            <h4>Nunc na eu sodales bolares</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-news-wrap">
                                        <img src={hotel2} alt="" />
                                        <div className="sinlge-news">
                                            <h6>Blog | <span>Sep 03, 2019</span></h6>
                                            <h4>Proin turpis urna bolte paro</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-news-wrap">
                                        <img src={hotel3} alt="" />
                                        <div className="sinlge-news">
                                            <h6>Events | <span>Dec 05, 2020</span></h6>
                                            <h4>Caraur dui urstas er fermen</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-news-wrap">
                                        <img src={hotel4} alt="" />
                                        <div className="sinlge-news">
                                            <h6>News | <span>April 03, 2021</span></h6>
                                            <h4>vivamus ultrices ven</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="load-more">
                        <button>View All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsEvents;