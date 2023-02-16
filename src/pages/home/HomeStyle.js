import styled from 'styled-components'

export const Titulo = styled.p`
gap:150px;
display:block;
width: auto;
height: 72px;
margin-left: 40px;
margin-top: 70px;
margin-bottom:70px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;
color:white;
`
export const AllPokemons = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  background-color: #5E5E5E;
`