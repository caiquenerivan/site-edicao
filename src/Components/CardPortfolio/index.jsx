import React from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import styled from "styled-components";
import { portfolioData } from "../../data/portfolioData";
import { corPrimaria } from "../UI/variaveis";


const PortfolioSection = styled.div`
    max-width: 1200px;
    .slick-dots li.slick-active button:before {
        color:${corPrimaria} !important;
    }
    .slick-prev:before,
    .slick-next:before {
        color: ${corPrimaria};
    }
`;

const PortfolioContent = styled.div`
    max-width: 50%;
    width: 50%;

    padding-right: 3em;
`;

const ItemPortfolio = styled.div`
    display: flex;
    padding: 3em;
`;

const DescProjeto = styled.p`
    font-size: 1.4em;
    font-weight: 300;
    color: ${({ theme }) => theme.text};
`;

const VideoBox = styled.div`
    border: 5px solid ${corPrimaria};
    width: 50%;
`;

const TituloDesc = styled.h2`
    color: ${corPrimaria};
    text-transform: uppercase;
    margin-bottom: 2em;
`;


export default function CardPortfolio() {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <PortfolioSection>
            <Slider {...settings} >
                {portfolioData.map((item) => (
                    <div>

                        <ItemPortfolio >
                            <PortfolioContent>
                                <TituloDesc>
                                    {item.titulo}
                                </TituloDesc>
                                <DescProjeto>
                                    {item.descricao}
                                </DescProjeto>
                            </PortfolioContent>
                            <VideoBox>
                                <ReactPlayer
                                    url={item.video}
                                    width='100%'
                                    controls
                                />
                            </VideoBox>
                        </ItemPortfolio>
                    </div>
                ))}

            </Slider>
        </PortfolioSection>

    );

}