import React, { useContext } from "react";
import CardPokemon from "../../components/cardPokemon/CardPokemon";
import { CardType } from "../../components/cardPokemon/style";
import { MainContainer } from "../../components/main/style";
import NavBar from "../../components/navbar/NavBar";
import { getPokemonColors } from "../../constantes/colors";
import { BasicUsageAdd } from "../../constantes/modal";
import { getPokemonType } from "../../constantes/types";
import { GlobalContext } from "../../context/GlobalContext";
import { Container, Titulo, TituloPokedex } from "./PokedexStyle";

function Pokedex() {
  const context = useContext(GlobalContext);

  const { pokedex, removeFromPokedex, isOpen } = context;

  return (
    <div>

    <NavBar/>
    <MainContainer>
      <>
      <Titulo>Meus Pokémons</Titulo>
    {!pokedex[0] ? (
      <TituloPokedex>Não há pokémons adicionados à sua Pokedex !</TituloPokedex>
    ) : (
      ''
    )}
    <Container>
    {isOpen &&  <BasicUsageAdd/> }
      {pokedex.map((pokemon) => {
        const type = pokemon.types
          ? pokemon.types.map((type, index) => {
              return (
                <CardType src={getPokemonType(type.type.name)} key={index} />
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
              pokemon.sprites?.other?.["official-artwork"]?.["front_default"]
            }
            removeFromPokedex={removeFromPokedex}
            pokemon={pokemon}
          />
        );
      })}
</Container>
      </>
    
    </MainContainer>
    </div>
  );
}

export default Pokedex;
