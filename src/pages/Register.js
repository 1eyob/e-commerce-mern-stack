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
width:40%;
padding:20px;
background-color:white;
`;
const Form = styled.form`
display:flex;
flex-wrap:wrap;


`;
const Title = styled.h1`
font-size:24px;
fot-weight:300;
`;
const Input = styled.input`
font-weight:600;
margin: 20px 10px 0px 0px; 
mid-width:40%;
flex:1;
padding:10px;

`;
const Agreement = styled.span`
font-weight:600;
margin: 20px 0px;
font-size:12px;
`;
const Button = styled.button`
padding:15px 20px;
border:none;
width:40%;
margin-top:10px;
background-color:teal;
color:white;
cursor:pointer;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              By creating an account, I concent to the processing of my personal
              data in accordance with with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
