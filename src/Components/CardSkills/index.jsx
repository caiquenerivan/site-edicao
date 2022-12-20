import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { SubTitulo } from "../UI";
import { corPrimaria } from "../UI/variaveis";
import { dataSkills } from "../../data/skillsData";



import Slider from "react-slick";


const Descricao = styled.p`
    text-align: center;
    font-size: 1.7em;
    color: ${({ theme }) => theme.text};
    max-width: 100%;
    margin-top: 1em;
`;

const Card = styled.div`
    font-size: .8em;
    max-width: 384px;
    height: 541px;
    border: 5px solid ${corPrimaria};
    text-transform: uppercase;
    margin: 50px 0;
    
    .borda{
        border-bottom: 5px solid ${corPrimaria};
    }
`;

const SubCard = styled.div`
    padding: 1rem;
    margin-top: 2rem;

    .skillsTitle{
        font-size: 3em;
        color: ${corPrimaria};
    }
`;


const CarouselSkillsSection = styled.div`
    .slick-dots li.slick-active button:before {
        color:#DB8080 !important;
    }
    .slick-prev:before,
    .slick-next:before {
        color: ${corPrimaria};
    }
    max-width: 1200px;
`;

export default function CardSkills() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ],

    };

    return (

        <CarouselSkillsSection>


            <Slider {...settings} >
                {dataSkills.map((item) => (
                    <Card>
                        <ReactPlayer
                            url={item.video}
                            width='100%'
                            height='216px'
                            className='borda'
                            controls
                        />
                        <SubCard>
                            <SubTitulo className="skillsTitle">{item.titulo}</SubTitulo>
                            <Descricao>{item.descricao}</Descricao>
                        </SubCard>
                    </Card>
                ))}

            </Slider>



        </CarouselSkillsSection>
    );
}

/*



                <Card>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=JocAXINz-YE&ab_channel=KendrickLamar-Topic'
                        width='100%'
                        height='216px'
                        controls
                    />
                    <SubCard>
                        <SubTitulo>Exemplo 1</SubTitulo>
                        <Descricao>nsaflkgn alskngfa sngaskfn asfk lnagfsjknfa sandfgj klsn asfdnak ljsnasf dfas adsfasdfg</Descricao>
                    </SubCard>
                </Card>
                */