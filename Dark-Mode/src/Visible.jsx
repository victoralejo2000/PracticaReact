import { useState } from "react";

const Visible=() => {
    const[Visible,setVisible]=useState(true);

    const Visibilidad=()=>{
        setVisible(!Visible)
    }

    return (
        <div>
        <h1>Visible</h1>
        <button onClick={Visibilidad}>
            {Visible ? 'Ocultar':'Mostrar'}
        </button>
        {Visible && <p>1315646545</p>}
        </div>
    )

}

export default Visible