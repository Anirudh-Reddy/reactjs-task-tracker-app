import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
function App() {
  const [tasks, setTasks] = useState(
    [
        {id:1,text:'Meeting',day:'5th April',reminder:false},
        {id:2,text:'Shopping',day:'15th May',reminder:true},
        {id:3,text:'Groceries',day:'20th March',reminder:false},
    ],
)
//click Add task button
let showForm = false;
const onClickAddTask =()=>{
  showForm = !showForm
  console.log(showForm)
}
//delete tasks
const deleteTask = (id)=>{
  setTasks(tasks.filter(task=>task.id !== id))
}
//Toggle the reminder
const toggleReminder = (id)=>{
  setTasks(
    tasks.map(task=>
      task.id ===id ? {...task,reminder:!task.reminder}
      : task)
      )
}
const addTask = ()=>{

}
  return (
    <div className="container">
      <Header onClickAddTask={onClickAddTask}/>
      <div hidden={showForm}><AddTask/></div>
      {tasks.length>0 ? <Tasks onDelete={deleteTask} onToggleReminder={toggleReminder} tasks={tasks}/>
        : 'No Tasks to show!!'}
    </div>
  );
}
export default App;
