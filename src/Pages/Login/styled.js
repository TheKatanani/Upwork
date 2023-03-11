import styled from "styled-components";
export const LoginStyled = styled.div `
    text-align:center;
    width:510px;
    padding:40px 80px;
    margin:80px auto;
    border-radius: 16px;
    border:2px solid ${(props)=>props.theme.palette.ColorApp.border};
.logoBox{
    position:fixed;
    z-index: 5;
    background-color:${({theme})=>theme.palette.main};
    top:0;
    left:0;
    right:0;
    height:55px;
    .logo,svg{
        position: absolute;
        left:24px;
        top:21px;
        width:90px;
    }
}
    h2{
        margin:0 0 32px;
    }

    input{
        background-color: #fff;
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

