import React from 'react'
import { Pen } from '../../../assets/Icons'
import IconBox from '../../common/IconBox'
import { StyledAsideItem } from './styled'

function AsideItem({title,children}) {
  return (
    <StyledAsideItem>
      <div className="title">{title} <IconBox><Pen/></IconBox></div>
      <div className="children">{children}</div>
    </StyledAsideItem>
  )
}

export default AsideItem