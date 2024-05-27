import React from 'react'
import { MainButton } from '../../../assets/styled-components/components'
import { useState } from 'react'
import { ActiveStyled } from './styled'

const ActiveHandling = () => {
  const [active, setActive] = useState(false)
  return (
<ActiveStyled>
          <MainButton className={active && `active`} onClick={() => setActive(true)}>Online</MainButton>
          <MainButton className={!active && `active`} onClick={() => setActive(false)}>Invisible</MainButton>
        </ActiveStyled>  )
}

export default ActiveHandling