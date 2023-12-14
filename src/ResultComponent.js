import React, { useEffect, useState } from 'react';

const YourComponent = () => {
    const [redirectUrl, setRedirectUrl] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://arvesta.azurewebsites.net/api/Function1?code=df2gp6J4-AuP6UfUK_GSfX1LxLk9WSC8wI4sJnmXr_FgAzFu09p2HA==', {
                method: 'GET',
                headers: {
                    'Accept-Language': navigator.language,
                    'User-Agent': navigator.userAgent,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

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
        // Your React component JSX here
        <div>
            {/* Render your component content here */}
        </div>
    );
};

export default YourComponent;
