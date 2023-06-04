

/*
Generic controlled checkbox component 
*/
const Checkbox = (props) => {
    const checkHandler = () => {

        const newBoxes = [...props.boxes];
        const index = newBoxes.findIndex((box) => box.name === props.name);
        newBoxes[index].isChecked = !newBoxes[index].isChecked
        props.setBoxes(newBoxes);
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