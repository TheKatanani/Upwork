import styled from "styled-components";

export const ResultStyled = styled.ul`
  position: absolute;
  top:40px;
  right: 0;
  box-shadow: 0 0 10px 2px rgba(0,30,0,0.15);
  border-radius: 6px;
  /* width:380px; */
  max-height: 250px;
  overflow-y:hidden;
  margin-top: 7px;
  z-index: 99;
  background-color: ${(props)=>props.theme.palette.main};
  li{
    padding:6px 30px;
    cursor: pointer;
    p{
      font-size: ${({theme}) =>theme.fontSizes.body}rem;
    }
    :hover{
      background-color:${(props)=>props.theme.palette.ColorApp.up_green_light};
    }
  }
`