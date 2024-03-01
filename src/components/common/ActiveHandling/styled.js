import styled from "styled-components";

export const ActiveStyled = styled.div`
  background-color:${({ theme }) => theme.palette.ColorApp.gray_200} ;
  border-radius: 50px;
  transition: 0.3s;
  width:100%;
  margin: 7px auto 0;
  color:${({ theme }) => theme.palette.ColorApp.up_green_dark};
  border:1px solid ${({ theme }) => theme.palette.ColorApp.up_green_dark};
  display: flex;
  :hover{
      background-color:${({ theme }) => theme.palette.ColorApp.gray_200};
  }
  .active{
    transition: 0.3s;
    background-color:${({ theme }) => theme.palette.ColorApp.up_green_dark};
    color:${({ theme }) => theme.palette.main};
    :hover{
        background-color:${({ theme }) => theme.palette.ColorApp.primary};
    }
  }
`