import styled from 'styled-components'
import { StyledMenu } from '../../ui/DropDownMenu/styled'
export const DropStyled = styled(StyledMenu)`
  position: absolute;
  top: 50px;
  right: 5px;
  text-align: center;
  header{
    padding: 20px;
    img.avater{
      width: 88px !important;
      height: 88px!important;
    }
  }
  ::before{
    right: 20px;
  }
  svg{
    width: 20px;
  }
  li{
    display: flex;
    justify-content: space-between;
    padding: 12px 30px;
  }
  .user{
    :hover{
      background-color: transparent;
      text-decoration: underline;
    }
  }
`