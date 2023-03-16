import styled from 'styled-components'
export const StyledMenu = styled.ul`
  position: relative;
  box-shadow: 0 0 10px 2px rgba(0,30,0,0.15);
  border-radius: 6px;
  width:200px;
  margin-top: 7px;
  background-color: ${(props)=>props.theme.palette.main};
  .active{
    background-color: ${(props)=>props.theme.palette.ColorApp.primary};;
  }
  ::before{
    content: "";
    display: block;
    position: absolute;
    top: -7px;
    ${({direction})=>`${direction}:28px;`}
    border-color: ${(props)=>props.theme.palette.main};
    border-left: 8px solid ${(props)=>props.theme.palette.main};
    border-bottom: 8px solid ${(props)=>props.theme.palette.main};
    border-right: 8px solid transparent;
    border-top: 8px solid transparent;
    transform: translateX(-50%) rotate(135deg);
    box-shadow: -2px 2px 3px rgb(57 73 76 / 10%);
  }
  z-index:999;
  li,a{
    display: block;
    padding:12px 15px;
    cursor: pointer;
    :hover{
      background-color:${(props)=>props.theme.palette.ColorApp.up_green_light};
    }
  }
`