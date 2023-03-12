import styled from "styled-components";

export const DetailsStyled = styled.div `
.container{
  width: 1018px;
}
color: ${({theme})=>theme.palette.font};
font-size: ${({theme}) =>theme.fontSizes.body}rem;
h1{
  font-size: ${({theme}) =>theme.fontSizes.h1}rem;
  margin: 30px ;
}
h2{
  font-size: ${({theme}) =>theme.fontSizes.h2}rem;
    margin: 20px 0;
    font-weight: normal;
}
section{
  background-color:${({theme})=>theme.palette.main};
  border-bottom:1px solid ${({theme})=>theme.palette.ColorApp.border};
  padding: 20px 30px;
}
a{
  color:${({theme})=>theme.palette.ColorApp.primary};
}  
    .content{
    border:1px solid ${({theme})=>theme.palette.ColorApp.border};
    border-radius: 16px;
    display: flex;
    header.title{
      padding:25px 30px;
    }
    section.jobType{
      .time{
        margin: 8px 0;
        p{
          font-size: ${({theme}) =>theme.fontSizes.body}rem;
          color:${({theme})=>theme.palette.ColorApp.secondary};
        }
      }
      .targetLocation{
        display: flex;
        gap:3px;
        align-items: center;
      svg{
        width: 14px;
        fill:#1f57c3;
      }
      }
    }
    section.description{
      p{
        max-width: 80%;
        line-height: 2;
      }
    }
    section.details{
      display: flex;
      >div{
        flex:1;
      }
    }
  }
aside{
  min-width: 350px;
  border-left:1px solid ${({theme})=>theme.palette.ColorApp.border};
  section.buttons{
    button:first-child{
      color:${({theme})=>theme.palette.ColorApp.secondary};
      height: 40px;
      border-radius: 16px;
    }
    .heart{
      margin: 10px 0;
      width: 100%;
      height: 40px;
      border-radius: 16px;
      color:${({theme})=>theme.palette.ColorApp.primary};
      line-height: 40px;
    }
    .flag{
      margin: 20px 0 10px;
    }
  }
  section{
    .verified{
      display: flex;
      align-items: center;
      margin: 8px 0;
      gap:5px;
      svg{
        width: 18px;
      }
    }
    .stars{
      svg{   
        width: 18px;
      }
      span{
        color:${({theme})=>theme.palette.ColorApp.secondary};
      }
    }
  }
  .box{
    margin: 20px 0;
  }
    section:first-child{
      border-radius: 0 16px 0 0;
    }
    section:last-child{
      border-radius: 0 0 16px  0;
      .readOnly{
        cursor: not-allowed;
        background-color:${({theme})=>theme.palette.ColorApp.border};
      }
      span.copy{
        cursor: pointer;
        color:${({theme})=>theme.palette.ColorApp.primary};
      }
    }
  }
  
`