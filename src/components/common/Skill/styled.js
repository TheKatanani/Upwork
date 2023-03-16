import styled from "styled-components"

export const SkillStyled = styled.span`
  font-size: ${(props) => props.theme.fontSizes.body2}rem;
  color:${(props)=>props.theme.palette.ColorApp.secondary};
  background-color: ${(props)=>props.theme.palette.ColorApp.up_green_light};
  border-radius: 16px;
  padding: 4px 12px;
  cursor: pointer;
  :hover{
    background-color: ${(props)=>props.theme.palette.ColorApp.border};
  }
    
`