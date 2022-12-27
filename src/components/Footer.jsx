import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { MailOutline, Phone, Room } from '@material-ui/icons';
import { useHistory } from 'react-router';

const Footer = () => {

    const history = useHistory();

    return (
        <Container>
            <Left>
                <Logo onClick={() => history.push("/")}>Fareeha</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Reprehenderit nemo voluptas delectus, suscipit ratione quidem 
                    architecto esse fugit sunt. Esse facilis odit quaerat quisquam 
                    ipsam dolores cum nihil animi nesciunt.
                </Desc>
                <SocialContainer>
                    <SocialIcon bgColor="#3b5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon bgColor="#E4405f">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon bgColor="#E60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem onClick={() => history.push("/")} >Home</ListItem>
                    <ListItem onClick={() => history.push("/cart")} >Cart</ListItem>
                    <ListItem onClick={() => history.push("/productList")} >Man Fashion</ListItem>
                    <ListItem onClick={() => history.push("/productList")} >Woman Fashion</ListItem>
                    <ListItem onClick={() => history.push("/productList")} >Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Career</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contacts</Title>
                <ContactItem><Room/> 123 Green Park, South ABC 33699</ContactItem>
                <ContactItem><Phone /> +91 9876543210</ContactItem>
                <ContactItem><MailOutline /> contact@teamshri.com</ContactItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    display: flex;
    height: 40vh;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    color: #2bc7bf;
    text-transform: uppercase;
    font-family: 'Permanent Marker', cursive;
    font-size: 43px;
    cursor: pointer;
    user-select: none;
`;

const Desc = styled.p`
    margin: 20px 0;
    width: 85%;
    line-height: 1.3rem;
    text-align: justify;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 40px 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    list-style: none;
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    /* background-color: blueviolet; */
    padding: 40px 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
        margin-right: 10px;
    }
`;

const Payment = styled.img`
    width: 50%;
`;