import React from 'react';
import './VacationCard.css';
import vacation1 from '../../images/vacation1.png';
import vacation2 from '../../images/vacation2.png';
import vacation3 from '../../images/vacation3.png';
import vacation4 from '../../images/vacation4.png';
import VacationDetails from '../VacationDetails/VacationDetails';

const VacationCard = () => {
    const vacationData= [
        {
            img: vacation1,
            header: 'Airport Pickup',
            descp: 'We’ll pick up from airport while you comfy on your ride.'
        },
        {
            img: vacation2,
            header: 'Complementary Breakfast',
            descp: 'Don’t spend a dime on breakfast. It’s on us, totally.'
        },
        {
            img: vacation3,
            header: 'City Tour Guide',
            descp: 'Explore city with our in-house tour guide. We got your back.'
        },
        {
            img: vacation4,
            header: 'Beach BBQ Party',
            descp: 'Kick back on the beach & cook up recipes from our masterchef.'
        }

    ]
    return (
        <div className="vacation-section">
            <div className="container">
                <div className="similar-headers">
                <h6>Vacation at Ease</h6>
                <h4>Inspired Incentives</h4>
                </div>
                <div className="row">
                    {
                        vacationData.map(vacation=> <VacationDetails vacation={vacation}></VacationDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default VacationCard;