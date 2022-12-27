import React, { useRef } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useHistory } from 'react-router';

const Navbar = () => {
    
    const searchRef = useRef();
    const history = useHistory();

    const handleFocusIn = () => {
        searchRef.current.style.backgroundColor = "white";
        searchRef.current.style.border = "0.5px solid #eeeeee";
    }
    
    const handleFocusOut = () => {
        searchRef.current.style.backgroundColor = "#ececec";
        searchRef.current.style.border = "none";
    }

    return (
        <Container>
            <Wrapper>

                <Left>
                    <Language>EN</Language>
                    <SearchContainer ref={searchRef}>
                        <Input onFocus={handleFocusIn} onBlur={handleFocusOut} placeholder="Search for products, brands and more"/>
                        <SearchIcon />
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo onClick={() => history.push("/")}>fareeha</Logo>
                </Center>

                <Right>
                    <MenuItem onClick={() => history.push("/login")}>sign in</MenuItem>
                    <MenuItem onClick={() => history.push("/register")}>register</MenuItem>
                    <MenuItem>
                    <Badge onClick={() => history.push("/cart")} badgeContent={4} color="success">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    height: 80px;
    background-color: white;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 2px 0 rgb(148 150 159 / 30%);

    position: sticky;
    top: -1px;
    z-index: 1000;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    color: #383838;
    display: flex;
    justify-content: space-between;
    flex: 1;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 2px;
    background-color: #ececec;
    margin-left: 25px;
    padding: 2px 7px;
    width: 80%;
    height: 30px;

    > .MuiSvgIcon-root {
        width: 17px;
        margin-right: 5px;
        cursor: pointer;
        color: gray;
    }
`;

const Input = styled.input`
    background: transparent;
    outline: none;
    border: none;
    padding: 0 5px;
    flex-grow: 1;

    > :focus ${SearchContainer} {
        background-color: white;
        opacity: 0;
    }

    ::placeholder {
        color: #727272;
        font-weight: 300;
    }
`;

const Center = styled.div`
    flex: 1;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    color: #2bc7bf;
    /* color: blueviolet; */
    text-transform: uppercase;
    font-family: 'Permanent Marker', cursive;
    font-size: 43px;
    cursor: pointer;
    user-select: none;
    transform: rotate(-5deg);
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    > :last-child {
        margin-right: 20px;
        padding: 8px;
    }
    
    > :nth-child(2) {
        background-color: #2bc7bf;
        color: #f3f3f3;
        padding: 5px 8px;
        transition: all 0.16s ease-out;
        
        :hover {
            opacity: 0.8;
        }
    }
    
    > :first-child {
        padding: 5px 8px;
        border: 0.5px solid #2bc7bf;
        background: linear-gradient(to right,#2bc7bf 50%, white 50%);
        background-position: right bottom;
        background-size: 200% 100%;
        transition: all 0.4s ease-out;

        :hover {
            color: #f3f3f3;
            background-position: left bottom;
        }
    }
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;
    margin-left: 25px;
    user-select: none;
`;