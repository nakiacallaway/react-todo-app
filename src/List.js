const ListComponent = ({tasks, removeTask}) => {


  return (
    <div className='row'>
      <div className='col'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Importance</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => {
              return (
              <tr>
                <td className='my-1'>{task.name}</td>
                <td className='my-1'>{task.description}</td>
                <td className='my-1'>{task.importance}</td>
                <td>
                <div className='my-1'>
                    <button className='btn btn-success' onClick={() => removeTask(task.id)}>
                      Done
                    </button>
                  </div>
                  </td>
                </tr>
              );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
  
export default ListComponent;
  