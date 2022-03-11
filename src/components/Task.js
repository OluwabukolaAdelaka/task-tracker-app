import React from 'react';
import {FaTrash} from 'react-icons/fa';

const Task = ({task}) => {
  return (
    <div className='task'>
        <h3>{task.textToDo} <FaTrash/></h3>
        <p>{task.day}</p>

    </div>
  )
}

export default Task;