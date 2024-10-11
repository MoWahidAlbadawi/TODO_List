import { useState , useEffect } from "react";
import TaskInput from "./components/TaskInput"
import TaskItem from "./components/TaskItem";
import Status from "./components/Status";

function App() {
  const [tasks , setTasks] = useState();
    function RecieveNewTask (task) {
      setTasks((prevTasks) => [...prevTasks , task]);
    }
    function deleteItem (myTask) {
      setTasks((tasks) => tasks.filter((task) => task!==myTask));
    }
    let messageTasks = '';k
      messageTasks = <p className="text-gray-400 text-semibold text-center ml-4">you are done!</p>
  return (
    <>
    <div className="flex justify-center mt-24">
      <div className="bg-cyan-900 rounded-lg  py-6 px-2">
      <h1 className="font-extrabold #6b7 text-gray-400 text-xl tracking-widest text-center">Task Master</h1>
      <TaskInput onAddTask = {RecieveNewTask}/>
      <span className="font-extrabold text-gray-400 text-left ml-4">To Do</span>
      {messageTasks}
      <ol>
        {tasks.map((task) => (
          <TaskItem task = {task} onDeleteItem= {deleteItem}/>
        ))}
      </ol>
      </div>
    </div>
    <Status tasks={tasks}/>
    </>
  )
}

export default App
