import React, {useState, useContext} from 'react';
import { TaskContext } from './TaskContext';

const AddTask = () => {
    const [tasks, setTasks] = useContext(TaskContext);

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
    }
    const handleSave = () => {
        setTasks([...tasks, {text: text, day: day, reminder: false, id: Math.floor(Math.random() * 10000)}]);
        
        setText('');
        setDay('');
        setReminder(false);
    }
  return (
    <form className='add-form' onSubmit={formSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type="text" placeholder='Add task' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Day &amp; Time</label>
            <input type="text" placeholder='Add day &amp; time' value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control-check'>
            <label>Set Reminder</label>
            <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value='Save' className='btn btn-block' onClick={handleSave}/>
    </form>
  )
}

export default AddTask;