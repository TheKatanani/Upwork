import styled from "styled-components";
export const SignupStyled = styled.div `
text-align:center;
width:670px;
padding:51px 31px;
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
.apple{
    margin:11px 0;
}
.nameBox{
    display: flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;
    .input{
        flex: 1;
    }
}
    h2{
        margin:0 0 11px;
        font-family: 'Rza', 'Rza-fallback';
        font-size:${({theme})=>theme.fontSizes.h2*1.7}rem;
        letter-spacing:-1.152px;
        font-weight: 500;
    }

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