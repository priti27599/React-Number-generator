import React from 'react';
import './style.css';
import Number from './Number';

export default function App() {
  let numbers = [];
  for (let i = 0; i <= 31; i++) {
    numbers.push(i);
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '40px' }}>
        Number Generator
      </h1>
      <Number numbers={numbers} />
    </div>
  );
}
