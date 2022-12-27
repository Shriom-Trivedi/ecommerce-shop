import React from 'react';
import styled from 'styled-components';

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <div style={{display:'flex'}}>
                        <Input style={{flexGrow: '1'}} placeholder='name' />
                        <Input style={{flexGrow: '1'}} placeholder='last name' />
                    </div>
                    <Input placeholder='username' />
                    <Input placeholder='email' />
                    <Input placeholder='password' />
                    <Input placeholder='confirm password' />
                    <Agreement>
                        By creating an account, I consent to the process of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        90deg, 
        rgba(34,193,195,1) 0%, 
        rgba(45,253,156,1) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    `;
const Wrapper = styled.div`
    width: 30%;
    height: 70%;
    padding: 20px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-top: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

const Input = styled.input`
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    width: 100%;
    background: linear-gradient(
        90deg, 
        rgba(34,193,195,1) 0%, 
        rgba(45,253,156,1) 100%
    );
    color: white;
    cursor: pointer;
`;