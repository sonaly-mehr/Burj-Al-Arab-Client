import React from 'react';
import Gallary from '../Gallary/Gallary'
import Room from '../Room/Room';
import Footer from '../Footer/Footer';
import View from '../View/View';
import VacationCard from '../VacationCard/VacationCard';
import Explore from '../Explore/Explore';
import Testimonial from '../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import NewsEvents from '../NewsEvents/NewsEvents';
import RoomDesc from '../RoomDesc/RoomDesc';
const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <RoomDesc></RoomDesc>
        <Room></Room>
        <Explore></Explore>
        <View></View>
        <VacationCard></VacationCard>
        <Testimonial></Testimonial>
        <NewsEvents></NewsEvents>
        <Gallary></Gallary>
        <Footer></Footer>
        </div>
    );
};

export default Home;