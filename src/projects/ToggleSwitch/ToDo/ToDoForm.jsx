import { useState } from "react";
export const ToDoForm = ({onAddToDo}) =>
{
    const [inputValue, setInputValue] = useState({});
    const handleInput =(value) =>
    {
        setInputValue({id: value, content:value, checked: false});
    };
     const handleSubmit =(event) =>
    {
        event.preventDefault();
        onAddToDo(inputValue);
        setInputValue({ id: '', content: '', checked: false }); // Reset input value after submission
    }
    return(<section className="form">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" className="todo input" autoComplete='off' value={inputValue.content} onChange={(event)=> handleInput(event.target.value)} />

                    </div> 
                    <div>
                        <button type="submit" className="todo-btn">Add Task</button>
                    </div>
                </form>
            </section>);
}