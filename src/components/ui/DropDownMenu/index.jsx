import { StyledMenu } from "./styled"

const DropDownMenu = ({items , direction="left"}) => {
  return (
    <StyledMenu {...{direction}}  className="menu">
      {items.map( (el,i) => <li key={i}>{el}</li>)}
          </StyledMenu>
  )
}

export default DropDownMenu