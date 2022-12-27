import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const ProductList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Yellow</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                    </Select>

                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Sort By:</FilterText>
                    <Select>
                        <Option selected>Recommended</Option>
                        <Option>What's New</Option>
                        <Option>Popularity</Option>
                        <Option>Better Discount</Option>
                        <Option>Better Discount</Option>
                        <Option>Price: High to Low</Option>
                        <Option>Price: Low to High</Option>
                        <Option>Customer Rating</Option>
                    </Select>
                </Filter>

            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    cursor: pointer;
    margin-right: 20px;
    padding: 10px 5px;
    outline: none;
    border: 0.5 solid lightgray;
    border-color: #dadada;
    color: #313131;
`;

const Option = styled.option`
    padding: 5px;
`;