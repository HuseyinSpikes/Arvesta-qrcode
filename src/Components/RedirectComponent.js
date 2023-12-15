// RedirectComponent.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchApiData from '../apiService';

const RedirectComponent = () => {
  const [redirectUrl, setRedirectUrl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const data = await fetchApiData();

      // Extract the redirect URL from the response
      const url = data.redirectUrl;
      setRedirectUrl(url);

      // Handle the URL as needed, e.g., redirect the user
      console.log(url);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    // Check if redirectUrl is set and redirect the user
    if (redirectUrl) {
      navigate(redirectUrl);
    }
  }, [redirectUrl, navigate]);

  return (
    <div>
      {/* You can add a loading spinner or a message here while waiting for the response */}
      <p>Loading...</p>
    </div>
  );
};

export default RedirectComponent;
