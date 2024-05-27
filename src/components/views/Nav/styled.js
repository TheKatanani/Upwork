import styled from "styled-components";

export const StyledUl = styled.ul` 
    ${({theme})=>theme.media.xs} { 
      display: none;
    }
    ${({theme})=>theme.media.s} {
      display: none;
    }
    ${({theme})=>theme.media.m} {
      display: flex;
      }
    flex-wrap:wrap;
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
        opacity: 0;
        visibility: hidden;
        transform:translate(15px,-1rem);
        transition-property:transform,opacity,visibility;
        transition-duration:0.4s;
        transition-timing-function: ease-in-out;
      }
      :hover{
        .menu{
          margin-top: 7px;
          opacity: 1;
          visibility:visible;
          transform:translatey(15px);
        }
      }
      }
    }
    li.searchBox{
      ${({theme})=>theme.media.xl} { 
        flex:1;
    }
      position: relative;
      .searchBox{
        justify-content: flex-end;
      }
    } 
`