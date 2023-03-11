import styled from "styled-components";

export const StyledProgres = styled.div`
  border-radius: 160px;
  height:4px;
  margin-right: 35px;
  background-color: ${(props)=>props.theme.palette.ColorApp.border};
  position: relative;
  span{
    position: absolute;
    top:0;
    left: 0;
    background-color: ${(props)=>props.theme.palette.ColorApp.primary};
    width:${({width})=>width}%;
    height: 100%;
  }
  ::after{
    content: "${({width})=>width}%";
    position: absolute;
    top:-6px;
    right: -30px;
    color: ${({theme})=>theme.palette.font};
    font-size: ${({theme}) =>theme.fontSizes.body2}rem;
  }
`