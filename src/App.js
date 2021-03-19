import {useState} from 'react';

import ListComponent from './List';
import AddItemComponent from './AddItem';


import './App.css';

let taskListData = [
  {
      id: '1',
      name: 'Generate Task', 
      description: 'Make an item on the to-do list.', 
      importance: 5,
  }
]

const App = () => {
  const [alert, setAlert] = useState(false);
  const [tasks, setTasks] = useState(taskListData);
  const [task, setTask] = useState({
    id: '',
    name: '', 
    description: '', 
    importance: '',
  });
  const saveTask = () => {
    if (task.id) {
     let updatedTasks = tasks.filter(m => m.id !== task.id);
      updatedTasks.push(task);
      updatedTasks.sort((taskA, taskB) => {
        return taskA.id - taskB.id;
      });
      setTasks(updatedTasks);
    } else {
      task.id = Date.now();
      setTasks([...tasks, task]);
    }
    showAlert();
    clearForm();
  };

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  const clearForm = () => {
    setTask({
      id: '',
      name: '', 
      description: '', 
      importance: '',
    });
  };

  const removeTask = taskId => {
    if (window.confirm('All done?')) {
      let newTasks = tasks.filter(m => m.id !== taskId);
      setTasks(newTasks);
    }
  };

  return (
    <div className='container'>
      {alert ? (
        <div className='row'>
          <div className='col'>
            <div class='alert text-center alert-success' role='alert'>
              Let's get it done!  Carpe Diem!
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className='row text-center'>
        <div className='col'>
          <h2>Welcome to Nik's task List!</h2>
        </div>
      </div>

      <AddItemComponent
        task={task}
        setTask={setTask}
        saveTask={saveTask}
        clearForm={clearForm}
      />
      <ListComponent
        tasks={tasks}
        removeTask={removeTask}
        setTask={setTask}
      />
    </div>
  );
};


export default App;
