import React from 'react'

class NewTask extends React.Component {
  render () {
    const {error} = this.props

    return (
      <div>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <form className='new-task'
          onSubmit={this.createTask.bind(this)}>
          <input
            type='text'
            ref='textInput'
            placeholder='Type to add new tasks' />
        </form>
      </div>
    )
  }

  createTask () {
    const {create} = this.props
    const {textInput} = this.refs

    create(textInput.value)
  }
}

export default NewTask
