import NewTask from '../components/newtask.jsx'
import { useDeps, composeWithTracker, composeAll } from 'mantra-core'

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context()
  const error = LocalState.get('SAVING_ERROR')
  onData(null, {error})

  // clearErrors when unmounting the component
  return clearErrors
}

export const depsMapper = (context, actions) => ({
    create: actions.tasks.create,
    clearErrors: actions.tasks.clearErrors,
    context: () => context
})

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewTask)
