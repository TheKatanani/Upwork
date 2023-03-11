import styled from "styled-components";

export const StyledCard =styled.div`
    border-bottom:1px solid ${({theme})=>theme.palette.ColorApp.border};
    padding: 30px;
    transition: 0.3s;
    cursor: pointer;
  header{
    display: flex;
    margin: 0px 0 30px;
    .title{
      flex: 1;
    }
    .icons{
      display: flex;
      gap: 5px;
      >span{
        width: 35px;
        height: 35px;
        line-height: 39px;
      }
    }
  }
  main{
    .deteils{
      >span{
        color: ${(props)=>props.theme.palette.ColorApp.secondary};
        ::after{
          content:' - ';
        transform: translateY(-50%);
        color: ${(props)=>props.theme.palette.ColorApp.secondary};
        font-size: ${(props) => props.theme.fontSizes.body2}rem;
      }
    }
    }
    .description{
      color: ${(props)=>props.theme.palette.font};
      font-size: ${(props) => props.theme.fontSizes.body}rem;
      margin:12px 0;
      line-height: 20px;
      letter-spacing: 0.6px;
    }
    .skills{
      display: flex;
      gap: 5px;
    }
    .proposals{
      display: flex;
      margin: 19px 0 13px;
      font-size: ${(props) => props.theme.fontSizes.body2}rem;
      p{
        color:${(props)=>props.theme.palette.ColorApp.secondary};
      }
      span{
        color: ${(props)=>props.theme.palette.font};
      }
    }
  }
  footer{
    display: flex;
    align-items: center;
    gap: 15px;
    .verified{
      display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.fontSizes.body2}rem;
    color:${(props)=>props.theme.palette.ColorApp.secondary};
    svg{
      width: 14px;
      margin-right:5px;
    }
  }
  .location{
    font-size: ${(props) => props.theme.fontSizes.body2}rem;
    color:${(props)=>props.theme.palette.ColorApp.secondary};
    svg{
      width: 14px;
      margin-right: 5px;
      fill:${(props)=>props.theme.palette.ColorApp.secondary};
    }
  }
  }
  :hover{
    background-color:${({theme})=>`${theme.palette.ColorApp.up_green_light}`} ;
    .icons{
      >span{
        position:relative;
        background-color:white;
        &:hover{
          background-color:${({theme})=>`${theme.palette.ColorApp.up_green_light}`} ;
        }
      }
    }
  }
`

// background-color:${({theme})=>theme.palette.main};
// 