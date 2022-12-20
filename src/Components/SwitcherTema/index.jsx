import React from "react";
import lightmode from "../../assets/images/lightmode.svg";
import darkmode from "../../assets/images/darkmode.svg";
import toggleOff from "../../assets/images/toggle_off.png";
import toggleOn from "../../assets/images/toggle_on.png";
import { Icone } from "../UI";


const claro = <Icone src={darkmode} alt="Tema Claro"/>;
const escuro = <Icone src={lightmode} alt="Tema Escuro" />;

export default ({ tema }) => (tema ? escuro : claro);