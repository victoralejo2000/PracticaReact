import { useState } from "react";
import React from "react";

const Formulario =()=>{
const[nombre,setNombre]=useState("")
const[apellido,setApellido]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")


const handleInputName=(e)=>{
    setNombre(e.target.value)
}

const handleInputApellido=(e)=>{
    setApellido(e.target.value)
}

const handleInputEmail=(e)=>{
    setEmail(e.target.value)
}

const handleInputPassword=(e)=>{
    setPassword(e.target.value)
}

    return (
        <div>
            <form action="">
                <h3>Formulario de Registro</h3>
                <h3>Nombre: {nombre}</h3>
                <h3>Apellido: {apellido}</h3>
                <h3>Email: {email}</h3>
                <h3>Password: {password}</h3>
                <p><input onChange={handleInputName} type="text" placeholder="Ingresa tu Nombre" /></p>
                <p><input onChange={handleInputApellido} type="text" placeholder="Ingresa tu Apellido" /></p>
                <p><input onChange={handleInputEmail} type="email" placeholder="Ingresa tu Email" /></p>
                <p><input onChange={handleInputPassword} type="password" placeholder="Ingresa tu Password" /></p>
            </form>
        </div>
    );
};

export default Formulario;