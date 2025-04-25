import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ small = false }) => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <img
          src="https://i.postimg.cc/PfgcqdmL/zizi-web.jpg" // Replace with your image URL
          alt="Zizi Logo"
          className={`rounded-full object-cover ${small ? 'h-8 w-8' : 'h-8 w-8'}`}
        />
        <span className={`ml-2 font-display font-bold text-primary-500 ${small ? 'text-xl' : 'text-2xl'}`}>
          Zizi
        </span>
      </div>
    </Link>
  );
};

export default Logo;