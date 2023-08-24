// import React from 'react'
import { useEffect, useState } from 'react'
import {Container,Card, CardContent,CardMedia,Grid} from "@mui/material";
import { getDataFromPokemon } from '../service';
import BotonPokemon from '../componentes/BotonPokemon';


const Pokemon = () => {

    const imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

const [pokemons,SetPokemons]=useState([]);

const fetchPokemonList = async()=>{
    const listPokemones = await getDataFromPokemon();
    console.log("lista de pokemons", listPokemones.results);
    SetPokemons(listPokemones.results)
}

    useEffect(()=>{
      fetchPokemonList();
    },[]);


  return (
    <Container>
    <h1>Pokedex hola</h1>
    <Grid container spacing={3}>
      {pokemons.length > 0 &&
        pokemons.map((pokemon,index)=>(
          <Grid item md={4}>
          <Card>
              <CardMedia
              component="img"
              image={`${imgUrl}${index +1}.svg`}/>
              <CardContent>
                <h3>{pokemon.name}</h3>
                <h3>Numero: {index}</h3>
              </CardContent>
              <botonPokemon/>
          </Card>
          </Grid>
    ))}
    </Grid>
    </Container>
  )
}

export default Pokemon;