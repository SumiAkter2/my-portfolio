import React from 'react';
import Skill from '../Project/Skill';
import './About.css'
const About = () => {
    return (
        <div className='my-24'>
            {/* grid h-full px-12 mx-12 card bg-base-300 rounded-box place-items-center */}
            <h1 className='text-5xl font-bold text-center my-12 ' data-aos="fade-up">About <span className='text-primary'>Me</span></h1>
            <div className='grid lg:grid-cols-2'>
                <div className='lg:px-12'>

                    <h1 className='text-3xl font-bold text-primary text-center my-6 px-12 ' data-aos="fade-right"> Let me introduce myself.</h1>
                    <p>This is Sumi Akter , a passionate Jr. Web Developer . Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum minus, dolor non eum veniam et rem temporibus enim molestiae sed quam sapiente nisi neque excepturi incidunt rerum est ab praesentium?</p>
                    <div className='my-12 px-12'>
                        <p className='text-white'>
                            <span className='font-bold text-primary pr-4'>  Full Name</span> : Sumi Akter</p>
                        <p className='text-white'>
                            <span className='font-bold pr-16 text-primary'>  Age</span>: 22 years
                        </p >
                        <p className='text-white'>
                            <span className='font-bold pr-4 text-primary'>Language</span> : English, Bangla
                        </p>
                        <p className='text-white '>
                            <span className='font-bold pr-4 text-primary'>Phone No</span> : 01718723057
                        </p>
                        <p className='text-white'>
                            <span className='font-bold pr-12 text-primary'> Email</span> : sumiakter6335@gmail.com
                        </p>
                        <p className='text-white '>
                            <span className='font-bold pr-8 text-primary'>Address</span>: Dhaka,Bangladesh
                        </p>
                    </div>
                </div>

                <div className='px-12'>
                    <h1 className='text-3xl font-bold text-primary text-center my-6 ' data-aos="fade-left">My Skills</h1>
                    <Skill></Skill>
                </div>
            </div>
        </div>
    );
};

export default About;