import styled from "styled-components";

export const CheckStyled = styled.div `
   .container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 6px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: green;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 6.5px;
  top: 2.5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2.6px 2.6px 0;
  transform: rotate(45deg);
}

    label{
    text-align:start;
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSizes.body2}rem;
    color: ${(props)=>props.theme.palette.font};
    line-height:1.8;
    a{
        color:${props=> props.theme.palette.ColorApp.primary};
    }
}


`