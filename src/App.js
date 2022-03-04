import React from 'react'
import Home from './Components/Home/Home'
import Sales from './Components/Sales/sales'
import Transfer from './Components/Transfer/Transfer'
import Nav from "./Components/Navbar/Nav"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Salesorder from './Components/Salesorder/Salesorder'
import Salesdetails from "./Components/SalesorderDetails/Salesdetails"
import 'bootstrap/dist/css/bootstrap.min.css';
import TransferDetails from './Components/TransferOrderDetails/TransferDetails'

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Nav/>
      </div>
      <Routes>
        <Route path='/' element = {<Home/>} exact/>
        <Route path='/sales' element = {<Sales/>} />
        <Route path='/transfer' element = {<Transfer/>}/>
        <Route path='/salesorder' element = {<Salesorder/>}/>
        <Route path='/salesorderdetails' element = {<Salesdetails/>}/>
        <Route path='/transferorderdetails' element = {<TransferDetails/>}/>
      </Routes>

    </Router>
  );
}

export default App;
