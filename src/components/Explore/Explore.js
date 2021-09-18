import React from 'react';
import './Explore.css';
import explore1 from '../../images/explore1.jpg';
import explore2 from '../../images/explore2.jpg';
import explore3 from '../../images/explore3.jpg';

const Explore = () => {
    return (
        <div className="explore-section">
            <div className="container">
                <div className="similar-headers">
                    <h6>Explore</h6>
                    <h4>The Hotel</h4>
                    <p className="explore-p">Donec porta diam eu massa. Quisque diam lorem, interdum vitae,dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="single-explore">
                            <img src={explore1} alt="" />
                            <div className="explore-content">
                            <h4>Wellness & Spa</h4>
                            <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.</p>
                            <a href="#">Explore more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="single-explore">
                        <img src={explore2} alt="" />
                        <div className="explore-content">
                        <h4>Restaurants & Bars</h4>
                        <p>Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                        <a href="#">Explore more</a>
                        </div>
                        </div>
                        </div>
                    
                    <div className="col-md-4">
                    <div className="single-explore">
                        <img src={explore3} alt="" />
                        <div className="explore-content">
                        <h4>Special Offers</h4>
                        <p>Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
                        <a href="#">Explore more</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
    );
};

export default Explore;