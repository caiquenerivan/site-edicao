import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Wrapper from "./Components/wrapper";
import { GlobalStyle } from "./Components/GlobalStyle";
import SwitcherTema from "./Components/SwitcherTema";
import { BtnTema } from "./Components/UI";


function App() {

  const [tema, setTema] = useState(true);

  const toggleTema = (tema) => {
    setTema((tema) => !tema);
  };



  return (
    
    <ThemeProvider theme={(tema) ? temaClaro : temaEscuro}>
      
      <GlobalStyle />

      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      
      <Wrapper/>
      
    </ThemeProvider>
  );
}

export default App;
