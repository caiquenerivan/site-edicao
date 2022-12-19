import React from "react";
import lightmode from "../../assets/images/lightmode.svg";
import darkmode from "../../assets/images/darkmode.svg";
import { Icone } from "../UI";

const claro = <Icone src={lightmode} alt="Tema Claro" />;
const escuro = <Icone src={darkmode} alt="Tema Escuro" />;

export default ({ tema }) => (tema ? escuro : claro);