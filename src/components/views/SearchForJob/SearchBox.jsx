import React from 'react'
import {  Search2 } from '../../../assets/Icons';
import Input from '../../common/Input'
import { StyleSearchBox } from './styled';

function SearchBox() {
  // create slice and func these to pass the error
  const handleInputChangeFun = ()=>{}
  let test = "" ;
  return (
    <StyleSearchBox>
        <Input
            onChange={handleInputChangeFun}
            id="search"
            type="text"
            placeholder="Search for job"
            value={test}
        />
        <div className="iconArea">
          <Search2/>
        </div>
    </StyleSearchBox>
  )
}

export default SearchBox