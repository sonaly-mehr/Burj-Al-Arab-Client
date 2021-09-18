import React from 'react';
import './Testimonial.css'
import {faQuoteLeft, faStar} from '@fortawesome/free-solid-svg-icons';
import user1 from '../../images/Ellipse 1.png';
import user2 from '../../images/Ellipse 2.png';
import user3 from '../../images/Ellipse 3.png';
import user4 from '../../images/news.jpg'
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    const testimonialData =[
        {
            icon: faQuoteLeft,
            star : faStar,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, quia officiis. Odio adipisci delectus voluptatem!',
            img: user1,
            name: 'Richard Moore',
            proffesion: 'Journalist'
        },
        {
            icon: faQuoteLeft,
            star : faStar,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, quia officiis. Odio adipisci delectus voluptatem!',
            img: user2,
            name: 'Maria Jenner',
            proffesion: 'Traveller'
        },
        {
            icon: faQuoteLeft,
            star : faStar,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, quia officiis. Odio adipisci delectus voluptatem!',
            img: user3,
            name: 'Kelly Kelly',
            proffesion: 'Developer'
        },
        {
            icon: faQuoteLeft,
            star : faStar,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, quia officiis. Odio adipisci delectus voluptatem!',
            img: user4,
            name: 'Tomas Andress',
            proffesion: 'CEO'
        }

    ]
    return (
        <div className="testimonial-section">
            <div className="container">
                <div className="similar-headers">
                    <h6>testimonial & review</h6>
                    <h4>What People Say</h4>
                </div>
                <div className="row">
                    {
                        testimonialData.map(testimonail => <TestimonialCard testimonail={testimonail}></TestimonialCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;