import styled from 'styled-components'
export const StyleFooter=styled.div`
    background-color: ${(props)=>props.theme.palette.ColorApp.up_black};
    margin: 24px;
    padding:48px;
    ${({theme})=>theme.media.xs} {
      margin:10px;
      padding:35px; 
    }
    ${({theme})=>theme.media.s} {
      margin:10px;
      padding:40px;
    }
    text-align: center;
    border-radius: 8px;
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
        ${({theme})=>theme.media.xs} {
            justify-content: center;
            ul{
                width: 100%;
                li{
                    text-align: center;
                }
            }
    }
    }
    .icons{
        display: flex;
        flex-wrap: wrap;
        border-bottom: 2px solid ${(props)=>props.theme.palette.ColorApp.border};
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
        >div{
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            gap:8px;
            p{
                padding: 0;
                font-size: ${(props) => props.theme.fontSizes.body}rem;;
            }
        }
    }
`