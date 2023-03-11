import { OrStyled } from './style.js'
const Or = ({text="or"}) => {
  return (
    <OrStyled {...{text}} className="or"></OrStyled>
    // <OrStyled {...{text}} className="or">{text}</OrStyled>
  )
}
export default Or