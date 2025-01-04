import React from 'react'
import styled from 'styled-components'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import { Avatar } from '@mui/material';
import { DownloadRounded } from '@mui/icons-material';
import FileSaver from 'file-saver';

const Card = styled.div`
    position: relative; 
    display: flex; 
    border-radius: 20px;
    background: ${({ theme }) => theme.card};
    box-shadow: 1px 2px 40px 8px ${({theme}) => theme.black + 60};
    cursor: pointer;
    gap: 10px;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 1px 2px 40px 8px ${({theme}) => theme.black + 80};
        scale: 1.05;
    }

    &:nth-child(7n + 1) {
        grid-column: auto/span 2;
            grid-row: auto/span 2;
    }
`; 

const HoverOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: start;
    gap: 2px;
    justify-content: end;
    flex-direction: column;
    backdrop-filter: blur(2px);
    background: rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    opacity: 0;
    padding: 16px;
    transition: opacity 0.3s ease;
    color: ${({ theme }) => theme.white};

    ${Card}:hover & {
      opacity: 1;
    }
`;
const Prompt = styled.div`
    font-weight: 400;
    font-size: 15px;
    color: ${({ theme }) => theme.white};
`;
const Author = styled.div`
    font-weight: 600;
    font-size: 14px;
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${({ theme }) => theme.white};
`;

function ImageCard({item}) {
  return (
    <Card>
        <LazyLoadImage 
            width="100%"
            src='https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=384&q=75' />
        <HoverOverlay>
            <Prompt> {item?.propt} </Prompt>
            <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                
            <Author>
                <Avatar style={{ width: "32px", height: "32px"}} > {item?.author[0]} </Avatar>
                {item?.author} 
            </Author>
            
            <DownloadRounded onClick={()=>FileSaver.saveAs(item?.photo, "download.jpg")}></DownloadRounded>
            </div>
        </HoverOverlay>
    </Card>
  )
}

export default ImageCard