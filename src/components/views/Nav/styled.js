import styled from 'styled-components'
export const StyledNav = styled.nav `
  display: flex;
  justify-content: center;
  align-items: center;
  padding:21px 24px;
  a{
    text-decoration: none;
  }
  .logo svg{
    width:75px;
    margin-right: 25px;
  }
  >ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1;
    gap:22px;
    li{
      >a{
        color:${({theme})=>theme.palette.font};
        font-size: ${({theme}) =>theme.fontSizes.body}rem;
        &.active,&:hover{
          color:${({theme})=>theme.palette.ColorApp.primary};
        }
        svg{
          width:12px;
        }
      }
      min-width:24px;
      &.dropdown{
        position: relative;
      .menu{
        position: absolute;
        display: none;
      }
      :hover{
        .menu{
          display: block;
        }
      }
      }
    }
    li.searchBox{
      flex:1;
      .searchBox{
        justify-content: flex-end;
      }
    }
  }
  .avater{
    width: 32px;
    height: 32px;
  }
`