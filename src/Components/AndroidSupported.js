import React, { useEffect, useState } from 'react';
import fetchApiData from '../apiService';

const AndroidSupported = () => {
  const [redirectUrl, setRedirectUrl] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

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
      window.location.href = redirectUrl;
    }
  }, [redirectUrl]);

  return (
    <div>
      <h1>AndroidSupported</h1>
      {/* Add your component content here */}
      <p>Your AndroidSupported component content goes here.</p>
    </div>
  );
};
export default AndroidSupported; 