import React, { useState } from 'react'
import { Search } from '../../../assets/Icons'
import SearchInput from '../../common/SearchInput'
import Select from '../../common/Select'
import SearchResult from '../SearchResult'
import { StyledSearch } from './styled'
const mook = [{
  value: "",
  label: "jobs"
},
{
  value: "jobs1",
  label: "jobs 1"
},
{
  value: "jobs2",
  label: "jobs 2"
},
{
  value: "jobs3",
  label: "jobs 3"
}
]
function SearchBox() {
  const [show, setShow] = useState(false);
 
  return (
    <StyledSearch {...{ show }} className="searchBox">
      <div className="iconArea"><Search /></div>
      <SearchInput {...{setShow}}/>
      <div className="select">
        <Select value='tesst'
          onChange // create states to the select if you want in rtk folder
          options={mook} />
      </div>
      <SearchResult />
    </StyledSearch>
  )
}

export default SearchBox