// FormPage.js
import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

function FormPage() {
  const [inputName, setInputName] = useState('');
  const { setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserName(inputName);
    navigate('/display');
  };

  return (
    <div>
      {/* <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h1>{inputName}</h1> */}
    </div>
  );
}

export default FormPage;
