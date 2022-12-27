import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const CategoryItem = ({item}) => {

    const history = useHistory();

    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button onClick={() => history.push("/product")}>
                    SHOP NOW
                </Button>
            </Info>
        </Container>
    )
}

export default CategoryItem

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    color: #f0f0f0;
    font-family: 'Permanent Marker', cursive;
    font-weight: 600;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    padding: 12px;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;
