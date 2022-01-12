import styled from "styled-components"
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import AcerPredator from "../assets/AcerPredator.jpg";
import { Add, Remove } from "@material-ui/icons";
const Container = styled.div`


`
const Wrapper = styled.div`
display:flex;
padding : 50px;

`
const ImageContainer = styled.div`
flex:1;

`
const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;

`
const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;

`
const Title = styled.h1`
font-weight: 200
`
const Desc = styled.p`
margin: 20px 0px;
font-weight:600
`
const Price = styled.span`
font-weight:100;
font-size:3
0px;
`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
width:50%;
margin:30px 0px;
`
const Filter = styled.div`
display:flex;
align-items:center;
`
const FilterTitle = styled.span`
font-weight:200;
font-size:20px
`
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin: 0px 5px;
cursor:pointer;

`
const FilterSize = styled.select`
margin- left :10px;
padding: 5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
display:flex;
width:50%;
align-items:center;
justify-content:space-between;

`
const AmountContainer = styled.div`
display:flex;
font-weight:700;
align-items:center;


`
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;

`
const Button = styled.button`
padding:15px;
cursor:pointer;
border: 2px solid teal;
background-color:white;
font-weight:700;
`

const Product = () => {
    return (
        <Container>
          <Navbar/>
        <Announcements/>   
        <Wrapper>
          <ImageContainer>
              <Image src={AcerPredator}/>
          </ImageContainer>
        <InfoContainer>
            <Title>Gaming Laptop</Title>
            <Desc>
            Whereas e-business refers to all aspects of operating an online business, 
            e-commerce refers specifically to the transaction of goods and services. ... 
            Since then, e-commerce has evolved to make  products easier to discover
            </Desc>
            <Price>$ 800</Price>
            <FilterContainer>
                 <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color ="black"></FilterColor>
                    <FilterColor color ="darkblue"></FilterColor>
                    <FilterColor color ="grey"></FilterColor>
                 </Filter>
                 
                 <Filter>
                 <FilterTitle>Size</FilterTitle>
                 <FilterSize>

                       <FilterSizeOption>XS</FilterSizeOption>
                       <FilterSizeOption>S</FilterSizeOption>
                       <FilterSizeOption>M</FilterSizeOption>
                       <FilterSizeOption>L</FilterSizeOption>
                       <FilterSizeOption>XL</FilterSizeOption>


                 </FilterSize>
                 </Filter>



            </FilterContainer>
            <AddContainer>
                <AmountContainer>
           <Remove/>
           <Amount>1</Amount>
           <Add/>

                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>

        </Wrapper>
        <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Product
