// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import FormPage from './FormPage';
import DisplayPage from './DisplayPage';

function App() {
  return (
    <Router>
      <UserProvider>

        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/display" element={<DisplayPage />} />
        </Routes>

      </UserProvider>
    </Router>
  );
}

export default App;
