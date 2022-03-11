import React, {useContext} from 'react';
import Task from './Task';
import { TaskContext } from './TaskContext';

const Tasks = () => {
    // eslint-disable-next-line no-unused-vars
    const [tasks, setTasks] = useContext(TaskContext)
  return (
    <div>{tasks.map(task => (
        <Task key={task.id} task={task} />
    ))}</div>
  )
}

export default Tasks;