import React, { useState } from "react";
import styled from "styled-components";
import { corPrimaria, paddingTopPadrao } from "../UI/variaveis";
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../../data/menuData';
import x from '../../assets/images/x.png';
import hamburguer from '../../assets/images/hamburguer.png';
import { Texto } from "../UI";

const StyledMenu = styled.div``;

const Logo = styled.img`
    height: 2.5em;
    margin-bottom: 5em;
`;

const NavBar = styled.nav`
    padding-top: ${paddingTopPadrao};
    background-color: ${({ theme }) => theme.menu};
    height: 100vh;
    width: 50%;
    color: ${({ theme }) => theme.text};
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    
    z-index: 1000;
    
    
    position: fixed;
    
    
    margin-top: 5em;
    right: 100%;
    transition: 0.5s;

    @media (min-width: 1300px){
        position: relative;
        margin-top: 0;

        width: 20em;

        right: 0;
    }

    &.active{
        right: 50%;
    }
`;

const MenuBars = styled.div`
`;

const MenuBarsTop = styled.div`
    display: none;
    width: 100vh;
    background-color: ${({ theme }) => theme.menu};
`;



const MenuItens = styled.ul`
    .bars{
        display: none;
    }

    paddingtop: ${paddingTopPadrao};

`;
const MenuItem = styled.li`
    list-style: none; 
    display: flex;
    justify-content: start;
    align-items: center;

    a{
        color:${({ theme }) => theme.text};
        padding: 1em;
        font-size: 1.1em;
        font-weight: bold;
        text-transform: uppercase;
    }

    a:hover{
        color: ${corPrimaria};
    }

    span{
        padding-left: .7em;
    }
    

`;

const Sociais = styled.ul`
    display: flex;
    padding-left: .6em;
    padding-top: ${paddingTopPadrao};

    .redesSociais{
        padding: .5em;
    }
`;

const TextoMenu = styled.p`
    font-weight: 500;
    font-size: 1em;
    padding: 1.1em;
`;

const SetNavbar = styled.div`
    background-color: ${({ theme }) => theme.menu};
    width: 100%;
    position: fixed;
    height: 5em;
    z-index: 1000;
    padding: 2em;

    button{
        cursor: pointer;
        img{
            width: 2em;
        }
    }

    @media (min-width: 1300px){
        display: none;
    }
`;


export default function Menu() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (

        <StyledMenu>
            <SetNavbar>
                <button onClick={showSidebar}>
                    <img src={sidebar ? `${x}` : `${hamburguer}`} />
                </button>
            </SetNavbar>


            <NavBar className={sidebar ? 'active' : ''}>
                <Logo src={logo} alt="logo Caique Nerivan" />
                <MenuItens>
                    <MenuItem className="bars">
                        <MenuBars>
                            <Link to="#">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </MenuBars>
                    </MenuItem>
                    {SidebarData.map((item, index) => {
                        return (
                            <MenuItem key={index} >
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </MenuItem>
                        );
                    })}
                    <Sociais>
                        <MenuItem>
                            <a href="https://www.instagram.com/craquenerivan/" target="_blank" className="redesSociais" alt="intagram do Caique Nerivan">
                                <FaIcons.FaInstagram />
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="https://www.linkedin.com/in/caiquenerivan/" target="_blank" className="redesSociais" alt="linkedin do Caique Nerivan">
                                <FaIcons.FaLinkedin />
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="https://www.youtube.com/channel/UCgh4q2wd2vz2_mw5Z3-nDyg" target="_blank" className="redesSociais" alt="youtube do Caique Nerivan">
                                <FaIcons.FaYoutube />
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="https://www.behance.net/caiquenerivan" target="_blank" className="redesSociais" alt="behance do Caique Nerivan">
                                <FaIcons.FaBehance />
                            </a>
                        </MenuItem>
                    </Sociais>
                    <TextoMenu>
                        Site criado por Caique Nerivan
                    </TextoMenu>
                </MenuItens>
            </NavBar>
        </StyledMenu>

    );
}