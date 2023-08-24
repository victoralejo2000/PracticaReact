const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?limit=100";

export const getDataFromPokemon = async (url = BASE_URL) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    
    console.log(error.message);
    
  }
};
