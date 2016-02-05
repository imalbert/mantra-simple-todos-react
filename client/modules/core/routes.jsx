import React from 'react'
import {mount} from 'react-mounter'

import MainLayout from './components/main_layout.jsx'
import TaskList from './containers/tasklist'

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout)

  FlowRouter.route('/', {
    name: 'front',
    action () {
      mount(MainLayoutCtx, {
        content: () => (<TaskList />)
      })
    }
  })
}

