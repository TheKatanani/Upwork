import styled from "styled-components";

export const PortalStyled = styled.div`
    ${({ state }) => (!state ? `
      opacity: 0;
      visibility: hidden;
    `:` 
      opacity: 1;
      visibility: visible;
    `)};
  .layout {
    display: ${({ state }) => (state ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.2;
    z-index: 999;
  }
  .children {
    position: fixed;
    ${({card,state})=>card?`
    top: 0;
    bottom: 0;
    right: ${ state ? "0" : "-1900px"};
    `:
    `
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    `
  }
    background-color: ${({ theme }) => theme.palette.main};
    padding: 20px;
    z-index: 1000;
    transition: right .4s ease-in-out, opacity .8s ease-in-out;
    overflow: scroll;
     /* Scrollbar */
     ::-webkit-scrollbar {
            width: 1px;
        }
        ::-webkit-scrollbar-thumb {
        background-color: #b3b3b3;
        border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
            background-color: #f1f1f1;
            border-radius: 10px;
        }
  }
`;
