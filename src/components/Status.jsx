const Status = (props) => {
    let content = <p className="text-gray-400">you got everything! ready to go</p>;
    if(props.tasks.length!=0) 
        content = <p className="text-gray-400">you have {props.tasks.length} on your list!</p>
    return  <div className="absolute bottom-0 left-0 bg-cyan-900 w-full py-3 rounded text-center">
        {content}
    </div>
}
export default Status;