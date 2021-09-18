import React from 'react';
import './Gallary.css';
import footer1 from '../../images/footer1.webp'
import footer2 from '../../images//footer2.jpg'
import footer3 from '../../images/footer3.jpg'
import footer4 from '../../images/footer4.jpg'
import footer5 from '../../images/footer5.jpg'
import footer6 from '../../images/footer6.webp'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Gallary = () => {
    return (
        <section className="gallary-section">
            <div className="row">
                <div className="col-md-2 gallary-img">
                    <img src={footer1} alt="" />
                </div>
                <div className="col-md-2 gallary-img">
                <img src={footer2} alt="" />
                </div>
                <div className="col-md-2 gallary-img">
                <img src={footer3} alt="" />
                </div>
                <div className="col-md-2 gallary-img">
                <img src={footer4} alt="" />
                </div>
                <div className="col-md-2 gallary-img">
                <img src={footer5} alt="" />
                </div>
                <div className="col-md-2 gallary-img">
                <img src={footer6} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Gallary;