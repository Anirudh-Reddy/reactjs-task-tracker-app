import Task from './Task'
const Tasks = ({tasks,onDelete,onToggleReminder}) => {
    return (
        <div>
          {tasks.map((task,i)=>(
          <Task 
          onDelete={onDelete} 
          onToggleReminder={onToggleReminder} 
          key={i} 
          task={task}
          /> 
         ))}          
        </div>
    )
}

export default Tasks
