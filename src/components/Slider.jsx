import React, { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {sliderItems} from '../data';
import { useHistory } from 'react-router';

const Slider = () => {

    const history = useHistory()
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick("left")}>
                <KeyboardArrowLeftIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex} >
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                            <InfoContainer key={item.id}>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button onClick={() => history.push("/product")}>SHOP NOW</Button>
                            </InfoContainer>
                        
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick("right")}>
                <KeyboardArrowRightIcon />
            </Arrow>
        </Container>
    )
}

export default Slider

const Container = styled.div`
    width: 100%;
    height: calc(100vh - (80px + 30px));
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 70px;
    height: 70px;
    background: #e6e6e6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "90px"};
    right: ${props => props.direction === "right" && "90px"};
    margin: auto;
    opacity: 0.7;
    z-index : 2;

    > .MuiSvgIcon-root {
        font-size: 48px;
    }
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 0.66s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    user-select: none;
`;

const Slide = styled.div`
    width: 100vw;
    height: calc(100vh - (80px + 30px));
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 78px;
    color: #333333;
`;

const Desc = styled.p`
    margin: 50px 0;
    width: 550px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    line-height: 1.5;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    color: #3b3b3b;
    cursor: pointer;
    border: 2px solid #3b3b3b;
    background-color: transparent;

`;