import { useState } from "react";

const TaskInput = (props) => {
    const [enteredTask , setInteredTask] = useState('');
    function changeTaskHandler (event) {
        setInteredTask(event.target.value);
    }
    function submitDataHandler (event) {
        event.preventDefault();
        if(enteredTask.trim() === '')
            return;
        props.onAddTask(enteredTask);
        setInteredTask('');
    }
return <form className="m-4 bg-gray-500 rounded-2xl pl-6 pr-3 py-2" onSubmit={submitDataHandler}>
        <input placeholder="Add item" className="text-slate-200 bg-transparent focus:outline-none caret-gray-400"
        onChange={changeTaskHandler} value={enteredTask}></input>
        <button className="bg-blue-500 text-white rounded-lg px-2 text-xl">+</button>
    </form>
}
export default TaskInput;