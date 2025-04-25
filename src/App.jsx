import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import ChatWidget from './components/ChatWidget';
// Pages
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import RegisterInstitutionPage from './pages/institutions/RegisterInstitutionPage';
import UploadCurriculumPage from './pages/institutions/UploadCurriculumPage';
import AnalyticsPage from './pages/institutions/AnalyticsPage';
import RegisterOrganizationPage from './pages/industry/RegisterOrganizationPage';
import DemandsPage from './pages/industry/DemandsPage';
import MarketInsightsPage from './pages/industry/MarketInsightsPage';
import AboutPage from './pages/AboutPage';
import FindPartnersPage from './pages/FindPartnersPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  const { currentUser, loading } = useAuth();

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    if (!currentUser) return <Navigate to="/login" />;
    return children;
  };

  return (
    <div className="relative">
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
        <Route path="/institutions/register" element={
          <ProtectedRoute>
            <RegisterInstitutionPage />
          </ProtectedRoute>
        } />
        <Route path="/institutions/upload" element={
          <ProtectedRoute>
            <UploadCurriculumPage />
          </ProtectedRoute>
        } />
        <Route path="/institutions/analytics" element={
          <ProtectedRoute>
            <AnalyticsPage />
          </ProtectedRoute>
        } />
        <Route path="/industry/register" element={
          <ProtectedRoute>
            <RegisterOrganizationPage />
          </ProtectedRoute>
        } />
        <Route path="/industry/demands" element={
          <ProtectedRoute>
            <DemandsPage />
          </ProtectedRoute>
        } />
        <Route path="/industry/insights" element={
          <ProtectedRoute>
            <MarketInsightsPage />
          </ProtectedRoute>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={
          <ProtectedRoute>
            <FindPartnersPage />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } />
      </Routes>

      {/* ChatWidget */}
      <div className="fixed bottom-6 right-10 z-50">
        <ChatWidget />
      </div>
    </div>
  );
}

export default App;