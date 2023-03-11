import styled from "styled-components"

const SkillStyled = styled.span`
  font-size: ${(props) => props.theme.fontSizes.body2}rem;
  color:${(props)=>props.theme.palette.ColorApp.secondary};
  background-color: ${(props)=>props.theme.palette.ColorApp.up_green_light};
  border-radius: 12px;
  padding: 4px 8px;
  cursor: pointer;
  :hover{
    background-color: ${(props)=>props.theme.palette.ColorApp.border};
  }
    
`
const Skill = ({children}) => {
  return (
    <SkillStyled >{children}</SkillStyled>
  )
}

export default Skill