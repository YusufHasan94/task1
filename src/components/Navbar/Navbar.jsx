import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-violet-500">
            <div className="navbar-start">
                <Link to="/">
                   <button className='btn bg-transparent text-white hover:bg-violet-400'> Popular Shows</button>
                </Link>
            </div>
      </div>
    );
};

export default Navbar;