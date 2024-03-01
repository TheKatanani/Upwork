import styled from "styled-components";

export const SearchStyled = styled.div`
margin: 30px 0;
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap:20px;
    ${({theme})=>theme.media.xs} {
      margin:10px;
      justify-content: center;
    }
    ${({theme})=>theme.media.s} {
      margin:10px;
      justify-content: center;
    }
    .filters{
      min-width: 230px;
    }
  }
  `
export const MainStyled = styled.div`
  border:2px solid ${(props)=>props.theme.palette.ColorApp.up_green_light};
  border-radius: 20px;
  min-width: min(100%,420px);
  ${({theme})=>theme.media.xs} {
      margin:10px;
    }
    ${({theme})=>theme.media.s} {
      margin:10px;
    }
  flex: 1;
  header{
    margin: 30px 20px;
    >.search{
      display: flex;
      align-items: center;
      button{
        width: 144px;
        line-height: unset;
      }
      .SearchBox{
        margin: 0 20px 0 0;
      }
    }
  }
  a{
    color: ${(props)=>props.theme.palette.ColorApp.primary};
    text-decoration: none;
    transition: 0.3s;
    :hover{
      text-decoration: underline;
    }
  }
  .content{
  }
      ul{
        margin: 0 0 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        li{
          a{
            padding: 10px 12px;
            text-decoration: none;
            color: ${(props)=>props.theme.palette.font};
            font-size: ${({theme}) =>theme.fontSizes.body}rem;
            &.active{
              border-bottom:3px solid ${({theme})=>theme.palette.font};
            }
            :hover{
              color: ${({theme})=>theme.palette.font};
              text-decoration: none;
            }
          }
        }
      }
`