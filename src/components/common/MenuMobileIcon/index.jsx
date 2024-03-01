import React from 'react'
import { StyledMobileMenuIcon } from './styled'

const MenuMobileIcon = ({onClick,onAbort}) => {
  return (
    <StyledMobileMenuIcon onClick={onClick}  onBlur={()=>{console.log('onBlur')}}>
        <div></div>
        <div></div>
        <div></div>
      </StyledMobileMenuIcon>
  )
}

export default MenuMobileIcon