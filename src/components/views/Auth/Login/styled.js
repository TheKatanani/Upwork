import styled from "styled-components";

export const FormStyled = styled.form`

input{
        background-color: #fff;
        ${({theme})=>theme.media.xs} {
            padding:1px  30px;
        }
        ${({theme})=>theme.media.s} {
            padding:4px  35px;
        }
        padding:8px  40px;
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
    div.google{
        position:relative;
        svg{
            position:absolute;
            top:50%;
            transform: translateY(-50%);
            left: 2px;
            border-radius: 50%;
        }
    }
    .or{
        margin: 25px 0;
    }
`
export const InputBox = styled.div `
    position:relative;
    > svg{
        position:absolute;
        top:42%;
        transform: translateY(-50%);
        left: 10px;
        max-width:20px;
        z-index: 1;
    }
`

