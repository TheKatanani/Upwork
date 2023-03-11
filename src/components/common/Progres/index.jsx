import React from 'react'
import { StyledProgres } from './styled'

function Progres({width}) {
  return (
    <StyledProgres {...{width}}>
      <span></span>
    </StyledProgres>
  )
}

export default Progres