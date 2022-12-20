import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'home'
    },
    {
        title: 'Skills',
        path: '/skills',
        icon: <FaIcons.FaPaintBrush/>,
        cName: 'skills'
    },
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <FaIcons.FaPhotoVideo/>,
        cName: 'portfolio'
    },
    {
        title: 'Sobre',
        path: '/sobre',
        icon: <IoIcons.IoMdPerson/>,
        cName: 'sobre'
    },
    {
        title: 'Contato',
        path: '/contato',
        icon: <AiIcons.AiOutlineContacts/>,
        cName: 'contato'
    }
]
