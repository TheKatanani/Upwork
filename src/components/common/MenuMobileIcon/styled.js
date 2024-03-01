import styled from "styled-components";

export const StyledMobileMenuIcon = styled.div`
  width: 20px;
  transform: translateY(-3px);
  ${({theme})=>theme.media.m} {
    display:none;
  }

  div{
    background-color:#000;
    margin: 3.5px;
    width: 100%;
    height: 2px;
  }
`