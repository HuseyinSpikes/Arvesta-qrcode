import React, {  useState } from 'react';
import '../styling.css';
import logoSpikes from '../spikeslogo.png'; 

const AndroidUnsupported = () => {


  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'nl', label: 'Dutch' },
  ];

  const getLink = (language) => {
    switch (language) {
      case 'en':
        return `${process.env.PUBLIC_URL}/pdfs/MAM_Android_EN.pdf`;
      case 'fr':
        return ''; 
      case 'nl':
        return ''; 
      default:
        return '';
    }
  };
  

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

 

  return (
    <div className="container">
      <div>
      <img src={logoSpikes} alt="Logo" className="logo" />
      </div>



      <h1>Android Unsupported</h1>
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
        <a href={getLink(selectedLanguage)} target="_blank" rel="noopener noreferrer">
          Go to Operational Doc
        </a>
      </div>


    </div>
  );
};

export default AndroidUnsupported;