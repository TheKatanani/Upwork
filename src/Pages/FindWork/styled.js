import styled from "styled-components";

export const StyledFindWork = styled.div `
margin-top: 30px;
  .container{
    display: flex;
    flex-wrap:wrap;
    gap:20px;
    >main{
      flex:1;
      ${({theme})=>theme.media.xs} { 
        margin:0 20px;
      }
      ${({theme})=>theme.media.s} {
        margin:0 20px;
      }
      ${({theme})=>theme.media.l} {
        margin: initial;
      }
    }
  }
  aside{
    ${({theme})=>theme.media.xs} {
        width:90%;
        margin: 30px auto;
        order: -1;
      }
      ${({theme})=>theme.media.s} {
        width:80%;
        margin: 30px auto;
        order: -1;
      }
      ${({theme})=>theme.media.l} {
        width:260px;
        margin: initial;
        order: 2;
      }
  }
`