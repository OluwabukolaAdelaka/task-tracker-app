import React, {useContext} from 'react';
import {FaTrash} from 'react-icons/fa';
import { TaskContext } from './TaskContext';

const Task = ({task}) => {
  const [tasks, setTasks] = useContext(TaskContext);

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task));
  }
  return (
    <div 
      className={`task ${task.reminder ? 'reminder' : ''}`} 
      onMouseUp={() => toggleReminder(task.id)}>
     <h3>{task.text} <FaTrash onClick={() => handleDelete(task.id)} style={{color: 'darkRed'}}/></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task