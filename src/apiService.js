const apiUrl = 'https://arvesta.azurewebsites.net/api/Function1?code=df2gp6J4-AuP6UfUK_GSfX1LxLk9WSC8wI4sJnmXr_FgAzFu09p2HA==';

const fetchApiData = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept-Language': navigator.language,
        'User-Agent': navigator.userAgent,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

export default fetchApiData;
