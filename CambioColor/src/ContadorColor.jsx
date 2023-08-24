import React from 'react';
import { useState } from 'react';
import "./ContadorColor.css"


const ContadorColor=()=>{
    const[ContadorColor, setContadorColor]=useState(0);


    const incrementar=()=>{
        setContadorColor(ContadorColor+1);
    }

    const decrementar=()=>{
        setContadorColor(ContadorColor-1);
    }

    const reset=()=>{
        setContadorColor(0);
    }

return (
    <div>
    <h1>contador</h1>
    <span
          style={{fontWeight: "bold", fontSize: "5rem",
            color: ContadorColor > 0 ? "green" : ContadorColor < 0 ? "red" : "black",
          }}
        >{ContadorColor}</span>
    <div className="button-container">
        <button onClick={decrementar}>decrementar</button>
        <button onClick={reset}>resetear</button>
        <button onClick={incrementar} >incrementar</button>
    </div>
  </div>
)

}

export default ContadorColor