import React from 'react';
import FlashCard from './FlashCard';
import tiger from './../assets/tiger.png';


const animalList = [
  {
    name: 'Tiger',
    src: tiger
  },
  {
    name: 'Elephant'
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