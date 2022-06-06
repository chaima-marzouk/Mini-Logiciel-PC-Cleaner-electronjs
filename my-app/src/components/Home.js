import React, { useState } from 'react';
import Sidebar from './sidebar';
import {
    Col,
    Collapse,
    div,
    Row,
} from 'react-bootstrap';
import Navbar from './navbar';
import Cards from './cards';
// import '../css/Home.css' 

function Home() {
  return (
    <div>
       <div style={{'display': 'flex'}}>
            <div>  
                <Sidebar />
            </div> 
            <div>
                <Navbar/>
                <Cards/>
            </div>
        </div>
    </div>
  )
}

export default Home;

