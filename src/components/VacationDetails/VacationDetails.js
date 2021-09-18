import React from 'react';
import './VacationDetails.css';

const VacationDetails = (props) => {
    const {img, header, descp} = props.vacation
    return (
        <div className="col-md-3">
            <div className="single-vacation">
                <img src={img} alt="" />
                <h6>{header}</h6>
                <p>{descp}</p>
            </div>
        </div> 
    );
};

export default VacationDetails;