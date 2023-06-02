import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar fixed bg-violet-500 z-20 top-0 bg-opacity-20">
            <div className="navbar-start">
                <Link to="/">
                   <button className='btn bg-transparent text-white bg-violet-600 hover:bg-violet-400'> Popular Shows</button>
                </Link>
            </div>
      </div>
    );
};

export default Navbar;