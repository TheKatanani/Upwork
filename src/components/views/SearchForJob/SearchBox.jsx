import React, { useState } from 'react'
import {  Search2 } from '../../../assets/Icons';
import SearchInput from '../../common/SearchInput';
import SearchResult from '../../ui/SearchResult';
import { StyleSearchBox } from './styled';

function SearchBox() {
  const [show, setShow] = useState(false);

  return (
    <StyleSearchBox {...{show}} className='SearchBox'>
        <SearchInput {...{setShow}} />
        <div className="iconArea">
          <Search2/>
        </div>
        <SearchResult/>
    </StyleSearchBox>
  )
}

export default SearchBox