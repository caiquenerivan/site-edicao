import React from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import styled from "styled-components";
import { portfolioData } from "../../data/portfolioData";
import { corPrimaria } from "../UI/variaveis";


const PortfolioSection = styled.div`
    max-width: 1200px;
    width: 100%;

    align-items: center;
    .slick-dots li.slick-active button:before {
        color:${corPrimaria} !important;
    }
    .slick-prev:before,
    .slick-next:before {
        color: ${corPrimaria};
    }

`;

const PortfolioContent = styled.div`
    width: 100%;

    @media (min-width: 1300px){
        max-width: 50%;
        width: 50%
        padding-right: 3em;
    }

    margin: 0;


`;

const ItemPortfolio = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    
    @media (min-width: 1300px){
        padding: 3em;
        flex-direction: row;

    }
`;

const DescProjeto = styled.p`
    font-size: 1.4em;
    font-weight: 300;
    color: ${({ theme }) => theme.text};
    text-align: center;
`;

const VideoBox = styled.div`
    border: 5px solid ${corPrimaria};
    width: 100%;
    margin: 1em 0;

    @media (min-width: 1300px){
        max-width: 50%;
        margin: 1em;
    }
`;

const Width = styled.div`

`;

const TituloDesc = styled.h2`
    color: ${corPrimaria};
    text-transform: uppercase;
    margin: 1em 0;
    text-align: center;

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
            <Slider {...settings} className="slider">
                {portfolioData.map((item) => (
                    <Width>

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
                    </Width>
                ))}

            </Slider>
        </PortfolioSection>

    );

}