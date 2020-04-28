import React from 'react';
import FlashCard from './FlashCard';
import alligator from './../assets/alligator.png';
import elephant from './../assets/elephant.png';
import frog from './../assets/frog.png';
import giraffe from './../assets/giraffe.png';


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
    name: 'Giraffe',
    src: giraffe
  } 
]

const CardList = () => {
  // eslint-disable-next-line no-lone-blocks
  {animalList.map((animal => 
    <FlashCard 
      className="card-grid-item"
      animalName={animal.name}
      animalImage={animal.image}
      src={animal.image}
    />
    ))}
}

export default CardList;