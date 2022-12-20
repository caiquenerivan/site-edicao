import styled from "styled-components";
import { corPrimaria } from "./variaveis";


export const Icone = styled.img`
  height: 3em;
`;

export const IconeTema = styled(Icone)`
  filter: ${({ theme }) => theme.filter};
`;

export const BtnTema = styled.button`
  position: absolute;
  top: 5em;
  right: 20px;
  background-color: ${({theme}) => theme.invert};
  border: 2px solid ${corPrimaria};
  border-radius: 50%;
  cursor: pointer;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: ${({theme}) => theme.text};
  padding-top: 3em;
    
`;

export const Titulo = styled.h1`
  color: ${corPrimaria};
  font-size: 3.5em;
  text-align: center;
  text-transform: uppercase;

`;

export const SubTitulo = styled.h2`
  color: ${({theme}) => theme.text};
  font-size: 3em;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;

`;

export const TituloDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 7em;
  width: 90vh;
  justify-content: space-around;
`;

export const Content = styled.div`
  width: 50%;

`;

export const Texto = styled.p`
  font-weight: 500;
  font-size: 1.5em;
  padding-top: 1em;

  a{
    text-decoration: none;
    color: ${({theme}) => theme.text};
  }

  .menu{
    font-size: .1em;
  }
`;