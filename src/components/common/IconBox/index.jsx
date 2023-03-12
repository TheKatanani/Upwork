import { IconBoxStyled } from './styled'

const IconBox = ({children}) => {
  return (
    <IconBoxStyled className='heart'>{children}</IconBoxStyled>
  )
}

export default IconBox