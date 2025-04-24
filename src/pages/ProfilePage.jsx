import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage = () => {
  const { currentUser } = useAuth(); // Get the current user from AuthContext
  const [username, setUsername] = useState(currentUser?.displayName || '');
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    // Logic to update the username (e.g., Firebase updateProfile)
    // Example: Firebase Auth update
    currentUser
      .updateProfile({
        displayName: username,
      })
      .then(() => {
        alert('Username updated successfully!');
        setEditing(false);
      })
      .catch((error) => {
        console.error('Error updating username:', error);
        alert('Failed to update username.');
      });
  };

  const initials = username
    ? username
        .split(' ')
        .map((name) => name[0])
        .join('')
        .toUpperCase()
    : 'NA'; // Default initials if no username is set

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <div className="h-20 w-20 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-bold">
            {initials}
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Profile</h1>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Email</label>
          <input
            type="email"
            value={currentUser?.email || ''}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Username</label>
          {editing ? (
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          ) : (
            <input
              type="text"
              value={username}
              disabled
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
            />
          )}
        </div>
        <div className="flex justify-between">
          {editing ? (
            <>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600"
              >
                Save
              </button>
              <button
                onClick={() => setEditing(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600"
            >
              Edit Username
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;