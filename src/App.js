import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {TaskProvider} from './components/TaskContext';

function App() {
  return (
    <TaskProvider>
    <div className="container">
     <Header/>
     <AddTask/>
     <Tasks/>
    </div>
    </TaskProvider>
  );
}

export default App;
