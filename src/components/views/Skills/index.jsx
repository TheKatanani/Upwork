import React from 'react'
import Skill from '../../common/Skill'
import { SkillsStyled } from './styled'

const Skills = ({data}) => {
  return (
    <SkillsStyled className="skills">
    {data?.map((el, i) => <Skill className="skill" key={i}>{el}</Skill>)}
  </SkillsStyled>
  )
}

export default Skills