import React from 'react'
import { CheckStyled } from './style.js'
const Checkbox = (props) => {
    return (
        <CheckStyled>
            <label htmlFor={props.id} className="checkbox container">{props.children}
                <input type="checkbox" id={props.id} onChange={props.onChange} />
                <span class="checkmark"></span>
            </label>
        </CheckStyled>
    )
}
export default Checkbox;