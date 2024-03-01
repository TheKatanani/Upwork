import { Link } from "react-router-dom"
import { StyledMenu } from "./styled"

const DropDownMenu = ({items ,mobile, direction="left"}) => {
  return (
    <StyledMenu {...{direction ,mobile}}  className="menu">
      {items.map( (el,i) => <Link to={el.path} key={i}>{el.text}</Link>)}
    </StyledMenu>
  )
}

export default DropDownMenu