import React from 'react'
import styled from 'styled-components' 
import GenerateImageForm from './GenerateImageForm';
import GenerateImageCard from './GenerateImageCard';

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.bg};
  gap: 20px;
  @media (max-width: 768px) { 
    padding: 6px 10px;
  }
`;
 
const Wrapper = styled.div`  
  width: 100%;
  height: fit-content; 
  max-width: 1200px;
  gap: 8%;
  display: flex;
  justify-content: center; 
 
  @media (max-width: 768px) {
    flex-direction: column;
  }
`; 

function CreatePost() {
  const [post, setPost] = useState({
    author: "",
    prompt: "",
    photo: "",
  })
  const [generateImageLoading, setgenerateImageLoading] = useState(false)
  const [createPostLoading, setcreatePostLoading] = useState(false)
  return (
    <Container> 
      <Wrapper>
        <GenerateImageForm/>
        <GenerateImageCard src={post?.photo} loading={generateImageLoading}/>
      </Wrapper>
    </Container>
  )
}

export default CreatePost

 