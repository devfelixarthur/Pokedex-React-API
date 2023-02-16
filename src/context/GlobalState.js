import axios from "axios";
import { useEffect, useState } from "react";
import { Base_URL } from "../constantes/base_url";
import { GlobalContext } from "./GlobalContext";
import ReactModal from "react-modal";
import pokemoAdicionado from "../imagens/pokemoAdicionado.png"
import { useDisclosure } from "@chakra-ui/react";

// Função que gerencia o estado global da aplicação
function GlobalState(props) {
  // Gerencia o estado de todos os pokemons
  const [pokemons, setPokemons] = useState([]);
  // Gerencia o estado da pokedex
  const [pokedex, setPokedex] = useState([]);

      const { isOpen, onOpen, onClose } = useDisclosure()

  // useEffect para carregar todos os pokemons

  useEffect(() => {
    // Função que busca todos os pokemons
    async function getPokemons(url, method) {
      try {

        // Faz a requisição à API
        const response = await axios({
          method: method,
          url: url,
        });

        // Busca os detalhes de cada pokemon
        const pokemonDetails = await Promise.all(
          response.data.results.map((pokemon) => {
            return axios.get(pokemon.url);
          })
        );

        // Atualiza o estado de todos os pokemons com seus detalhes
        setPokemons(pokemonDetails.map((pokemonDetail) => pokemonDetail.data));
        console.log(pokemonDetails);
      } catch (error) {
        console.error(error);
      }
    };
    // Chama a função que busca todos os pokemons
    getPokemons(Base_URL, "GET");
  }, []);
  
  // Adiciona um pokemon à pokedex
  const addToPokedex = (pokemonToAdd) => {
    
    // Verifica se o pokemon já está na pokedex
    const isAlreadyOnPokedex = pokedex.find(
        (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    // Se o pokemon ainda não estiver na pokedex
    if (!isAlreadyOnPokedex) {
        // Adiciona o pokemon na pokedex
        const newPokedex = [...pokedex, pokemonToAdd];
        setPokedex(newPokedex);
    }
    onOpen()
  };

  // Remove um pokemon da pokedex
  const removeFromPokedex = (pokemonToRemove) => {
    // Filtra a pokedex para remover o pokemon
    const newPokedex = pokedex.filter(
        (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );
    // Atualiza o estado da pokedex
    setPokedex(newPokedex);
    onOpen();
  };


// Dados para serem fornecidos ao contexto
const data = {
    pokemons,
    setPokemons,
    pokedex,
    setPokedex,
    addToPokedex,
    removeFromPokedex,
    isOpen, 
    onOpen, 
    onClose,
};

// Retorna o componente provider que fornecerá os dados para o contexto
return <GlobalContext.Provider value={data}>{props.children}</GlobalContext.Provider>;

}

export default GlobalState;