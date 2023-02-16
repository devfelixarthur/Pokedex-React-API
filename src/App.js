import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import GlobalState from "./context/GlobalState";
import Router from "./router/Router";


function App() {
  return (
    <ChakraProvider>
    <GlobalState>
     <Router/> 
    </GlobalState>
    </ChakraProvider>
  );
}

export default App;
