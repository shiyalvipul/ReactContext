import React from 'react';
import './App.css';

import ComponentC from './modules/ComponentC';
import { UserProvider } from './modules/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Vipul">
       <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
