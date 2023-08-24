import React from 'react'

const Welcome = ({username,onLogout}) => {
  return (
    <div>
        <h2>Welcome , {username}!...</h2>
        <button onClick={onLogout}>Cerrar Sesion</button>
    </div>
  )
}

export default Welcome