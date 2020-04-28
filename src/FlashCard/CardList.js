import React from 'react';
import FlashCard from './FlashCard';
import alligator from './../assets/alligator.png';
import elephant from './../assets/elephant.png';
import frog from './../assets/frog.png';
import monkey from './../assets/monkey.png';
import tiger from './../assets/tiger.png';
import './FlashCard.css';


const animalList = [
  {
    name: 'Alligator',
    src: alligator
  },
  {
    name: 'Elephant',
    src: elephant
  },
  {
    name: 'Frog',
    src: frog
  },
  {
    name: 'Monkey',
    src: monkey
  },
  {
    name: 'Tiger',
    src: tiger
  } 
]

const CardList = () => {
  return(
  <div id="card-list" className="grid-container">
  {animalList.map((animal => 
    <FlashCard 
      className="grid-item single-card"
      animalName={animal.name}
      animalImage={animal.src}
    />
    ))}
    </div>
  );
}

export default CardList;