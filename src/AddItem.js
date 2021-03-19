const AddItemComponent = ({ task, setTask, saveTask, clearForm }) => {
    const handleSubmit = event => {
      event.preventDefault();
      saveTask();
    };
  
    return (
      <div className='row mb-5'>
        <div className='col-6 offset-3'>
          <form action='submit' id='task-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='taskName'>Task Name</label>
              <input
                type='text'
                className='form-control'
                id='taskName'
                value={task.name}
                onChange={event => {
                  setTask({ ...task, name: event.target.value });
                }}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='taskDescription'>Description</label>
              <input
                type='text'
                className='form-control'
                id='taskDescription'
                value={task.description}
                onChange={event =>
                  setTask({ ...task, description: event.target.value })
                }
              />
            </div>
            <div className='row'>
              <div className='col form-group'>
                <label htmlFor='taskImportance'>Importance</label>
                <input
                  type='text'
                  className='form-control'
                  id='taskImportance'
                  value={task.importance}
                  onChange={event =>
                    setTask({ ...task, importance: event.target.value })
                  }
                />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <button className='btn btn-primary btn-block'>Save</button>
              </div>
              <div className='col'>
                <button className='btn btn-secondary btn-block' onClick={clearForm}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddItemComponent;