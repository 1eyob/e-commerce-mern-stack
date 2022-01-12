import React from "react";
import styled from "styled-components";
import laptop2 from '../assets/laptop2.jpg';
const Container = styled.div`
width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.5),
rgba(255,255,255,0.5)
),



url(${laptop2}) center;
background-size:cover;
display:flex;
align-items:center;
justify-content:center;
`;
const Wrapper = styled.div`
width:25%;
padding:20px;
background-color:white;
`;
const Form = styled.form`
display:flex;
flex-direction:column;


`;
const Title = styled.h1`
font-size:24px;
fot-weight:300;
`;
const Input = styled.input`
font-weight:600;
margin:10px  0px; 
mid-width:40%;
flex:1;
padding:10px;

`;

const Button = styled.button`
padding:15px 20px;
border:none;
width:40%;
margin-top:10px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
`;
const Link = styled.a`
text-decoration:underline;
margin: 5px 0px;
font-size:12px;
font-weight:600;
cursor:pointer;

`
const Login = () => {
  return <Container>

<Wrapper>
        <Form>
          <Title>LOGIN</Title>
          <Form>
          
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER PASSWORD</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </Form>
      </Wrapper>
  </Container>;
};

export default Login;
