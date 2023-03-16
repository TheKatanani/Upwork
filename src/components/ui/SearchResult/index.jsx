import { useSelector } from "react-redux";
import { selectSearchResults, selectStatus } from "../../../redux/reducers/jobs";
import Loading from "../../common/Loading";
import Item from "./Item";
import { ResultStyled } from "./styled";

const SearchResult = () => {
  const searchResults = useSelector(selectSearchResults);
  const status = useSelector(selectStatus);
  return (
    <ResultStyled className="SearchResult">
     {status === 'loading' && <Loading/>}
      {status === 'failed' && <p>Failed to load search results</p>}
      {status === 'succeeded' && searchResults.map((job) => (
        <Item key={job.id} title={job.title} description={job.description}/>
      ))}
    </ResultStyled>
  )
}

export default SearchResult