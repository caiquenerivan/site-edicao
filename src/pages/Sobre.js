import React from "react";
import styled from "styled-components";
import { Box, Titulo, Texto, Content, ContentBox } from "../Components/UI";
import eu from "../assets/images/eu.jpg"


const ImageBox = styled.div`
    height: 20em;
    width: 20em;
    margin-top: 2em;
`;

const Imagem = styled.img`
    border-radius: 50%;
    height: 100%;
    width: 100%;
`;



export default function Sobre() {
    return (
        <Box>
            <Titulo>Sobre</Titulo>
            <ContentBox>
                <Content>
                    <Texto>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Texto>
                </Content>
                <ImageBox>
                    <Imagem src={eu} />
                </ImageBox>
            </ContentBox>
        </Box>
    );
}