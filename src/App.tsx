import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
      </Routes>
    </div>
  );
}

export default App;
