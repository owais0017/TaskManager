export default function Task({task,handleDelete}) {
    
    return (
        <div>
           { task.map( (task , index) => (
             <div key={index} className="frame-box">
                <div className="task-header">
                    <div className="text">{task}</div>
                    <button className="first-button" onClick={()=>{handleDelete(index)}}>Delete</button>
                </div>
             </div>
            ))}
        </div>
    );
}