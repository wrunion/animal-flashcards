import React from 'react';
import './FlashCard.css';
import FlashCard from './FlashCard';
import alligator from './../assets/alligator.png';
import elephant from './../assets/elephant.png';
import frog from './../assets/frog.png';
import giraffe from './../assets/giraffe.png';
import hedgehog from './../assets/hedgehog.png';
import kangaroo from './../assets/kangaroo.png';
import lion from './../assets/lion.png';
import monkey from './../assets/monkey.png';
import owl from './../assets/owl.png';
import pandabear from './../assets/pandabear.png';
import parrot from './../assets/parrot.png';
import tiger from './../assets/tiger.png';

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
  },
  {
    name: 'Hedgehog',
    src: hedgehog
  },
  {
    name: 'Lion',
    src: lion
  },
  {
    name: 'Monkey',
    src: monkey
  },
  {
    name: 'Owl',
    src: owl
  },
  {
    name: 'Kangaroo',
    src: kangaroo
  },
  {
    name: 'Tiger',
    src: tiger
  }, 
  {
    name: 'Parrot',
    src: parrot
  },
    {
    name: 'Panda Bear',
    src: pandabear
  }
]

const CardList = () => {
  return(
  <div id="card-list" className="flex-container">
  {animalList.map((animal => 
    <FlashCard 
      className="grid-container flex-item card"
      animalName={animal.name}
      animalImage={animal.src}
    />
    ))}
    </div>
  );
}

export default CardList;