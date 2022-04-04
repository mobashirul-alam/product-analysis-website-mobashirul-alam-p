import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center mt-6 mb-4 font-medium'>
            <nav>
                <Link className='mx-6 px-3 pb-1 border-b-2 border-indigo-200' to='/home'>HOME</Link>
                <Link className='mx-6 px-3 pb-1 border-b-2 border-indigo-200' to='/reviews'>REVIEWS</Link>
                <Link className='mx-6 px-3 pb-1 border-b-2 border-indigo-200' to='/dashboard'>DASHBOARD</Link>
                <Link className='mx-6 px-3 pb-1 border-b-2 border-indigo-200' to='/blogs'>BLOGS</Link>
                <Link className='mx-6 px-3 pb-1 border-b-2 border-indigo-200' to='/about'>ABOUT</Link>

            </nav>
        </div>
    );
};

export default Header;