import styled from "styled-components";

export const StyledSearch = styled.div`
  height:36px;
  width:380px;
  border-radius: 20px;
  border:2px solid ${(props)=>props.theme.palette.ColorApp.up_green_light};
  margin-left: auto;
  display: flex;
  position: relative;
  .iconArea{
    position: absolute;
    top: 55%;
    left: 10px;
    transform: translateY(-50%);
    svg{
      width: 20px;
    }
  }
  input,select{
    border-color: transparent;
    padding: 0 0 0 35px;
    border-radius: 20px;
    margin: 1px;
    transition: 0.3s;
    :focus{
      outline: none;
      background-color:transparent;
    }
    :hover{
      background-color:${(props)=>props.theme.palette.ColorApp.up_green_light};
    }
  }
  input{
    flex:1;
  }
  select{
    height:calc(100% - 2px);
    width:fit-content;
    text-align: center;
    padding: 0 5px;
  }
  ${({show})=>
  show?`
    .SearchResult{
        display:block ;
      }
  `:`
    .SearchResult{
        display:none;
    }
  `
  }
`