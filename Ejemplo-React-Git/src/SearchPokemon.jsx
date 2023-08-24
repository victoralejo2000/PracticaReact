import { useState } from "react";

const EjemploPokemon = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
    const data = await response.json();
    setUser(data);
     console.log("api pokemon", data);
  };

  return (
    <div>
      <h1>Buscador Pokemon</h1>
      <div>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Ingresa Pokemon"
        />
      </div>
      <div>
        <button onClick={fetchUser}>Buscar</button>
      </div>
      <article>
        <div>
          <img src={user.sprites.other["official-artwork"].front_default} alt="" />
          <h4>nombre:{user.name}</h4>
        </div>
      </article>
    </div>
  );
};

export default EjemploPokemon;