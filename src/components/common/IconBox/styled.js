import styled from "styled-components";

export const IconBoxStyled = styled.button`
  background-color: ${({theme})=>theme.palette.main};
    display: block;
    cursor: pointer;
    line-height: 30px;
    text-align: center;
    width:30px;
    height:30px;
    border-radius: 50%;
    border:1px solid ${({theme})=>theme.palette.ColorApp.border};
    transition: 0.3s;
    padding: 1px;
    :hover{
      background-color:${({theme})=>theme.palette.ColorApp.up_green_light}; ;
    }
    svg{
      fill:${({theme})=>theme.palette.ColorApp.primary};
      width:14px;
    }
`