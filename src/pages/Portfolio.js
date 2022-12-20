import React from "react";
import CardPortfolio from "../Components/CardPortfolio";
import { Box, Titulo, ContentBox } from "../Components/UI";


export default function Portfolio() {
    return (
        <Box>
            <Titulo>Portfolio</Titulo>
            <ContentBox>
                <CardPortfolio/>
            </ContentBox>
        </Box>
    );
}