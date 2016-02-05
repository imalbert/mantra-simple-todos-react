import React from 'react'
import {mount} from 'react-mounter'

import MainLayout from './components/main_layout.jsx'
import TaskList from './containers/tasklist'
import NewTask from './containers/newtask'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout)

  FlowRouter.route('/', {
    name: 'front',
    action () {
      mount(MainLayoutCtx, {
        newTask: () => (<NewTask />),
        content: () => (<TaskList/>)
      })
    }
  })
}
