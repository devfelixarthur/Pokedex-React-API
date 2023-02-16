import styled from "styled-components";
import pokebola from "../../imagens/pokeBola.png";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
export const CardContainer = styled.div`
  background-image: url(${pokebola});
  background-repeat: no-repeat;
  background-position: right;
  width: 440px;
  height: 210px;
  border-radius: 12px;
  background-color: ${(props) => props.color};
  color: white;
  padding-left: 1.43rem;
  margin-bottom: 1.25rem;
  margin-top: 5vh;
  margin-left: 5%;
  a {
    cursor: pointer;
    text-decoration: underline;
  }
  div {
    margin-top: 1vh;
    margin-bottom: 1vh;
  }
`;
export const Pokemon = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60%;
  div p{
    font-weight:700;
    font-size:16px;
    line-height:13,36px
  }
    h1{
      font-weight:700;
      font-size:32px;
      line-height:38,73px
    }
`;

export const Type = styled.div`
  display: flex;
  gap: 0.62rem;
`;

export const ImgPokemon = styled.img`
  width: 193px;
  height: 193px;
  position: relative;
  right: 236px;
  left: 11px;
  bottom: 70px;
`;

export const Link = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20vw;
`;

export const ButtonPokedex = styled.button`
  min-width: 7.6vw;
  height: 3.9vh;
  background-color: #ff6262;
  color: white;
  border-radius: 8px;
  padding: 4px 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  border: none;
  cursor: pointer;
`;

export const ButtonPokemon = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 146px;
height: 38px;
background: #FFFFFF;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;
color:black;
font-weight:400;
`;
export const ButtonPokemonRemove = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
color: white;
width: 146px;
height: 38px;

background-color: #FF6262;
border-radius: 8px;

flex: none;
order: 1;
flex-grow: 0;
`;

export const CardType = styled.img`
  width: 99px;
  height: 31px;
`;
export const ContainerButton = styled.div`
display:flex;
height:30%;
margin-bottom: 13px;
margin: 12px;
justify-content: space-between;
align-items: center;
font-size:16px;
line-height: 24px;
`;
