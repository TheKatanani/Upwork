import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSearchResults } from "../../../redux/reducers/jobs";

const SearchInput = ({ setShow }) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const timerRef = useRef(null);

  const handleEnterKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (timerRef.current) clearTimeout(timerRef.current);
      dispatch(fetchSearchResults(searchTerm));
      navigate('/home/search');
    }
  };

  const handleChange = (event) => {
    const val = event.target.value;
    setSearchTerm(val);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      dispatch(fetchSearchResults(val));
    }, 350);
  };

  return (
    <input
      type="text"
      placeholder="Search for jobs..."
      onBlur={() => {
        setTimeout(() => {
          if (setShow) setShow(false);
        }, 200);
      }}
      onFocus={() => {
        if (setShow) setShow(true);
      }}
      value={searchTerm}
      onChange={handleChange}
      onKeyDown={handleEnterKeyDown}
    />
  );
};

export default SearchInput;