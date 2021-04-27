import Task from './Task'
const Tasks = ({tasks,onDelete,onToggleReminder}) => {
    return (
        <div>
          {tasks.map((task)=>(
          <Task 
          onDelete={onDelete} 
          onToggleReminder={onToggleReminder} 
          key={task.id} 
          task={task}
          /> 
         ))}          
        </div>
    )
}

export default Tasks
