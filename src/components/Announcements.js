import styled from "styled-components"

const Container = styled.div`
height:30px;
background-color:teal;
align-items-center;
display:flex;
justify-content:center;
font:size:14px;
color:white;
font-weight:500

`

const Announcements = () => {
    return (
        <Container>
  Super deal! Free shipping on orders Over $50
        </Container>
    )
}

export default Announcements
