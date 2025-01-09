import { CircularProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    padding: 16px;
    display: flex;
    gap: 16px;
    flex-direction: column;
    border: 2px dashed ${({ theme }) => theme.yellow};
    color: ${({ theme }) => theme.arrow + 80};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`; 

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.black + 50};
`;

function GenerateImageCard({ src, loading }) {
  return (
    <Container> 
      {loading ? ( 
        <> 
          <CircularProgress style={{ color: 'inherit', width: '24px', height: '24px' }} />
          Generating your image ...
        </> 
      ) : (
        src ? (
          <Image src={src} alt="Generated visual representation" />
        ) : (
          <>Write a prompt to generate an image</>
        )
      )}
    </Container>
  );
}

export default GenerateImageCard;
