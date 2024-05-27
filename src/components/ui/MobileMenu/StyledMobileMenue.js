import styled from "styled-components";

export const StyledMobileMenue = styled.div`
position: fixed;
background-color: ${(props)=>props.theme.palette.main};;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
border:1px solid ${(props)=>props.theme.palette.ColorApp.gray_300};;
padding: 20px;
top:0;
left: 0;
bottom: 0;
width: 37vh;
z-index: 999;
z-index: 2;
box-shadow: 5px 5px 25px ${props=>props.theme.palette.ColorApp.gray_300};
left:${({show})=>show?`0`:`-350px`};
transition:0.4s;
svg{
  width: 20px;
}
/* .findWork svg{
  transform:rotate(${({show})=>show?`0`:`-180deg`});
  transition:0.4s;
} */
${({showRow})=>{
  return showRow.map(el=>(
    `#${el.id}{
      >ul{
        transition-property:visibility,opacity,height;
          transition:0.3s  ease-in-out;
          ${el.status?`
            visibility:hidden;
            opacity:0;
            height:0;
          `:`
            visibility:visible;
            opacity:1;
            height:100%;
          ;
          `}
        }
        svg{
        transform:rotate(${el.status?`0`:`-180deg`});
        transition:0.3s;
      } 
      }`
  ))
}}

div.avater{
  padding: 10px 10px 30px;
  img{
    width: 55px; 
    height: 55px;
  }
  header{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
  }
} 
li,a{
    display: block;
    cursor: pointer;
    :hover{
      background-color:${(props)=>props.theme.palette.ColorApp.up_green_light};
    }
  }
  li{
    padding:12px 15px;
    a{
      color:${({theme})=>theme.palette.font};
      font-size: ${({theme}) =>theme.fontSizes.body}rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  } 
li:not(.dropdown){ 
  >a{
        &.active,&:hover{
          color:${({theme})=>theme.palette.ColorApp.primary};
        } 
      }
    }
    .logout{
      margin-top: 30px; 
      border-radius: 8px;
      padding:12px 15px;
      border:2px solid ${({theme})=>theme.palette.ColorApp.primary};
      display: flex; 
      align-items:center;
      justify-content: space-between;
    }
`