export default {
  create({Meteor, LocalState, FlowRouter}, text) {
    if (!text) {
      return LocalState.set('SAVING_ERROR', 'Task text is required!')
    }

    LocalState.set('SAVING_ERROR', null)

    const id = Meteor.uuid()

    // There is a method stub for this in the config/methods_stubs
    // That's how we are doing latency compensation
    Meteor.call('tasks.create', id, text, (error) => {
      if (error) {
        return LocalState.set('SAVING_ERROR', error.message)
      }
    })
    FlowRouter.go(`/post/${id}`)
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null)
  }
}
