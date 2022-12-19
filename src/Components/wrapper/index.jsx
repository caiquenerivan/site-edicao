import React from "react";
import styled from "styled-components";
import Menu from "../menu";

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 2000px;
    margin: 0px;
    display: flex;
`;

export const ContentWrapper = styled.div`
    background-color: ${({theme}) => theme.body};
    display: flex;
    justify-content: space-around;
    min-height: 100vh;
`;


export default function Wrapper(){

    return(
        <ContentWrapper>
            <StyledWrapper>

                <Menu>
                    
                </Menu>


            </StyledWrapper>
        </ContentWrapper>
            
    );
}