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
  top: 2em;
  right: 20px;
  background-color: ${({theme}) => theme.invert};
  border: 2px solid ${corPrimaria};
  border-radius: 50%;
  cursor: pointer;
  z-index: 1001;

  @media (min-width: 768px){
    top: 5em;
  }
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
  padding-top: 2em;

  @media (min-width: 1300px){
    font-size: 3.5em;
    padding-top: 0;
  }
  
  font-size: 2.5em;
  text-align: center;
  text-transform: uppercase;

  
`;

export const SubTitulo = styled.h2`
  color: ${({theme}) => theme.text};

  @media (min-width: 1300px){
    font-size: 3em;
  }

  font-size: 1.5em;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;

  
`;

export const TituloDiv = styled.div`

  @media (min-width: 1300px){
    margin-top: 0;
  }
  margin-top: 5em;
  display: flex;
  flex-direction: column;
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 1300px){
    width: 90vh;
    padding-top: 7em;
    flex-direction: row;
    justify-content: space-around;
  }

  flex-direction: column;
  width: 90%;
`;

export const Content = styled.div`
  @media (min-width: 1300px){
    width: 50%; 
  }

  display: flex;

`;

export const Texto = styled.p`
  font-weight: 500;
  font-size: 1.5em;
  padding-top: 1em;
  
  text-align:center;

  a{
    text-decoration: none;
    color: ${({theme}) => theme.text};
  }

  .menu{
    font-size: .1em;
  }
`;