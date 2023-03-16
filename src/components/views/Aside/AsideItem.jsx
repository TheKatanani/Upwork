import React from 'react'
import { Pen } from '../../../assets/Icons'
import IconBox from '../../common/IconBox'
import { StyledAsideItem } from './styled'

function AsideItem({ title, children , Icon=Pen ,Icon2}) {
  return (
    <StyledAsideItem>
      <div className="title">{title} 
      <IconBox><Icon/></IconBox>
      {Icon2&&
      <IconBox><Icon2/></IconBox>
    }
      </div>
      <div className="children">{children}</div>
    </StyledAsideItem>
  )
}

export default AsideItem