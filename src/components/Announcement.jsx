import React from 'react';
import styled from 'styled-components';

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over Rs.500
        </Container>
    )
}

export default Announcement

const Container = styled.div`
    background: #2bc7bf;
    height: 30px;
    color: white;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`;