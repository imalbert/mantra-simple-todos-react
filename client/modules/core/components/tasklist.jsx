import React from 'react'

const TaskList = ({tasks}) => (
  <div className='task-list'>
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          <a href={`/task/${task._id}`}>{task.text}</a>
        </li>
      ))}
    </ul>
  </div>
)

export default TaskList
