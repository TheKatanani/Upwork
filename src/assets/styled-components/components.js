import styled from 'styled-components';

export const Container = styled.div `
    padding: 0;
    margin: 0 auto;
/* Small */
@media (min-width: 768px) {
    width: 750px;
}
/* Medium */
@media (min-width: 992px) {
    width: 970px;
}
/* Large */
@media (min-width: 1200px) {
    width: 1170px;
}
`;
export const MainButton = styled.button `
    width: 100%;
    height: 40px;
    font-weight: 500;
    font-size: ${({theme}) =>theme.fontSizes.body2}rem;
    border-radius: 100px;
    line-height: 39px;
    text-align: center;
    letter-spacing:0.6px;
    cursor: pointer;
    border: none;
    font-weight: bold;
`
export const SecondaryButton = styled(MainButton)`
    transition: 0.3s;
    background-color:transparent;
        width:70%;
        margin: 15px auto;
        color:${({theme})=>theme.palette.ColorApp.up_green_dark};
        border:1px solid ${({theme})=>theme.palette.ColorApp.up_green_dark};
        :hover{
            background-color:${({theme})=>theme.palette.ColorApp.gray_200};
        }
`
export const PrimaryButton = styled(MainButton)`
transition: 0.3s;
    background-color:${({theme})=>theme.palette.ColorApp.up_green_dark};
        color:${({theme})=>theme.palette.main};
        :hover{
            background-color:${({theme})=>theme.palette.ColorApp.primary};
        }
`
export const GoogleButton = styled(MainButton)`
    background-color:#4285f4;
    color:${({theme})=>theme.palette.main};
`
export const AppleButton= styled(MainButton)`
    background-color:transparent;
        color:${({theme})=>theme.palette.font};
        border:1px solid ${({theme})=>theme.palette.font};
        margin:15px 0 70px;
        svg{
            max-width:10px;
            transform: translateY(3px);
        }
`

