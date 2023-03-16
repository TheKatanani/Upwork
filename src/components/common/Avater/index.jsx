import AvaterImage from '../../../assets/images/Avatar.png'
import { AvaterStyled } from './styled'

const Avater = () => {
  return (
    <AvaterStyled className='avater' src={AvaterImage} alt="" />
  )
}

export default Avater