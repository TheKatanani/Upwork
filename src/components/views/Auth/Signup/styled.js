import styled from "styled-components";

export const FormStyled = styled.form`
  input{
      background-color: #fff;
      padding:8px  10px;
    }
    .logInPassword{
      position:relative;
      span{
        position:absolute;
        top:50%;
        transform: translateY(-50%);
        right: 10px;
        width:20px;
        cursor: pointer;
      }
    }
    a{
        
        font-size: ${({theme}) =>theme.fontSizes.body}rem;
    }
    .or{
        margin: 25px 0;
    }
    .create{
        margin:20px 0;
    }
    .already{
        margin:31px auto 0;
        a{
            color:${props=> props.theme.palette.ColorApp.primary};
            text-decoration: none;
        }
    }
`