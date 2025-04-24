import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const { currentUser, loading } = useAuth();

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    if (!currentUser) return <Navigate to="/login" />;
    return children;
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      } />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;