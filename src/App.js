// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RedirectComponent from './Components/RedirectComponent';
import AndroidSupported from './Components/AndroidSupported';
import AndroidUnsupported from './Components/AndroidUnsupported';
import IPhoneSupported from './Components/iPhoneSupported';
import Fallback from './Components/Fallback';
import IPhoneUnsupported from './Components/iPhoneUnsupported';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectComponent />} />
        <Route path="/AndroidSupported" element={<AndroidSupported />} />
        <Route path="/AndroidUnsupported" element={<AndroidUnsupported />} />
        <Route path="/IPhoneSupported" element={<IPhoneSupported />} />
        <Route path="/IPhoneUnsupported" element={<IPhoneUnsupported />} />
        <Route path="/Fallback" element={<Fallback />} />
      </Routes>
    </Router>
  );
};

export default App;
