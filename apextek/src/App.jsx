import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

const App = () =>{
  const [count, setCount] = useState(0);
  return(
    <>
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </>
  );
};
export default App;