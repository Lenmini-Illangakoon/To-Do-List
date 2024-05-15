import React from "react";
import 'InputFormStyle.css';

// The InputForm component handles the input field and add button for new to-do items
const InputForm = ({input, setInput, handleAddToDo}) =>{
    return (
        <div className="input-form">
            {/* Input field for new to-do items. The value is controlled by the input prop */}
            <input type="text" 
            value = {input} 
            onChange={(e)=> setInput(e.target.value)} 
            placeholder="Add to-do">
            </input>
            {/* Button to add the new to-do item */}
            <button onClick={handleAddToDo}> Add </button>
        </div>
    )
}

export default InputForm;


//value = {input} onChnage={(e)=> setInput(e.target.value)}  ???

/**
 * const InputForm = (props) =>{
    return (
        <div>
            <form>
            <input type="text" placeholder="Add to-do"></input>
            <
            </form>
        </div>
    )
}
 */
// what does this do? import React from "react"