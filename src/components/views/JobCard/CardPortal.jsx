import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import JopDetails from '../../../Pages/JobDetails'
import { showPortal } from '../../../redux/reducers/portal'
import Portal from '../Portal'
const CardPortalStyled = styled.div`
  header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    a{
      color:${(props) => props.theme.palette.ColorApp.primary};
    }
    span{
      font-size: 40px;
    }
  }
`
const CardPortal = () => {
  const { id  } = useSelector(state => state.portal)
  return (
    <Portal card>
      <CardPortalStyled>
        <header>
          <span>{"<"}</span>
          <Link to={`/home/details/${id}`}
            onClick={() => dispatchEvent(showPortal({ show: false , id }))}
          >Open job in a new window</Link>
        </header>
        <JopDetails {...{id}} />
      </CardPortalStyled>
    </Portal>
  )
}

export default CardPortal