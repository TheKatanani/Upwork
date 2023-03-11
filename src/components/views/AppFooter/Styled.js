import styled from 'styled-components'
export const StyleIconFooter=styled.div`
    width:40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    border:1px solid ${(props)=>props.theme.palette.main};
    transition: 0.2s;
    cursor: pointer;
    svg{
        fill:${({theme})=>theme.palette.main};
        padding: 10px;
    }
    :hover{
      background-color: #9aaa97;
    }
`