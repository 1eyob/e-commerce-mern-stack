import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Telegram,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 600;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  padding: 0px;
  margin: 0px;
  flex-wrap: wrap;
  list-style: none;
  display: flex;
`;
const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-weight: 600;
`;
const Right = styled.div`
  flex: 1;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: 600;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          Whereas e-business refers to all aspects of operating an online
          business, ecommerce refers specifically to the transaction of goods
          and services. ... Since then, ecommerce has evolved to make products
          easier to discover
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Laptops</ListItems>
          <ListItems>Cellphones</ListItems>
          <ListItems>Routers</ListItems>
          <ListItems>My account</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>Wish List</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>Terms</ListItems>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <Room style={{ marginRight: "10px" }} /> Bole friendship building 6th
          floor
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "10px" }} /> +251935718188
        </ContactItem>
        <ContactItem>
          {" "}
          <MailOutline style={{ marginRight: "10px" }} /> eyobbirhanu@lama.dev
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
