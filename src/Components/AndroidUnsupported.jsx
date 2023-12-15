import React, { useEffect, useState } from 'react';
import fetchApiData from '../apiService';

const AndroidUnsupported = () => {
  const [redirectUrl, setRedirectUrl] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      const data = await fetchApiData();
      const url = data.redirectUrl;
      setRedirectUrl(url);
  };

  useEffect(() => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  }, [redirectUrl]);


  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'nl', label: 'Dutch' },
  ];

  const getLink = (language) => {
    switch (language) {
      case 'en':
        return 'https://spikes1be.sharepoint.com/sites/Arvesta/Documents%20partages/Forms/AllItems.aspx?ct=1702546716213&or=Teams%2DHL&ga=1&LOF=1&id=%2Fsites%2FArvesta%2FDocuments%20partages%2FProject%20Uitrol%20Intune%20op%20mobile%20devices%2FP30%2E%20Service%20Delivery%2FUser%20manuals%20in%20Arvesta%20template%2FDEV%2FMAM%5FAndroid%5FEN%2Epdf&viewid=818774b4%2D38a2%2D42e6%2Db4f2%2Daa9875290a3f&parent=%2Fsites%2FArvesta%2FDocuments%20partages%2FProject%20Uitrol%20Intune%20op%20mobile%20devices%2FP30%2E%20Service%20Delivery%2FUser%20manuals%20in%20Arvesta%20template%2FDEV';
      case 'fr':
        return 'https://spikes1be.sharepoint.com/:b:/s/Arvesta/EZFrsXvSnZlKkdoWYTWz3eAB_3We1wRyg5FoChX3LldxDQ?e=THlRDo';
      case 'nl':
        return 'https://spikes1be.sharepoint.com/:b:/s/Arvesta/EayWAPPbUvlHu5MafULDhWEBTKYRFQqhT5MnJnSB3smoUg?e=J6bMky';
      default:
        return '';
    }
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

 

  return (
    <div >
      <h1>AndroidUnnnnSupported</h1>
      {/* Add your component content here */}
      
      <label htmlFor="language">Select Language:</label>
      <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div>
        <p>Selected Language: {selectedLanguage}</p>
        <a href={getLink(selectedLanguage)} target="_blank" rel="noopener noreferrer">
          Go to Operational Doc
        </a>
      </div>


    </div>
  );
};

export default AndroidUnsupported;