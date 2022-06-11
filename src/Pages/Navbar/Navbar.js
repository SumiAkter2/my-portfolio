import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='lg:px-12'>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink className='my-2' to='/'>Home</NavLink></li>
                            <li><NavLink className='my-2' to='/about'>About</NavLink></li>
                            <li><NavLink className='my-2' to='/contact'>Contact</NavLink></li>
                            <li><NavLink className='my-2' to='/blogs'>Blogs</NavLink></li>
                            <li><NavLink className='my-2' to='/project'>Project</NavLink></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Portfolio</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 font-bold">
                        <li><NavLink className='mx-2' to='/'>Home</NavLink></li>
                        <li><NavLink className='mx-2' to='/about'>About</NavLink></li>
                        <li><NavLink className='mx-2' to='/project'>Project</NavLink></li>

                        <li><NavLink className='mx-2' to='/contact'>Contact</NavLink></li>
                        <li><NavLink className='mx-2' to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <a href='https://drive.google.com/file/d/1gZGfgLr0TX-uTgLKOyihcwqeNyldHOAE/view' class="btn">Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;