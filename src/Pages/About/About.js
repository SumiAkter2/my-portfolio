import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-12'>About <span className='text-primary'>Me</span></h1>
            <div className='flex flex-col w-full  lg:flex-row'>
                <div className='grid flex-grow  h-full card bg-base-300 rounded-box place-items-center'>

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
                <div class="divider lg:divider-horizontal">OR</div>
                <div className='grid flex-grow h-full card bg-base-300 rounded-box place-items-center'>

                    <h1 className='text-2xl font-bold text-primary text-center my-6'> My Skills :</h1>
                    <div className='flex  px-12'>
                        <h1 className='text-3xl font-bold text-left text-primary '>Good:</h1>
                        <button className="btn btn-primary mt-12 rounded-3xl mb-4">HTML</button>
                        <button className="btn btn-primary mt-12 rounded-3xl mb-4 ml-4">CSS</button>
                        <button className="btn btn-primary mt-12 rounded-3xl mb-4 ml-4">JAVA SCRIPT</button>
                        <button className="btn btn-primary mt-12 rounded-3xl mb-4 ml-4">REACT</button>
                        <br />

                    </div>
                    <div> <button className="btn btn-primary  rounded-3xl mb-4 ml-4">Bootstrap</button>
                        <button className="btn btn-primary  rounded-3xl mb-4 ml-4">REACT Bootstrap</button>
                        <button className="btn btn-primary  rounded-3xl mb-4 ml-4">Tailwind</button>
                        <button className="btn btn-primary  rounded-3xl mb-4 ml-4">Firebase</button></div>
                    <h1 className='text-3xl font-bold text-left text-primary  '>Comfortable:</h1>
                    <div className='flex px-12'>

                        <button className="btn btn-primary mt-12 rounded-3xl mb-4">MongoDB</button>
                        <button className="btn btn-primary mt-12 rounded-3xl mb-4 ml-4">Heroku</button>
                        <button className="btn btn-primary mt-12 rounded-3xl mb-4 ml-4">Nodejs</button>
                        <button className="btn btn-primary mt-12 rounded-3xl mb-4 ml-4">Rest API</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;