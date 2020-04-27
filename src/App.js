import React from 'react';
import Hello from './components/Hello';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hello
      to="Ringo"
      from="Paul"
      bangs={3} 
      img=""
      />
      <Hello
      to="Brittany"
      from="Paul"
      bangs={10} />
    </div>
  );
}

export default App;
