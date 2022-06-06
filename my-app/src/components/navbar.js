import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {
    Container,
    Nav,
    Button
} from "react-bootstrap";
import '../css/navbar.css';

function navbar() {
  return (
    <div>
        <Navbar  variant="dark">
            <Container>
              <div className='nav_Wrapper'>
                <div className='nav_text_part'>
                    <h2>  Analyse du PC nécessaire</h2>
                   <ul className='nav_text_liste'>
                      <div className='nav_text_details'>
                        <li>
                          Espace a nettoyer : 
                        </li>
                        <span>A determiner par analyse</span>
                      </div>
                      <div className='nav_text_details'>
                        <li>
                          Dérniére analyse : 
                        </li>
                        <span>09/06/2021</span>
                      </div>
                      <div className='nav_text_details'>
                        <li>
                            Dérniére MAJ : 
                        </li>
                        <span>09/06/2021</span>
                      </div>
                     
                    </ul>
                </div>
                <div className='nav_button_analyse_part'>
                    <Button className=' mb-2' variant="outline-light" size="lg" >Anaylser</Button>
                </div>
              </div>
            </Container>
        </Navbar>
    </div>
  )
}

export default navbar
