import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import {TaskProvider} from './components/TaskContext';

function App() {
  return (
    <TaskProvider>
    <div className="container">
     <Header/>
     <Tasks/>
    </div>
    </TaskProvider>
  );
}

export default App;
