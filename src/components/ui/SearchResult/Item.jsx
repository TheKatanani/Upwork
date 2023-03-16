import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSearchResults } from "../../../redux/reducers/jobs";

const Item = ({ title }) => {
  const dispatch = useDispatch() 
  const navigate = useNavigate()

  const SearchByTitle = ()=>{
    dispatch(fetchSearchResults(title));
    navigate('/home/search')
  }
  return (
    <li className="job" onClick={SearchByTitle}>
      <p>{title}</p>
    </li>
  )
}

export default Item