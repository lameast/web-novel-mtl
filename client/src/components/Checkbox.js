
import {useState} from 'react'

/*
Generic controlled checkbox component 
*/
const Checkbox = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const checkHandler = () => {
        setIsChecked(!isChecked)
    }
    
    return (
        <div>
            <label htmlFor={props.name}>
                {props.name}
                <input
                className='checkbox'
                type='checkbox'
                name={props.name}
                onChange={checkHandler}
            />
            </label>
        </div>
    )
}

export default Checkbox;