import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Welcome from "./Welcome";

const App2 = () => {
  //utilizar el hooks para manejar el estado del usuario
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  //funcion para manejar el inicio de sesion
  const handleLogin = (username) => {
    setUser(username);
    localStorage.setItem("user", username);
  };
  //cierra sesion y elimina los datos del localstorage
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div>
      {user ? (
        <Welcome username={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App2;
