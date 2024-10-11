import { useState , useEffect} from "react";
import TaskInput from "./components/TaskInput"
import TaskItem from "./components/TaskItem";
import Status from "./components/Status";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [tasks , setTasks] = useState([]);
  const [newTask , setNewTask] = useState(null);
  const [userId , setUserId] = useState(null);
  const [error , setError] = useState(null);
  function RecieveNewTask (task) {
    setNewTask(task);
  }
    let messageTasks = '';
    useEffect(() => {
      let storedUserId = localStorage.getItem('userId');
      if(!storedUserId) {
        storedUserId = uuidv4();
        localStorage.setItem('userId',storedUserId);
      }
      setUserId(storedUserId);
    } ,[]);  
    useEffect(() => {
      async function sendingData() {
        try {
        const response = await fetch(`https://foodapp-5ab37-default-rtdb.firebaseio.com//tasks/${userId}.json`,{
          method : 'POST',
          body : JSON.stringify(newTask),
        });
        if(!response.ok) 
          throw new Error('something wrong please try again!');
      }
      catch {
        console.log('failed send task!');
      }
    }
      sendingData();
    },[newTask]);
    useEffect(() => {
      async function gettingData() {
        try {
        const response = await fetch(`https://foodapp-5ab37-default-rtdb.firebaseio.com//tasks/${userId}.json`);
        if(!response.ok) {
          throw new Error('something wrong please try again!');
      }
      const data = await response.json();
      const tasksFromDb = [];
      for (const key in data) {
        tasksFromDb.push({
          id : key,
          task : data[key],
        }); 
      }
      setTasks(tasksFromDb);
    }
    catch(error) {
      setError(error.message);
    }
    }
    gettingData();
    },[tasks]);
    if(tasks.length===0)
      messageTasks = <p className="text-gray-400 text-semibold text-center ml-4">you are done!</p>
      return (
    <>
    <div className="flex justify-center mt-24">
      <div className="bg-cyan-900 rounded-lg  py-6 px-2">
      <h1 className="font-extrabold #6b7 text-gray-400 text-xl tracking-widest text-center">Task Master</h1>
      <TaskInput onAddTask = {RecieveNewTask}/>
      <span className="font-extrabold text-gray-400 text-left ml-4">To Do</span>
      {messageTasks}
      {error && <p>{error}</p>}
              <ul>
        {tasks.map((task) => (
          <TaskItem task = {task.task} y={task.id} userId={userId}/>
        ))}
      </ul>
      </div>
    </div>
    <Status tasks={tasks}/>
    </>
  )
}

export default App
