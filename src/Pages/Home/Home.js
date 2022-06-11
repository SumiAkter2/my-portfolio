import React from 'react';
import Banner from './Banner';
import About from '../About/About'
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            {/* <AnimationBg></AnimationBg> */}
            <Banner />

            <About />
            <Project></Project>

        </div>
    );
};

export default Home;