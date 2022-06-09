import React from 'react';
// import Particles from 'react-particles-js';

const Banner = () => {
    return (
        <div className=''>

            <div className="grid lg:grid-cols-2  justify-items-center  my-24  lg:px-12" >
                <div className='w-full text-center bg-slate-600    content-center  justify-items-center align-middle'>
                    <img src='my img.png' style={{ 'height': '300px' }} className=" mx-auto my-24 " alt='girls-pic' />
                </div>
                <div className='pt-12 px-12  '>
                    <h1 className="text-5xl  font-bold uppercase"> I'm Sumi Akter.</h1>
                    <p className="pt-4 text-3xl font-bold text-primary uppercase">-Junior Web Developer</p>
                    <p className='pt-4'>I'm a creative and passionate Junior-Web developer from Bangladesh. Being a friendly person and eager to learn new technologies. I'm comfortable in English and a quick responder.</p>
                    <div >
                        <button className="btn btn-primary mt-12 rounded-3xl mb-4">More About Me</button>
                        <a href="https://drive.google.com/file/d/1gZGfgLr0TX-uTgLKOyihcwqeNyldHOAE/view"> <button className="btn btn-primary mt-12 rounded-3xl mb-4 lg:ml-8">View Resume</button></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;