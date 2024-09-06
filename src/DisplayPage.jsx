// DisplayPage.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function DisplayPage() {
  const { userName } = useContext(UserContext);

  return (
    <div>
      {/* <h1>Display Page</h1>
      <h2>Hello, {userName}!</h2> */}
    </div>
  );
}

export default DisplayPage;
