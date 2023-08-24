import { useState } from "react";

const EjemploGit = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const response = await fetch(`https://api.github.com/users/${search}`);
    const data = await response.json();
    setUser(data);
    console.log("api github", data);
  };

  return (
    <div>
      <h1>Bucador Pokemon</h1>
      <div>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Ingresa usuario"
        />
      </div>
      <div>
        <button onClick={fetchUser}>Buscar</button>
      </div>
      <article>
        <div>
          <img src={user.avatar_url} alt="" />
          <h4>nombre:{user.login}</h4>
          <p>Biografia {user.bio}</p>
          <p>Repositorios :{user.public_repos}</p>
        </div>
      </article>
    </div>
  );
};

export default EjemploGit;