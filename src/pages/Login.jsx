import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='Username' />
          <Input placeholder='Password' />
          <Button>LOGIN</Button>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <Link>FORGOT PASSWORD ?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </div>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(45, 253, 156, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  height: 50%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-top: 50px;
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

const Link = styled.span`
  font-size: 12px;
  margin-top: 5px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  width: 40%;
  border: none;
  padding: 15px 20px;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(45, 253, 156, 1) 100%
  );
  color: white;
  cursor: pointer;
`;
