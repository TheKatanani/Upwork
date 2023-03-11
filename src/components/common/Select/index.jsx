import { SelsctStyled } from "./styled";

const Select = ({ value, onChange, options=[] ,defualt}) => (
    <SelsctStyled defualt={defualt} value={value} onChange={onChange}>
        {options.map((option,i)=> (
            <option key={i} value={option.value}>{option.label}</option>
        ))}
    </SelsctStyled>
);

export default Select;