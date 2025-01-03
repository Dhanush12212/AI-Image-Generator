import React from 'react'
import styled from 'styled-components';
import Button from "./ButtonComponent";
import {AddRounded, ExploreRounded} from  "@mui/icons-material"
import {useNavigate, useLocation} from "react-router-dom";

const Container = styled.div`  
  flex: 1;
  background-color: ${({theme}) => theme.Navbar };
  color: ${({theme}) => theme.text_primary};
  font-weight: bold;
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  @media only screen and (max-width: 600px) { 
    padding: 10px 12px;
  }
`;

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <Container>
        GenAI 
        {
          path[1] === 'post' ? 
          (
          <Button 
          onClick={() => navigate('/')}      
          text="Explore posts" 
          leftIcon={<ExploreRounded style={{fontSize:"18px"}} /> }
          type="secondary"
          /> ) 
          :
          (
          <Button 
          onClick={() => navigate('/post')}      
          text="CreatePost" 
          leftIcon={<AddRounded style={{fontSize:"18px"}} /> } /> )
          }
    </Container>
  );
};

export default Navbar