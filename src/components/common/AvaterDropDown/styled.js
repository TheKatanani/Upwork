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
  .buttons{
    background-color:${({ theme }) => theme.palette.ColorApp.gray_200} ;
    border-radius: 50px;
        transition: 0.3s;
        width:100%;
        margin: 7px auto 0;
        color:${({ theme }) => theme.palette.ColorApp.up_green_dark};
        border:1px solid ${({ theme }) => theme.palette.ColorApp.up_green_dark};
        display: flex;
        :hover{
            background-color:${({ theme }) => theme.palette.ColorApp.gray_200};
        }
        .active{
          transition: 0.3s;
          background-color:${({ theme }) => theme.palette.ColorApp.up_green_dark};
          color:${({ theme }) => theme.palette.main};
          :hover{
              background-color:${({ theme }) => theme.palette.ColorApp.primary};
          }
        }
  }
  .user{
    :hover{
      background-color: transparent;
      text-decoration: underline;
    }
  }
`