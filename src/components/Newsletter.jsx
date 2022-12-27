import React from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favourite products.</Description>
            <InputContainer>
                <Input placeholder='Your Email' />
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter;

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    color: #252525;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    border: 1px solid #f0f0f0;
`;

const Input = styled.input`
    flex: 13;
    outline: none;
    border: none;
    padding: 0 15px;
    background-color:rgb(255, 255, 255);

    ::placeholder {
        color: #a0a0a0;
    }
`;

const Button = styled.button`
    border: none;
    cursor: pointer;
    flex: 1;
    background-color: #2bc7bf;
    color: white;

    :active {
        opacity: 0.8;
    }
`;
