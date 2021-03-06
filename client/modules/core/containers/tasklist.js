import TaskList from '../components/tasklist.jsx'
import { useDeps, composeWithTracker, composeAll } from 'mantra-core'

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context()

  if (Meteor.subscribe('tasks.list').ready()) {
    const tasks = Collections.Tasks.find({}, { sort: {createdAt: -1} }).fetch()

    onData(null, {tasks})
  }
}

export const depsMapper = (context, actions) => ({
  toggle: actions.tasks.toggle,
  del: actions.tasks.del,
  clearErrors: actions.tasks.clearErrors,
  context: () => context
})

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TaskList)
