import React from 'react'
import { Search } from '../../../assets/Icons'
import Select from '../../common/Select'
import { StyledSearch } from './styled'
const mook=[{
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
  return (
    <StyledSearch className="searchBox">
            <div className="iconArea"><Search/></div>
            <input type="text" placeholder='Search'/>
            <div className="select">
              <Select value='tesst'
                onChange // create slice to the select if you want in rtk folder
                options={mook}/>
              </div>
          </StyledSearch>
  )
}

export default SearchBox