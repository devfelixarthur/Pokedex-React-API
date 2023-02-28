import React, { useContext } from "react";
import NavBar from "../../components/navbar/NavBar";
import CardPokemon from "../../components/cardPokemon/CardPokemon";
import { getPokemonColors } from "../../constantes/colors";
import { getPokemonType } from "../../constantes/types";
import { GlobalContext } from "../../context/GlobalContext";
import { CardType } from "../../components/cardPokemon/style";
import { MainContainer } from "../../components/main/style";
import { Titulo, AllPokemons } from "./HomeStyle";
import { BasicUsageAdd } from "../../constantes/modal";

function Home() {
  const context = useContext(GlobalContext);
  const { pokemons, addToPokedex, isOpen } = context;

  return (
    <div>
      <NavBar />
      <MainContainer>
        <Titulo>Todos os Pokémons</Titulo>
        <AllPokemons>
          {isOpen && <BasicUsageAdd />}
          {pokemons.map((pokemon) => {
            const type = pokemon.types
              ? pokemon.types.map((type, index) => {
                  return (
                    <CardType
                      src={getPokemonType(type.type.name)}
                      key={index}
                    />
                  );
                })
              : null;

            return (
              <CardPokemon
                key={pokemon.name}
                color={getPokemonColors(
                  pokemon.types && pokemon.types[0]?.type?.name
                )}
                id={pokemon.id}
                nome={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                type={type}
                imagem={
                  pokemon.sprites?.other?.["official-artwork"]?.[
                    "front_default"
                  ]
                }
                addToPokedex={addToPokedex}
                pokemon={pokemon}
              />
            );
          })}
        </AllPokemons>
      </MainContainer>
    </div>
  );
}

export default Home;
