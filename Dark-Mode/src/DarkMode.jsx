import React from "react";
import { useState } from "react";
import "./Tema.css"

const DarkMode = () => {
    const[tema, setTema]=useState('lightMode');

    const CambiarTema = () => {
        setTema(tema === 'lightMode' ? 'dark': 'lightMode')
    }

    return(
        <div className={`App ${tema}`}>
            <h1>CAMBIO DE TEMA</h1>
            <button onClick={(CambiarTema)}>Cambiar</button>
        </div>
    )
}

export default DarkMode