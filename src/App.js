import React, { useState } from 'react';
import './App.css';


const FlamesGame = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e, setName) => {
    setName(e.target.value);
  };

  const calculateFlames = () => {
    let name1Array = name1.toLowerCase().split('');
    let name2Array = name2.toLowerCase().split('');

    for (let char of name1Array) {
      if (name2Array.includes(char)) {
        name1Array.splice(name1Array.indexOf(char), 1);
        name2Array.splice(name2Array.indexOf(char), 1);
      }
    }

    const totalLength = name1Array.length + name2Array.length;
    const flames = ['FRIENDS', 'LOVE', 'AFFECTION', 'MARRIAGE', 'ENEMIES', 'SIBLINGS'];

    while (flames.length > 1) {
      let index = (totalLength % flames.length) - 1;
      if (index < 0) {
        index = flames.length - 1;
      }
      flames.splice(index, 1);
    }

    setResult(flames[0]);
  };
 

  return (
    
    <div className="flames-container">
      <h1>Flames </h1>

      <div className="input-container">
        <input
          type="text"
          value={name1}
          onChange={(e) => handleInputChange(e, setName1)}
          placeholder="Enter Your Name"
        />
        <input
          type="text"
          value={name2}
          onChange={(e) => handleInputChange(e, setName2)}
          placeholder="Your Partner Name"
        />
      </div>
      <button onClick={calculateFlames}>Calculate</button>
      {result && <div className="result"> {result}</div>}
    </div>
    
  );
};


export default FlamesGame;