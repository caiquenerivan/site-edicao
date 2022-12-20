import React from "react";
import styled from "styled-components";
import { Box, Texto, Titulo} from "../Components/UI";
import { corPrimaria } from "../Components/UI/variaveis";


const Span = styled.span`
    text-transform: uppercase;
    color: ${corPrimaria};
    font-weight: 550;

`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 7em;
    width: 90vh;
    justify-content: space-around;

    a:hover{
        color: ${corPrimaria};
    }
    
`;

export default function Contato(){
    return(
        <Box>
            <Titulo>Contato</Titulo>
            <TextBox>

                <Texto>
                    <Span>Email: </Span>
                    caiquenerivansantos@gmail.com
                </Texto>
                <Texto>
                    <Span>Telefone: </Span>
                    (11) 94706-5991
                </Texto>
                <Texto>
                    <Span>Youtube: </Span>
                    <a href="https://www.youtube.com/channel/UCgh4q2wd2vz2_mw5Z3-nDyg" target="_blank">https://www.youtube.com/channel/craquenerivan</a>
                </Texto>

                
            </TextBox>

        </Box>
    );
}