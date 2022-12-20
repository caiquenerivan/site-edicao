import React from "react";
import styled from "styled-components";
import CardSkills from "../Components/CardSkills";
import { Box, Titulo } from "../Components/UI";

export default function Skills() {
    return (
        <Box>
            <Titulo>Skills</Titulo>

            <CardSkills/>

        </Box>
    );
}