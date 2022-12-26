import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { corPrimaria } from "../UI/variaveis";


import Menu from "../menu";
import Home from "../../pages/Home";
import Skills from "../../pages/Skills";
import Portfolio from "../../pages/Portfolio";
import Sobre from "../../pages/Sobre";
import Contato from "../../pages/Contato";


import * as FaIcons from 'react-icons/fa';


const StyledWrapper = styled.div`
    width: 100%;
    max-width: 2000px;
    margin: 0px;
    display: flex;
    background-color: ${({ theme }) => theme.body};
    
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    min-height: 100vh;
`;

const Whats = styled.div`

    position: fixed;
    bottom: 2em;
    right: 2em;
    z-index: 1;
    
    a{
        font-size: 3.5em;
        color: ${({ theme }) => theme.text};
    }

    a:hover{
        color: ${corPrimaria};
        font-size: 4em;
    }

`;


export default function Wrapper() {

    return (
        <ContentWrapper>
            <StyledWrapper>
                <Router>

                    <Menu />
                    <Routes>
                        <Route path='/' exact element={<Home />} />
                        <Route path='/skills' element={<Skills />} />
                        <Route path='/portfolio' element={<Portfolio />} />
                        <Route path='/sobre' element={<Sobre />} />
                        <Route path='/contato' element={<Contato />} />
                    </Routes>

                </Router>

                <Whats>
                    <a href="https://wa.me/5511947065991" target="_blank">
                        <FaIcons.FaWhatsapp />
                    </a>
                </Whats>
            </StyledWrapper>
        </ContentWrapper>

    );
}