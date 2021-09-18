import React from 'react';
import './RoomDesc.css';
import roomDesc from '../../images/room-decs.jpg';

const RoomDesc = () => {


    return (
        <div className="room-desc">
            <div className="container">
                <div className="similar-headers">
                    <h6>We are champ</h6>
                    <h4>Welcome to Burj Al Arab</h4>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="room-decs-img">
                            <img src={roomDesc} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="room-desc-right">
                            <h4>The hotellon</h4>
                            <h2>The best place to live <br /> a luxurious life</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptas quis? Labore quas iste similique.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ullam vero molestiae quae dolorem culpa quod facere, laboriosam id magni.</p>
                            <div className="room-decs-director">
                                <h6>John Doe</h6> <span>Managing Director</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDesc;