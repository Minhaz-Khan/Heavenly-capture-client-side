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
            <div>
                <h3 className='text-3xl text-lightSecondary font-bold uppercase text-center mt-10'>Our Service Categorys</h3>
                <HomeServices></HomeServices>
            </div>
            <Parallax></Parallax>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;