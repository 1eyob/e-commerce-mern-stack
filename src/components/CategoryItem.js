import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
const Container = styled.div`
flex:1;
height:70vh;
margin:3px;
position:relative;
`
const Image = styled.img `
width:100%;
height:100%;
object-fit:cover;

` 
const Info  = styled.div`
position:absolute;
top:0;
bottom:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;


`
const Title = styled.h1 `
color:white;
margin-bottom:20px;
`
const Button = styled.button`
border:none;
padding 20px;
background-color: white;
color:grey;
cursor:pointer;
font-weight: 600



`
const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to = {`/products/${item.cat}`}>
            <Image src={item.img}/>
             <Info>
                 <Title>{item.title}</Title>
                 <Button>SHOP NOW</Button>
             </Info>
            </Link>
             
        </Container>
    )
}

export default CategoryItem
