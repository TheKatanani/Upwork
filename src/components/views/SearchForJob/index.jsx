import React from 'react'
import SearchBox from './SearchBox'
import { SearchForJobStyle } from './styled'
const mook = ["react","frontEnd","js"]
function SearchForJob() {
  return (
    <SearchForJobStyle>
      <SearchBox/>
      {mook&&(<>
      <div className="result">
      <p>Recent Searches:</p>
        {mook.map((el,i)=><span key={i}> {el} </span>)}
      </div>
      </>)}
    </SearchForJobStyle>
  )
}

export default SearchForJob