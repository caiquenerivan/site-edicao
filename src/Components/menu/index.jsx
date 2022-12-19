import React from "react";
import styled from "styled-components";

export const StyledMenu = styled.div`
    background-color: ${({theme}) => theme.menu};
    justify-content: space-around;
    width: 25%;
    color: ${({theme}) => theme.text};
    height: 100vh;
`;


export default function Menu(){

    return(

        <StyledMenu>
            asdc
        </StyledMenu>
            
    );
}