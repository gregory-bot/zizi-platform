import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from '../components/auth/LoginForm';
import Logo from '../components/common/Logo';

const LoginPage = () => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Background Image Side */}
      <div className="hidden md:flex bg-cover bg-center bg-no-repeat relative" style={{ 
        backgroundImage: "url('https://i.postimg.cc/PfgcqdmL/zizi-web.jpg')" 
      }}>
        <div className="absolute inset-0 bg-primary-900 opacity-70"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-8">
          <h1 className="text-4xl font-display font-bold mb-6">Welcome to Zizi</h1>
          <p className="text-xl max-w-md text-center">
            Bridging the skills gap in hospitality and tourism through AI and blockchain technologies
          </p>
        </div>
      </div>

      {/* Login Form Side */}
      <div className="flex flex-col justify-center items-center flex-1 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h2 className="mt-6 text-center text-2xl font-display font-bold leading-9 text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;