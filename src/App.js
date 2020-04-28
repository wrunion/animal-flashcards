import React from 'react';
// import ButtonClick from './ButtonClick/ButtonClick';
import Header from './Header/Header';
// import FlashCard from './FlashCard/FlashCard';
import CardList from './FlashCard/CardList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-main">
       <Header />
      </div>
      <CardList />
    </div>
  );
}

export default App;
