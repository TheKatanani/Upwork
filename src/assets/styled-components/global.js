import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
a{
      color: ${({theme})=>theme.palette.font};
      font-size: ${({theme}) =>theme.fontSizes.h5}rem;
      :hover{
        color: ${({theme})=>theme.palette.ColorApp.primary};
      }
    }
`