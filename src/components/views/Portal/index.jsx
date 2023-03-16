import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showPortal } from '../../../redux/reducers/portal';
import { PortalStyled } from './styled';

const Portal = ({ children ,card}) => {
  const state = useSelector(state => state.portal.show)
  const dispatch = useDispatch()
  return ReactDOM.createPortal(
    <PortalStyled className="portal" {...{ state,card }}>
      <div className="layout"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(showPortal({show:false}))
        }}
      ></div>
      <div className="children">
        {children}
      </div>
    </PortalStyled>
    ,
    document.getElementById('portal-root')
  );
};

export default Portal;
