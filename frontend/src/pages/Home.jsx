import React from 'react'
import styled from 'styled-components' 
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/ImageCard';

const Container = styled.div` 
  overflow-y: scroll;
  padding: 30px 30px;
  padding-bottom: 40px;
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

  @media (max-width: 600px) {
  font-size: 20px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: center; 
  padding: 37px 0px;
`;

const CardWrapper = styled.div` 
  gap: 20px;
  display: grid; 

  @media (min-width: 1200px) { 
    grid-template-columns: repeat(4, 1fr);
  }
    
  @media (min-width: 640px) and (max-width: 1199px) { 
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 639px) { 
    grid-template-columns: repeat(2, 1fr);
  }
`;

function Home() {
  const item={
    photo: 'https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=384&q=75',
    prompt: "Photo",
    author: "Dhanush",
  }
  return (
    <Container>  
      <Headline>
        Explore all posts here! 
        <Span>✦ Generated with AI ✦</Span>
      </Headline>
      <SearchBar/>
      <Wrapper> 
        <CardWrapper> 
          <ImageCard item={item}  />
          <ImageCard item={item}  />
          <ImageCard item={item}  />
          <ImageCard item={item}  />
          <ImageCard item={item}  />
          <ImageCard item={item}  />
          <ImageCard item={item}  />
          <ImageCard item={item}  />
          <ImageCard item={item}  />
          <ImageCard item={item}  />
        </CardWrapper>
      </Wrapper>
      <span>┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈</span>
    </Container>
  )
}

export default Home