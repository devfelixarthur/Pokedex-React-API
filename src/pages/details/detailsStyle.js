import styled from "styled-components";
import pokebola from "../../imagens/PokebolaDetailPage.png";

export const Titulo = styled.p`
  gap: 150px;
  display: block;
  width: 420px;
  height: 72px;
  margin-left: 40px;
  margin-top: 40px;
  margin-bottom: 20px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: white;
`;

export const DetailContainer = styled.div`
  display: flex;
  background-image: url(${pokebola});
  background-repeat: no-repeat;
  background-position: right;
  background-color: ${(props) => props.color};
  align-items: center;
  width: 98%;
  height: 700px;
  border-radius: 38px;
  margin-bottom: 2%;
  margin-left: 1%;
  margin-right: 1%;
  padding-block: 50px;
`;

export const ContainerImagens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  justify-content: center;
  padding-left: 44px;
`;
export const Imagem = styled.img`
  background-color: #ffffff;
  width: 282px;
  height: 282px;
  border-radius: 8px;
`;

export const BaseContainer = styled.div`
  width: 350px;
  height: 100%;
  margin-left: 34px;
  margin-right: 68px;
  background-color: #ffffff;
  border-radius: 8px;
`;
export const TituloStats = styled.h1`
  color: black;
  width: 100%;
  font-size: 36px;
  font-weight: 700;
`;
export const ContainerInfos = styled.h1`
  color: white;
  display: Flex;
  flex-direction: column;
  div {
    display: flex;
    gap: 10px;
  }

  h1 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 48px;
  }
  h2 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 24px;
  }
`;

export const ContainerTypes=styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
    padding-block: 10px;
`


export const MovesContainer = styled.div`
  display: Flex;
  flex-direction: column;
  gap: 10px;
  height: 453px;
  width: 292px;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const Moves = styled.div`
  margin-top: 15px;
  margin-left: 18px;
  background-color: #ececec;
  border: 2px dashed grey;
  border-radius: 12px;
  font-size: 16px;
  color: black;
  height: 20px;
  width: 180px;
  padding: 18px;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Type = styled.img`
  width: 99px;
  height: 31px;
`;

export const PokeImg = styled.img`
  width: 270px;
  height: 270px;
  display: block;
  position: absolute;
  margin-top: 10%;
  top: 0;
  right: 0;
`