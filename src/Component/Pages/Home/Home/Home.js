import React from 'react';
import HomeServices from '../HomeServices/HomeServices';
import Moments from '../Moments/Moments';
import OurTeam from '../OurTeamSection/OurTeam';
import Parallax from '../ParallaxSection/Parallax';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Moments></Moments>
            <HomeServices></HomeServices>
            <Parallax></Parallax>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;