import React from "react";
import {CardContainer, Pokemon, Type, ImgPokemon, ButtonPokemon, ButtonPokemonRemove, ContainerButton} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetails } from "../../router/Cordinator";


function CardPokemon({color, id, nome, type, imagem, addToPokedex, pokemon, removeFromPokedex,}) {
    const navigate = useNavigate()
    const location = useLocation();

    
  return (
    <CardContainer color={color} >
      <Pokemon>
        <div>
          <p>#{id}</p>
          <h1>{nome}</h1>
          <Type>{type}</Type>
        </div>
        <ImgPokemon
          src={imagem}
          alt={nome}
        />
      </Pokemon>
      <ContainerButton>
        <button onClick={() => goToDetails(navigate, nome)}>
          Ver detalhes
        </button>
        {location.pathname === "/" ? (
          <ButtonPokemon onClick={()=>addToPokedex(pokemon)}>
            Capturar !
          </ButtonPokemon>
        ) : (
          <ButtonPokemonRemove onClick={()=>removeFromPokedex(pokemon)}>
            Excluir
          </ButtonPokemonRemove>
        )}
      </ContainerButton>
    </CardContainer>
    );
  }

export default CardPokemon;