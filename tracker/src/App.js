import { useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';

function App() {
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


  return (
    <div className="container">
      <Header  />
      <Tasks  tasks={tasks}/>
    </div>
  );
}

export default App;
