import React from 'react';
import '../css/card.css';
import { ReactComponent as Clean } from "../img/cards_images/Layer 3.svg";
import { ReactComponent as Historique } from "../img/cards_images/Tracé 1.svg";
import { ReactComponent as Update } from "../img/cards_images/update.svg";
import axios from 'axios'

function cards() {

  const URL = 'http://localhost:5000/delete/delete';
  const Cleann = () => {
    try {
      axios.get(`${URL}`).then((res) => {
        if (res) {
          console.log(res);
        }
        alert('This is an alert message')
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className='cards_wrapper'>
          <div className='card_container'
           >
               <Clean onClick={() => Cleann()}  />
               nettoyer
          </div>

          <div className='card_container'>
               <Historique />
                Historique
          </div>

          <div className='card_container'>
               <Update />
                Mettre a jour 
          </div>

      </div>
    </div>
  )
}

export default cards
