import React, {useContext} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {GlobalContext} from './context/GlobalContext';
import Home from './components/Home/Home'
import EmployeeListPage from './components/EmployeeListPage/EmployeeListPage';

function App() {

  const {title} = useContext (GlobalContext)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/employee-list' element={<EmployeeListPage/>} />
      </Routes>
    
    </BrowserRouter>
   


   
  );
}

export default App;
