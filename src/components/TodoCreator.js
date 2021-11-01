import React, {useState} from "react";

function TodoCreator({createTodoItem}) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        createTodoItem({content: input});
        setInput('');

    }

    return(
        <div>
            <br/>
            <br/>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <label>
                    Add Todo Item:
                    <input type="text" placeholder='New task' autoFocus
                           value={input} onChange={(e)=> setInput(e.target.value)}
                    />
                </label>
                <input type="submit" value="Create" />
            </form>

        </div>
    )
}
export default TodoCreator