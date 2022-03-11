import { useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState 
  (false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Febuary 5th at 3:00 pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Student Meeting',
        day: 'Febuary 12th at 2:00 pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Febuary 20th at 1:00 pm',
        reminder: true,
    },
]) 

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 
  10000) + 1

  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}


//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==
  id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id 
  ? {...task, reminder: !task.reminder} : task))

}
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask 
        (!showAddTask)} showAdd={showAddTask} />
      {showAddTask &&<AddTask  onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks  tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder}/> : ' No TASK TO DISPLAY '}
    </div>
  );
}

export default App;
