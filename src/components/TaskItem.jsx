const TaskItem = (props) => {
    async function deleteItem () {
        try {
        const response = await fetch(`https://foodapp-5ab37-default-rtdb.firebaseio.com/tasks/${props.userId}/${props.y}.json` ,{
            method : 'DELETE',
        });
    }
    catch {
        console.log('del failed');
    }
    }  
    return  <li className="text-slate-200 mx-4 mt-2 bg-slate-500 rounded pl-4 pr-3 py-2 flex justify-between">
        <p>{props.task}</p>
        <img width="32" height="32" src="https://img.icons8.com/fluency/48/filled-trash.png" alt="filled-trash"
         className="cursor-pointer" onClick={deleteItem}/>
    </li>
}
export default TaskItem;