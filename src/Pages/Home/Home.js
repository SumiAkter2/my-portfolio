import React from 'react';
import Banner from './Banner';
import About from '../About/About'
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            {/* <AnimationBg></AnimationBg> */}
            <Banner />

            <About />
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;