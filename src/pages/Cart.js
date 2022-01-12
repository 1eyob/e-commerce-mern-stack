import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import laptop2 from '../assets/laptop2.jpg';
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  cursor: pointer;
  font-weight: 600px;
  padding: 10px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  cursor: pointer;
  text-decoration: underline;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Info = styled.div`
  flex: 3;
 
`;
const Hr = styled.hr`
border:none;
background-color:#eee;
height:1px;
`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius:10px;
  padding:20px;
  height:50vh;
 
`;
const Product = styled.div`
display:flex;
justify-content:space-between;
`
const ProductDetail = styled.div`
flex:2;
display:flex;
`
const Image = styled.img`
width:200px;
`
const Details = styled.div`
padding:20px;
display:flex;
justify-content:space-around;
flex-direction:column;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
`
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};

`
const ProductSize = styled.span`
`
const PriceDetail = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
flex-direction:column;
`
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
` 
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
`
const ProductPrice = styled.div`
font-size:30px;
font-weight:300;
`
const SummaryTitle= styled.h1`
font-weight:200;
`
const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`
`
const SummaryItemPrice = styled.span`
`
const Button = styled.button`
width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600;

`
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>My Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>SHPPING LIST(2)</TopText>
            <TopText>YOUR WISHLIST(0)</TopText>
          </TopTexts>
          <TopButton type="filled"> CHECK OUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
            <ProductDetail>
              <Image src = {laptop2}/>
              <Details>
                <ProductName><b>Product:</b> ACER PREDATOR LAPTOP</ProductName>
                <ProductId><b>ID:</b> 345678908765</ProductId>
                <ProductColor color="black"></ProductColor>
                <ProductSize><b>SIZE:</b> 14.5</ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                   <Add/>
                   <ProductAmount>2</ProductAmount>
                   <Remove/>
              </ProductAmountContainer>
              <ProductPrice>$ 850</ProductPrice>
            </PriceDetail>
            </Product>
            <Hr/>
            <Product>
            <ProductDetail>
              <Image src = {laptop2}/>
              <Details>
                <ProductName><b>Product:</b> ACER PREDATOR LAPTOP</ProductName>
                <ProductId><b>ID:</b> 345678908765</ProductId>
                <ProductColor color="black"></ProductColor>
                <ProductSize><b>SIZE:</b> 14.5</ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                   <Add/>
                   <ProductAmount>2</ProductAmount>
                   <Remove/>
              </ProductAmountContainer>
              <ProductPrice>$ 850</ProductPrice>
            </PriceDetail>
            </Product>
          </Info>
          <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>
                SUBTOTAL
            </SummaryItemText>
            <SummaryItemPrice>
        $800
            </SummaryItemPrice>
            
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>
                Estimated Shipping
            </SummaryItemText>
            <SummaryItemPrice>
       $ 6.50
            </SummaryItemPrice>
            
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>
                Shipping Discount
            </SummaryItemText>
            <SummaryItemPrice>
         $ -6.50
            </SummaryItemPrice>
            
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>
                TOTAL
            </SummaryItemText>
            <SummaryItemPrice>
        $800
            </SummaryItemPrice>
            
          </SummaryItem>
          <Button>CHECKOUT NOW</Button>



          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
