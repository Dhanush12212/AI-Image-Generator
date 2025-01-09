import React from 'react' 
import styled from 'styled-components'
import TextInput from './TextInput';
import ButtonComponent from './ButtonComponent';
import { AutoAwesome, CreateRounded } from '@mui/icons-material';

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;

const Top = styled.div` 
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.div` 
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Actions = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
`;
  

function GenerateImageForm() {
  return (
    <Form>
        <Top>
            <Title> Generate Image with Prompt </Title>
            <Desc>Write your prompt according to the image you want to generate</Desc>
        </Top>
        <Body>
            <TextInput 
              label="Author"
              placeholder="Enter your name.."
            />
            <TextInput 
              label="Prompt"
              placeholder="Write a detailed prompt about the image . ."
              rows= "8"
              textArea
            />
            <span style={{fontSize: "13px", textAlign: "center"}}> ▸▸▸ You can Post the image to the Community ◂◂◂</span>
        </Body>
        <Actions>
          
          <ButtonComponent
              text="Generate Image"
              leftIcon={<AutoAwesome />} 
              flex  
          />
          <ButtonComponent
              text="Post Image"
              leftIcon={<CreateRounded />}
              type="secondary"
              flex
          />
        </Actions>
    </Form>
  )
}

export default GenerateImageForm