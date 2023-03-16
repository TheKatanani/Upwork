import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSearchResults } from "../../../redux/reducers/jobs";


const SearchInput = ({setShow}) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate()

  let debounceTimer;

  const handleSearch = () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      dispatch(fetchSearchResults(searchTerm));
    }, 500);
  };
  const handleEnterKeyDown = (event) => {
    if (event.key === 'Enter') {
      // save the most resent here 
      navigate('/home/search')
    }
  }
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch();
  };
  return (
    <input
        type="text"
        placeholder='Search'
        onBlur={() => setShow(false)}
        onFocus={() => setShow(true)}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleEnterKeyDown}
      />
  )
}

export default SearchInput