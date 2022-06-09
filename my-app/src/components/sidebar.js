import '../css/sidbar.css';
import React from "react";
import {Nav} from "react-bootstrap";
// import Laptop from '@mui/material/AntDesign';

const Sidebar = props => {
   

    return (
        <>
    
            <Nav className="col-md-15 d-none d-md-block sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link className='navLinks' href="/home">
                     VUE D'ENSEMBLE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='navLinks'  eventKey="link-1">ANALYSE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='navLinks'  eventKey="link-2">HISTORIQUE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='navLinks'  eventKey="link-2">OPTIONS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='navLinks'  eventKey="disabled" disabled>
                SITE WEB
                </Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };
  export default Sidebar