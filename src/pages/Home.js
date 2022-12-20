import React from "react";
import styled from "styled-components";
import { Box, Titulo, SubTitulo, TituloDiv } from "../Components/UI";
import ReactPlayer from "react-player";
import { corPrimaria } from "../Components/UI/variaveis";


const VideoBox = styled.div`
    width: 960px;
    height: 540px;
    margin-top: 2em;
    border: 5px solid ${corPrimaria};
    -webkit-box-shadow: 9px 7px 5px #F5F2F210;
    -moz-box-shadow:    9px 7px 5px #F5F2F210;
    box-shadow:         9px 7px 5px #F5F2F210;
`;


export default function Home(){
    return(
        <Box>
            <TituloDiv>
                <Titulo>Caique Nerivan</Titulo>
                <SubTitulo>Editor de vídeo e motion graphics</SubTitulo>
            </TituloDiv>

            <VideoBox>
                <ReactPlayer 
                    url='https://www.youtube.com/watch?v=JocAXINz-YE&ab_channel=KendrickLamar-Topic'
                    width='100%'
                    height='100%'
                    controls
                />
            </VideoBox>
        </Box>
    );
}