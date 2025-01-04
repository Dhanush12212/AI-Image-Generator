import React from 'react'
import styled from 'styled-components' 

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme}) => theme.bg};
  gap: 20px;
  @media (max-width: 768px) { 
    padding: 6px 10px;
  }
`;

const Headline = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({theme}) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
  font-size: 22px;
  }
  `;
  
const Span = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: ${({theme}) => theme.primary}; 
`;

function Home() {
  return (
    <Container>  
      <Headline>
        Explore all posts here! 
        <Span>✦ Generated with AI ✦</Span>
      </Headline>
    </Container>
  )
}

export default Home