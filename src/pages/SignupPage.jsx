import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import SignupForm from '../components/auth/SignupForm';
import Logo from '../components/common/Logo';

const SignupPage = () => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Background Image Side */}
      <div className="hidden md:flex md:w-1/2 bg-cover bg-center bg-no-repeat relative" style={{ 
        backgroundImage: "url('https://i.postimg.cc/PfgcqdmL/zizi-web.jpg')" 
      }}>
        <div className="absolute inset-0 bg-primary-900 opacity-70"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-8">
          <h1 className="text-4xl font-display font-bold mb-6">Join Zizi Today</h1>
          <p className="text-xl max-w-md text-center">
            Create an account to connect with institutions and industry partners in hospitality and tourism
          </p>
        </div>
      </div>

      {/* Signup Form Side */}
      <div className="flex flex-col justify-center items-center flex-1 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h2 className="mt-6 text-center text-2xl font-display font-bold leading-9 text-gray-900">
            Create your account
          </h2>
        </div>

        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;