import styled from "styled-components";

export const ProfileStyled = styled.div `
color: ${({theme})=>theme.palette.font};
font-size: ${({theme}) =>theme.fontSizes.body}rem;
margin: 50px 0;
h1{
  font-size: ${({theme}) =>theme.fontSizes.h1}rem;
}
h2{
  font-size: ${({theme}) =>theme.fontSizes.h2}rem;
  margin: 20px 0;
  font-weight: normal;
}
h4{
  font-size: ${({theme}) =>theme.fontSizes.h6}rem;
  margin: 20px 0 0;
  font-weight: normal;
}
p,span{
  font-size: ${({theme}) =>theme.fontSizes.body}rem;
  color:${({theme})=>theme.palette.ColorApp.secondary};
  line-height: 1.8;
}
button{
  font-size: ${({theme}) =>theme.fontSizes.body}rem;
}
.title{
  font-size: ${({theme}) =>theme.fontSizes.h5}rem;

}
section{
  background-color:${({theme})=>theme.palette.main};
  border-bottom:1px solid ${({theme})=>theme.palette.ColorApp.border};
  padding: 20px 30px;
}
a{
  color:${({theme})=>theme.palette.ColorApp.primary};
  font-size: ${({theme}) =>theme.fontSizes.body}rem;
  text-decoration: none;
}  
.container{
  border:1px solid ${({theme})=>theme.palette.ColorApp.border};
  border-radius: 16px;
  width:min(1018px,90%);
    ${({theme})=>theme.media.xs} {
        margin:20px  20px 10px;
    }
    ${({theme})=>theme.media.s} {
        margin:20px  auto;
    }
  >header{
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: space-between;
    .box{
      display: flex;
      flex: 1;
      gap:20px;
      ${({theme})=>theme.media.xs} {
        margin-bottom: 20px;
    }
      div.avater{
        position: relative;
        .iconBox{
          position: absolute;
          top: 0;
          left: 0;
        }
        .avater{
          border: none;
        }
        &::after{
          content: '';
          position: absolute;
          bottom: 18px;
          right: 0px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border:4px solid ${({theme})=>theme.palette.main};
          background-color: ${({theme})=>theme.palette.ColorApp.third};
        }
      }
      .user{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 20px;
      h1{
        font-weight: normal;
      }
      .location{
        svg{
          width: 14px;
        }
      }
      .avilable{
        display: flex;
        align-items: center;
        gap:10px;
        span{
          border:1px solid ${({theme})=>theme.palette.ColorApp.third};
          padding:0 10px;
          border-radius: 16px;
          svg{
            width: 14px;
            margin: 0 6px;
            transform: translateY(2px);
            fill:${({theme})=>theme.palette.ColorApp.third};
          }
        }
      }
    }
  }
    .buttons{
      display: flex;
      justify-content: flex-end;
      gap:23px;
      flex:1;
      ${({theme})=>theme.media.xs} {
        justify-content: center;
      }
      ${({theme})=>theme.media.xs} {
        justify-content: center;
  }
      button{
        width: fit-content;
        padding: 8px 30px;
        ${({theme})=>theme.media.xs} {
        padding:5px  15px;
    }
        margin: 0;
        line-height: unset;
      }
      
    }
  }
  >.content{
    display: flex;
    ${({theme})=>theme.media.xs} {
    flex-wrap:wrap;
    }
    ${({theme})=>theme.media.s} {
    flex-wrap:wrap;
  }
    ${({theme})=>theme.media.l} {
    flex-wrap:nowrap;
  }
    header.title{
      padding:25px 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      div{
        display: flex;
        flex-wrap:wrap;
        align-items: center;
        gap: 10px;
        font-weight: bold;
        font-size: ${({theme}) =>theme.fontSizes.h4}rem;
        color:${({theme})=>theme.palette.font};
        p{
          font-weight: bold;
          font-size: ${({theme}) =>theme.fontSizes.h4}rem;
          color:${({theme})=>theme.palette.font};
        }
        button + button{
          width: 40px;
          height: 40px;
          line-height: 40px;
        }
      }
    }
    .overview{
      display: flex;
      justify-content: space-between;
      p{
        width: 80%;
      }
    }
  .portfolio{
    .content{
      text-align: center;
      svg{
        width: 144px;
      }
      a{
        margin: 15px 0;
      }
    }
  }
  .projectCatalog{
    >div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      button{
        width: fit-content;
        padding:5px 20px;
        line-height: 0;
        margin: 0;
      }
    }
    p{
      width: 80%;
    }
  }
  }
}

aside{
  min-width: 350px;
  border-right:1px solid ${({theme})=>theme.palette.ColorApp.border};
  section{
    border: none;
  }
}
`