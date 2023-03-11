import styled from 'styled-components'
export const StyleFooter=styled.div`
    background-color: ${(props)=>props.theme.palette.ColorApp.up_black};
    margin: 24px;
    text-align: center;
    border-radius: 8px;
    padding:48px;
    p{
        padding:30px 0 0;
        color: ${(props)=>props.theme.palette.main};
        font-size: ${(props) => props.theme.fontSizes.body2}rem;;
    }
    a{
        color: ${(props)=>props.theme.palette.main};
        text-decoration: none;
        font-size: ${(props) => props.theme.fontSizes.body}rem;;
        :hover{
            text-decoration:underline;
            color: ${(props)=>props.theme.palette.ColorApp.primary};
        }
    }
    .uls{
        display: grid;
        grid-template-columns: repeat(auto-fill,280px);
        margin: 20px 0;
        justify-content: start;
        justify-items: start;
        ul{
            li{
                padding: 5px;
                text-align: start;
            }
        }
    }
    .icons{
        display: flex;
        border-bottom: 2px solid ${(props)=>props.theme.palette.ColorApp.border};
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        >div{
            align-items: center;
            display: flex;
            gap:8px;
            p{
                padding: 0;
                font-size: ${(props) => props.theme.fontSizes.body}rem;;
            }
        }
    }
`