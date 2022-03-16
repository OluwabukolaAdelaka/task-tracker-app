import React, {useState, createContext} from 'react';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Go shopping',
    day: 'Mar 20 at 10am',
    reminder: false
    },
    {
      id: 2,
      text: 'Sort courses',
      day: 'Mar 13 at 9pm',
      reminder: false
    },
    {
      id: 3,
      text: 'Call baby',
      day: 'Mar 11 at 2pm',
      reminder: false
    },
    {
      id: 4,
      text: 'Do laundry',
      day: 'Mar 16 at 4pm',
      reminder: false
    }
  ])
  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TaskContext.Provider>
  )
}
