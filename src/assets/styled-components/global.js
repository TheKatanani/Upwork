import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
a{
      color: ${({theme})=>theme.palette.font};
      font-size: ${({theme}) =>theme.fontSizes.h5}rem;
      :hover{
        color: ${({theme})=>theme.palette.ColorApp.primary};
      }
    }
/* Scrollbar */
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-thumb {
background-color: #b3b3b3;
border-radius: 10px;
}
::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px;
}
`