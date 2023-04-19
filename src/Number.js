import React from 'react';
import './Number.css';

function Number({ numbers }) {
  const isEven=(num)=>{
    if(num%2 ===0){
      return true;
    }else{
      return false;
    }
  }

  const isPrime=(num)=>{
    for(let i=2;i<num;i++)
    {
      if(num%i===0)
      return false
    }
    return num>1
  }

  const setBackgroundColor=(num)=>{
    let color ='red';
    if(isEven(num)){
      color ="green";
    }else{
      color="yellow";
    }

    if(isPrime(num)){
      color="red";
    }
    return color;
  }
  return (
    <div className="box">
      {numbers.map((number) => (
        <div className="number" style={{backgroundColor:setBackgroundColor(number)}}>{number}</div>
      ))}
    </div>
  );
}

export default Number;
