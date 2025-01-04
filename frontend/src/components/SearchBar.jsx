import React from 'react'
import styled from 'styled-components'
import { SearchOutlined } from '@mui/icons-material'

const SearchBarContainer = styled.div`
    max-width: 550px;
    width: 90%;
    display: flex; 
    gap: 7px;
    padding: 12px 16px;
    border: 1px solid ${({theme}) => theme.text_secondary+60};
    border-radius: 80px;
    align-items: center;
    cursor: pointer;
`;

function SearchBar() {
  return (
    <SearchBarContainer>
        <SearchOutlined></SearchOutlined>
        <input style={{
            width: "100%",
            outline: "none",
            backgroundColor: "transparent",
            border: "none",   
            color: "inherit",
            fontSize: "16px"
        }} />
    </SearchBarContainer>
  )
}

export default SearchBar