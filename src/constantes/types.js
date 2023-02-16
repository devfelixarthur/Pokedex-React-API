import bug from "../imagens/Bug.png";
import dark from "../imagens/Dark.png";
import dragon from "../imagens/Dragon.png";
import eletric from "../imagens/Eletric.png";
import fairy from "../imagens/Fairy.png";
import fighting from "../imagens/Fighting.png";
import fire from "../imagens/Fire.png";
import flying from "../imagens/Flying.png";
import ghost from "../imagens/Ghost.png";
import grass from "../imagens/Grass.png";
import ground from "../imagens/Ground.png";
import ice from "../imagens/Ice.png";
import normal from "../imagens/Normal.png";
import poison from "../imagens/Poison.png";
import psychic from "../imagens/Psychic.png";
import rock from "../imagens/Rock.png";
import steel from "../imagens/Steel.png";
import water from "../imagens/Water.png";

export const getPokemonType = (type) => {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return eletric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return water;
  }
};
