import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MainContainer } from "../../components/main/style";
import NavBar from "../../components/navbar/NavBar";
import { GlobalContext } from "../../context/GlobalContext";
import {
  ContainerImagens,
  DetailContainer,
  Titulo,
  Imagem,
  BaseContainer,
  TituloStats,
  MovesContainer,
  Moves,
  ContainerInfos,
  Type,
  ContainerTypes,
  PokeImg,
} from "./detailsStyle";
import { Box, Text, Stack, SimpleGrid } from "@chakra-ui/react";
import { getPokemonType } from "../../constantes/types";
import { getPokemonColors } from "../../constantes/colors";
import { BasicUsageAdd } from "../../constantes/modal";

const Details = () => {
  const context = useContext(GlobalContext);
  const { pokemons, isOpen } = context;
  const { name } = useParams();

  const pokeDetail = pokemons.find(
    (pokemon) => pokemon.name === name.toLowerCase()
  );

  const sumStats = pokeDetail
    ? pokeDetail.stats.reduce((acc, stat) => acc + stat.base_stat, 0)
    : 0;

  return (
    <>
      <NavBar />
      <MainContainer>
        <Titulo>Detalhes</Titulo>
        {isOpen && <BasicUsageAdd />}
        <DetailContainer
          color={getPokemonColors(pokeDetail?.types[0]?.type?.name)}
        >
          <ContainerImagens>
            <Imagem src={pokeDetail?.sprites?.front_default} />
            <Imagem src={pokeDetail?.sprites?.back_default} />
          </ContainerImagens>

          <BaseContainer>
            <Box px={4} py={4}>
              <TituloStats fontWeight="bold">Base Stats</TituloStats>
              <Stack>
                {pokeDetail?.stats.map((stat, index) => (
                  <SimpleGrid columns={3} key={index}>
                    <Text>{stat.stat.name}</Text>
                    <Text>{stat.base_stat}</Text>
                    <Box
                      height="10px"
                      width="100%"
                      mt={2}
                      bg="gray.300"
                      borderRadius="25px"
                      position="relative"
                    >
                      <Box
                        position="absolute"
                        width={`${(stat.base_stat / 150) * 100}%`}
                        height="100%"
                        bg={`hsl(${(stat.base_stat / 150) * 100}, 80%, 50%)`}
                        borderRadius="25px"
                      />
                    </Box>
                  </SimpleGrid>
                ))}
                <SimpleGrid columns={2}>
                  <Text fontWeight="bold">Total</Text>
                  <Text fontWeight="bold">{sumStats}</Text>
                </SimpleGrid>
              </Stack>
            </Box>
          </BaseContainer>

          <ContainerInfos>
            <h2>#{pokeDetail?.id}</h2>
            <h1>{pokeDetail?.name?.toUpperCase()}</h1>
            <ContainerTypes>
              {pokeDetail?.types.map((type, index) => (
                <Type key={index} src={getPokemonType(type.type.name)} />
              ))}
            </ContainerTypes>

            <MovesContainer>
              <TituloStats fontWeight="bold">Moves:</TituloStats>
              {pokeDetail?.moves.slice(0, 4).map((move, index) => (
                <Moves key={index}>{move.move.name.toUpperCase()}</Moves>
              ))}
            </MovesContainer>
          </ContainerInfos>

          <PokeImg
            src={
              pokeDetail?.sprites?.other?.["official-artwork"]?.front_default
            }
          />
        </DetailContainer>
      </MainContainer>
    </>
  );
};

export default Details;
