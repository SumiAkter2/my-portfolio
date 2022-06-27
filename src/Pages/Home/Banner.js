import { NavLink } from 'react-router-dom';
import React from 'react';
import './Bannar.css';

const Banner = () => {
    return (
        <div className='px-12'>

            <div className="grid lg:grid-cols-2 my-24  " >
                <div className='rounded-tr-3xl  rounded-bl-3xl w-full text-center bg-black '>
                    <img src='my img2.jpg' style={{ 'height': '300px' }} className="rounded-tr-3xl rounded-bl-3xl mx-auto my-24 " alt='girls-pic' />
                </div>
                <div className='pt-12  px-12 mt-12'>
                    <h2 className="text-5xl font-bold uppercase animate-charcter " data-aos="fade-down"> I'm Sumi Akter.</h2>
                    <p className="pt-4 text-3xl font-bold text-secondary uppercase " data-aos="fade-left">-Junior Web Developer</p>
                    <p className='pt-4 ' data-aos="fade-left">I'm a creative and passionate Junior-Web developer from Bangladesh. Being a friendly person and eager to learn new technologies. I'm comfortable in English and a quick responder.</p>
                    <div >
                        <NavLink to='/about'>
                            <button className="btn btn-secondary mt-12 rounded-3xl  mb-4 " ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" className="fill-current"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z" /></svg> <span className='pl-2'>More About Me</span></button>
                        </NavLink>
                        <a href="https://drive.google.com/file/d/1gZGfgLr0TX-uTgLKOyihcwqeNyldHOAE/view"> <button className="btn btn-secondary mt-12 rounded-3xl mb-4 lg:ml-8 " ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24" className="fill-current"><path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z" /></svg><span className='pl-2'>  View Resume </span></button></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;