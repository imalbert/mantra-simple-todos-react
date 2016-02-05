import React from 'react'

const Layout = ({content = () => null, newTask}) => (
  <div className='container'>
    <header>
      <h1>Todo List</h1>

      {newTask()}
    </header>

    <div>{content()}</div>

    <footer>
      <small>
        Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> & Meteor.
      </small>
    </footer>
  </div>
)

export default Layout
