import React from 'react'
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useHistory } from 'react-router';

const ProductItem = ({item}) => {

    const history = useHistory();

    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon onClick={() => history.push('/cart')} />
                </Icon>
                <Icon>
                    <SearchOutlinedIcon onClick={() => history.push('/product')} />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItem;

const Info = styled.div`
    opacity: 0;
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
    transition: all 0.5s ease;
`;

const Container = styled.div`
    flex: 1;
    height: 350px;
    min-width: 300px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #f5fbfd;

    &:hover ${Info} {
        opacity: 1;
    }
`;

const Circle = styled.span`
    width: 200;
    height: 200px;
    border-radius: 50%;
    background-color: black;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
`;

const Icon = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;