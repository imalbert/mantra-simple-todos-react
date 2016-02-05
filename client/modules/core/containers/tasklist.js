import TaskList from '../components/tasklist.jsx'
import { useDeps, composeWithTracker, composeAll } from 'mantra-core'

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context()

  if (Meteor.subscribe('tasks.list').ready()) {
    const tasks = Collections.Tasks.find().fetch()
    onData(null, {tasks})
  }
}

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(TaskList)
