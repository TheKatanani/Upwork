import styled from "styled-components";

export const IconBoxStyled = styled.span`
    display: block;
    cursor: pointer;
    line-height: 30px;
    text-align: center;
    width:30px;
    height:30px;
    border-radius: 50%;
    border:1px solid ${({theme})=>theme.palette.ColorApp.border};
    transition: 0.3s;
    :hover{
      background-color:${({theme})=>theme.palette.ColorApp.up_green_light}; ;
    }
    svg{
      fill:${({theme})=>theme.palette.ColorApp.primary};
      width:14px;
    }
`