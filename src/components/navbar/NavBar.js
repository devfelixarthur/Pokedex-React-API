import React from "react";
import { NavContainer, NavStyled, Titulo } from "./style";
import { Button, RangeSliderThumb } from "@chakra-ui/react";
import pokemonLogo from "../../imagens/pokemonLogo.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToPokedex, goToHome } from "../../router/Cordinator";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import flecha from '../../imagens/flecha.png'

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(GlobalContext);
  const { removeFromPokedex, pokedex, addToPokedex } = context;
  const { name } = useParams();

  console.log(pokedex);

  // Responsável por retornar o conteúdo de acordo com a rota atual
  return (
    <NavStyled>
      {(() => {
        switch (location.pathname) {
          // Caso esteja na tela inicial da aplicação o ícone do pokémon deve aceitar o click para ir para a Pokedex
          case "/":
            return (
              <NavContainer>
                <div>
                  <img src={pokemonLogo} alt="" />
                </div>
                <div>
                  <Button onClick={() => goToPokedex(navigate)}>Pokedex</Button>
                </div>
              </NavContainer>
            );
          // Pode ser incluído um botão para excluir da pokedex na tela pokedex
          case "/pokedex":
            return (
              <NavContainer>
                <div>
                <img className='Flecha' src={flecha}/>
                  <a onClick={() => goToHome(navigate)}>Todos os Pokémons</a>
                </div>  
                <div>
                  <img src={pokemonLogo} alt="" />
                </div>
              </NavContainer>
            );
          // Se não estiver em nenhuma dessas páginas deve ser rendereizado o componente padrão
          case `/details/${name}`:
            const pokemon = pokedex.find(
              (pokemon) => pokemon.name === name.toLowerCase()
            );
            console.log(pokemon, "pokemon");
            return (
              <NavContainer>
                <div>
                  <a onClick={() => goToHome(navigate)}> 
                  <img className='Flecha' src={flecha}/>
                  Todos os Pokémons 
                  </a>
                </div>
                <div>
                  <img src={pokemonLogo} alt="" />
                </div>
                {pokemon ? (

                    <Button
                    margin={'-2%'}
                      colorScheme={"red"}
                      onClick={() => {
                        removeFromPokedex(pokemon);
                      }}
                    >
                      Excluir da Pokedex
                    </Button>

                ) : (
                 <div className="Botão">
                  <Button margin={'-2%'} onClick={() => goToPokedex(navigate)}>Pokedex</Button>
                </div>

                )}
              </NavContainer>
            );
        }
      })()}
    </NavStyled>
  );
}

export default NavBar;
