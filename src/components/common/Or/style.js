import styled from "styled-components";

export const OrStyled=styled.div`
    position: relative;
    margin: 25px auto 15px;
    text-align: center;
    width:100%;
    height:2px;
    background-color: ${(props)=>props.theme.palette.ColorApp.gray_200};
    ::after{
        content: "${props=>props.text}";
        font-size:${(props) => props.theme.fontSizes.body}rem;
        color:${(props)=>props.theme.palette.ColorApp.gray_800};
        font-weight: 400;
        width:${props=>props.text.length*4}px;
        padding: 2px 5px;
        background-color: ${(props)=>props.theme.palette.main};
        position: absolute;
        top: 50%;
        border:15px solid #fff;
        border-radius: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
}

`
