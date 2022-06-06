import '../css/sidbar.css';
import React from "react";
import {Nav} from "react-bootstrap";

const Sidebar = props => {
   

    return (
        <>
    
            <Nav className="col-md-15 d-none d-md-block sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link className='navLinks' href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='navLinks'  eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='navLinks'  eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='navLinks'  eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };
  export default Sidebar