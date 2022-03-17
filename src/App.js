import React, {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {TaskProvider} from './components/TaskContext';

function App() {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <TaskProvider>
    <div className="container">
     <Header showAdd={showAdd} setShowAdd={setShowAdd} />
     {showAdd ? <AddTask/> : ''}
     <Tasks/>
    </div>
    </TaskProvider>
  );
}

export default App;
