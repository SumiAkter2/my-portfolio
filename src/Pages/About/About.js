import React from 'react';
import Skill from '../Project/Skill';
import './About.css'
const About = () => {
    return (
        <div className='my-24'>

            <h1 className='text-6xl font-bold text-center mb-16 animate-charcter lg:mx-96 '>Let's Know More </h1>
            <div className='grid lg:grid-cols-2'>
                <div className='lg:px-12'>

                    <h1 className='text-4xl font-bold text-secondary text-center my-6 px-12 ' data-aos="fade-right"> Let me introduce myself.</h1>
                    <p className='px-6'>This is Sumi Akter , a passionate Jr. Web Developer from Dhaka Bangladesh.I am 22 years old. I passed H.S.C in
                        2020 from a famous college of my home district Bogra. During the last 8 month, I have tried my
                        heart and soul to gain skill on web development. Still now, I am trying to achieve more skills &
                        qualities in this field. I have taken my profession as a web developer seriously . And, I want to
                        be a skilled web developer to build up my career in this sector.</p>
                    <div className='my-12 px-12'>
                        <p className='text-white'>
                            <span className='font-bold text-secondary pr-4'>  Full Name</span> : Sumi Akter</p>
                        <p className='text-white'>
                            <span className='font-bold pr-16 text-secondary'>  Age</span>: 22 years
                        </p >
                        <p className='text-white'>
                            <span className='font-bold pr-4 text-secondary'>Language</span> : English, Bangla
                        </p>
                        <p className='text-white '>
                            <span className='font-bold pr-4 text-secondary'>Phone No</span> : 01718723057
                        </p>
                        <p className='text-white'>
                            <span className='font-bold pr-12 text-secondary'> Email</span> : sumiakter6335@gmail.com
                        </p>
                        <p className='text-white '>
                            <span className='font-bold pr-8 text-secondary'>Address</span>: Dhaka,Bangladesh
                        </p>
                    </div>
                </div>

                <div className='px-12'>
                    <h1 className='text-4xl font-bold text-secondary text-center mt-6 mb-20 ' data-aos="fade-left">My Skills</h1>
                    <Skill></Skill>
                </div>
            </div>
        </div>
    );
};

export default About;