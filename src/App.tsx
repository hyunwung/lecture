import React from 'react';
import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
