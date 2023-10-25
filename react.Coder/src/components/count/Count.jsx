import React, {useState} from "react";

const count = ({initial, stock})=> {

    const [counter,setCounter]= useState (initial)
     console.log(counter)
    const increment = () =>{
      if (counter < stock ) {
    setCounter (counter+1)
    }
    }
    
    const decrement = () =>{
    if (counter>1 ) {
    setCounter (counter-1)
    }
    
    }
    
    return (
    <div>
      <button onClick={()=> {increment()}}>Incrementar</button>
      <p>Contador: {counter}</p>
      <button onClick={()=> {decrement()}}>Decrementar</button>
    </div>
    );
};
  

export default count