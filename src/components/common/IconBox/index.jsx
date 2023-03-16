import { IconBoxStyled } from './styled'

const IconBox = ({children}) => {
  return (
    <IconBoxStyled className='heart iconBox'>{children}</IconBoxStyled>
  )
}

export default IconBox