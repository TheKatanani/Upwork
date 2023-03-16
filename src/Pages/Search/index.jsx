import { Container } from "../../assets/styled-components/components"
import Filters from "./Filters"
import Main from "./Main"
import { SearchStyled } from "./styled"

const Search = () => {
  return (
    <SearchStyled>
      <Container className="container">
        <Filters/>
        <Main/>
      </Container>
    </SearchStyled>
  )
}

export default Search