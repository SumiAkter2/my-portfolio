import React from 'react';
import './About.css'
const About = () => {
    return (
        <div>
            {/* grid h-full px-12 mx-12 card bg-base-300 rounded-box place-items-center */}
            <h1 className='text-5xl font-bold text-center my-12'>About <span className='text-primary'>Me</span></h1>
            <div className='grid lg:grid-cols-2'>
                <div className='lg:px-12'>

                    <h1 className='text-3xl font-bold text-primary text-center my-6'> Let me introduce myself.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repudiandae voluptates qui cupiditate cumque omnis voluptas, iure asperiores praesentium commodi voluptatum ipsam ea facere sequi dolor numquam velit incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam repellat unde accusamus neque eum, quia sed aspernatur assumenda dolores esse doloremque, quas corrupti minima rerum? Eum quaerat distinctio doloribus?</p>
                    <div className='my-12 '>
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

                <div className=''>

                    <h1 className='text-2xl font-bold text-primary text-center my-6'> My Skills :</h1>
                    <div className='grid grid-cols-2 lg:grid-cols-4  gap-4   skill-img'>

                        <img src="html.png" alt="html logo" />
                        <img src="js.png" alt="js logo" />
                        <img src="css.png" alt="css logo" />

                        <img src="reactBootstrap.png" alt="react-bootstrap logo" />
                        <img src="bootstrap.png" alt="bootstrap logo" />
                        <img src="tailwind.png" alt="tailwind logo" />
                        <img src="react.png" alt=" react logo" />
                        <img src="mongo.png" alt="bootstrap logo" />
                        <img src="firebase.png" alt="tailwind logo" />
                        <img src="heroku.png" alt=" react logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;