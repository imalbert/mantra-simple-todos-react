import React from 'react'

class TaskList extends React.Component {
  render () {
    const {tasks} = this.props

    return (
      <div className='task-list'>
        <ul>
          {tasks.map((task) => {
            // Give tasks a different className when they are checked off,
            // so that we can style them nicely in CSS
            const taskClassName = task.checked ? 'checked' : ''
            const id = task._id

            return (
              <li className={taskClassName}>
                <button
                  className='delete'
                  data-task-id={id}
                  onClick={this.deleteThisTask.bind(this)}>&times;</button>

                <input
                  type='checkbox'
                  readOnly
                  data-task-id={id}
                  checked={task.checked}
                  onClick={this.toggleChecked.bind(this)} />

                <span key={task._id} className='text'>{task.text}</span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  toggleChecked (event) {
    const {toggle} = this.props
    const checked = event.target.checked
    const taskId = event.target.dataset.taskId

    // console.log(checked, taskId)
    console.log(event.target.checked)
    toggle(taskId, checked)
  }

  deleteThisTask (event) {
    const {del} = this.props
    const taskId = event.target.dataset.taskId

    console.log(taskId)
    del(taskId)
  }
}

export default TaskList
