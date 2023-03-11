import React, { Fragment } from 'react'
import styled from 'styled-components';
import { StarGray, StarGreen } from '../../../assets/Icons';
const StyleRating = styled.div`
  span{
    color: ${({theme})=>theme.palette.ColorApp.primary};
    margin:0 5px;
    font-size:${(props) => props.theme.fontSizes.body}rem;
    font-weight: 400;
  }
`
const Rating = ({ num, num2 }) => {
  const floorNum =Math.floor(num)
  const yellowStars = Array.from({ length: floorNum }, (_, i) => i);
  const grayStars = Array.from({ length: 5 - floorNum }, (_, i) => i + floorNum);

  return (
    <StyleRating>
      {yellowStars.map((_, i) => (
        <Fragment key={i}>
          <StarGreen />
        </Fragment>
      ))}
      {grayStars.map((_, i) => (
        <Fragment key={i}>
          <StarGray />
        </Fragment>
      ))}
      <span>{num2}</span>
    </StyleRating>
  );
};

export default Rating;
