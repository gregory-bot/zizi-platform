import React from 'react';
import { Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = ({ small = false }) => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <Database className={`text-primary-500 ${small ? 'h-6 w-6' : 'h-8 w-8'}`} />
        <span className={`ml-2 font-display font-bold text-primary-500 ${small ? 'text-xl' : 'text-2xl'}`}>
          Zizi
        </span>
      </div>
    </Link>
  );
};

export default Logo;