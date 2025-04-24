import React, { useState, useEffect } from 'react';

const FindPartnersPage = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch partners data
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        // Replace this with your actual data fetching logic (e.g., Firebase or API)
        const response = await fetch('/api/partners'); // Example API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch partners');
        }
        const data = await response.json();
        setPartners(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Find Partners</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-gray-800">{partner.name}</h2>
            <p className="text-gray-600">{partner.description}</p>
            <p className="text-gray-500 text-sm mt-2">Location: {partner.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindPartnersPage;