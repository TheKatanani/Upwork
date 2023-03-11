import styled from "styled-components";

export const StyledAside = styled.aside`
  border-radius: 16px;
  border:1px solid ${({theme})=>theme.palette.ColorApp.border};
  width:260px;
  height: fit-content;
  .avaterArea{
    border-radius: 16px 16px 0px 0px;
    text-align: center;
    width:100%;
    padding: 20px;
    .avater{
      margin:0 auto 20px;
      display: block;
      
    }
    p{
      margin:10px 0 0; 
      color: ${({theme})=>theme.palette.font};
      font-size: ${({theme}) =>theme.fontSizes.body}rem;
    }
  }
  .conectsNum , footer{
    padding:22px 30px;
    background-color:${({theme})=>theme.palette.main};
    border-bottom:1px solid ${({theme})=>theme.palette.ColorApp.border};
    a{
      color:${({theme})=>theme.palette.ColorApp.primary};
      text-decoration: none;
    }
  }
  main{
    padding:22px 30px 22px;
    background-color:${({theme})=>theme.palette.main};
    border-bottom:1px solid ${({theme})=>theme.palette.ColorApp.border};
    height: fit-content;
  }
  footer{
    border-radius: 0px 0px 16px 16px;
  }
  `
export const StyledAsideItem = styled.div`
  padding:10px 0;
  .title{
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:20px;
    
  }
`