import styled from "styled-components";

export const NavContainer = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
  padding: 50px;
  height: 18vh;
  background-color: #ffffff;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18vw;
  }

  .Flecha {
    position: absolute;
    left: 2%;
    width: 7.29px;
    height: 14.58px;
    top: 52%;
  }

  button {
    position: absolute;
    width: 180px;
    right: 3%;
    background-color: #33a4f5;
  }

  a {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 24px;
    cursor: pointer;
    text-decoration: underline;
  }

  .botão{
    top: 50%;
    position: absolute;
    width: 180px;
    right: 3%;
    background-color: #33a4f5;
  }
`;

export const NavStyled = styled.nav`
  position: relative;
  width: 100%;
`;

export const Titulo = styled.p`
  width: 420px;
  height: 72px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
`;

export const Pokedex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
