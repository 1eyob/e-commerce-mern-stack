
import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
align-items:center;
background-color:#fcf5f5;
display:flex;
justify-content:center;
height:60vh;
flex-direction:column;

`
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;
`
const Desc = styled.div`
font-weight:300px;
font-size:24px;
margin-bottom:20px;
`

const InputContainer = styled.div`
width:50%;
height:40px;
display:flex;
justify-content: space-between;
background-color:white;
border:1px solid lightgrey;
`
const Input = styled.input`
flex:8;
border:none;
padding-left:20px;
`
const Button = styled.button`
flex:1;
cursor:pointer;
transition: all 0.5s ease;
border:none;
background-color:teal;
color:white;

`
const NewsLetter = () => {
    return (
       <Container>
           <Title>NewsLetter</Title>
           <Desc>Get Timely updates from your favorite products.</Desc>
           <InputContainer>
           <Input placeholder='your Email'/>
           <Button>
           <Send/>
           </Button>
           </InputContainer>
       </Container>
    )
}

export default NewsLetter
