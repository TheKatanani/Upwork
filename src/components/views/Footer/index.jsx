import React from 'react'
import { StyleFooter } from './styled'

const Footer = ({children}) => {
  return (
    <StyleFooter>
      {children}
    </StyleFooter>
  )
}

export default Footer