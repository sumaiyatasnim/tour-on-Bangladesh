import React from 'react';
import Header from '../../Shared/Header';
import BannerVideo from './BannerVideo/BannerVideo';
import HomeServices from './HomeService/HomeServices';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BannerVideo></BannerVideo>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;