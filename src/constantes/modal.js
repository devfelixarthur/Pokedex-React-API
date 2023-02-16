import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import pokemonAdicionado from "../imagens/pokemoAdicionado.png";
import pokemonRemovido from "../imagens/pokemonRemovido.png";

export function BasicUsageAdd() {
  const context = useContext(GlobalContext);
  const { isOpen, onOpen, onClose } = context;
  const location = useLocation();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {(() => {
              switch (location.pathname) {
                case "/":
                  return <img src={pokemonAdicionado} />;
                case "/Pokedex":
                  return <img src={pokemonRemovido} />;
                default:
                  return <img src={pokemonRemovido} />;
              }
            })()}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
