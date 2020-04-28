import React from 'react';
// import ButtonClick from './ButtonClick/ButtonClick';
import Header from './Header/Header';
import FlashCard from './FlashCard/FlashCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-main">
       <Header />
      </div>
      <div id="FlashCards">
        <FlashCard 
          animalName="Giraffe"
          animalImage="[Image Here]"
        />
      </div>
    </div>
  );
}

export default App;
