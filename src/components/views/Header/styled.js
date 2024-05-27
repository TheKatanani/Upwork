import styled from 'styled-components'
export const StyledHeader = styled.nav `
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  .searchIcon{
    width: 20px;
  }
  ${({theme})=>theme.media.xs} { 
      justify-content: space-between;
      .searchIcon{
        svg{
          display: block;
        }
      }
    }
    ${({theme})=>theme.media.s} {
      justify-content: space-between;
      .searchIcon{
        svg{
          display: block;
        }
      }
    }
    ${({theme})=>theme.media.m} {
      justify-content: center;
      .searchIcon{
        svg{
          display: none;
        }
      }
    }
  padding:21px 24px;
  a{
    text-decoration: none;
  }
  .logo svg{
    width:75px;
    margin-right: 25px;
  }
  li.avater{
    cursor: pointer;
    .avater{
      width: 32px;
      height: 32px;
    }
  }
  .menuLogoContainer{
    display: flex;
    justify-content:center;
    align-items:center;
    gap:20px;
  }
  >svg{
    width: 20px;
  }
  .layout{
            position:fixed;
            top:0;
            width:100vw;
            height:100vh;
            background-color:#00000052;
            z-index:1;
            transition: 0.3s;
        }
`