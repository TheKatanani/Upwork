import styled from "styled-components";

export const JobsMightLikeStyled = styled.div`
  border-radius: 16px;
  border:1px solid ${({theme})=>theme.palette.ColorApp.border};
  margin:30px 0;
  >header{
    padding: 25px 20px 10px;
    border-bottom:1px solid ${({theme})=>theme.palette.ColorApp.border};
    h2{
      color: ${({theme})=>theme.palette.font};
      font-size: ${({theme}) =>theme.fontSizes.h2}rem;
      margin-left: 5px;
    }
    nav{
      margin-top: 20px;
      ul{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        li{
          a{
            padding: 10px 12px;
            text-decoration: none;
            font-size: ${({theme}) =>theme.fontSizes.body}rem;
            &.active{
              border-bottom:3px solid ${({theme})=>theme.palette.font};
            }
            :hover{
              color: ${({theme})=>theme.palette.font};
            }
          }
        }
      }
    }
  }
  >main{
    font-size: ${({theme}) =>theme.fontSizes.body}rem;
    color: ${({theme})=>theme.palette.font};
    >p{
      ${({theme})=>theme.media.xs} {
        padding: 18px 12px;
      }
      ${({theme})=>theme.media.s} {
        padding: 10px 15px;
      }
      ${({theme})=>theme.media.l} {
        padding: 20px 30px;
      }
    }
  }
`