import { Tasks } from '/lib/collections'
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

export default function () {
  Meteor.methods({
    'tasks.create' (_id, text) {
      check(_id, String)
      check(text, String)

      let now = new Date()
      // Show the latency compensations
      Meteor._sleepForMs(500)

      // XXX: Do some user authorization
      const task = {_id, text, createdAt: now, checked: false}
      Tasks.insert(task)
    },
    'tasks.toggle' (_id, checked) {
      check(_id, String)
      check(checked, Boolean)

      // Show the latency compensations
      Meteor._sleepForMs(500)

      // Set the checked property to the opposite of its current value
      Tasks.update(_id, {
        $set: { checked: checked }
      })
    },
    'tasks.delete' (_id) {
      check(_id, String)

      // Show the latency compensations
      Meteor._sleepForMs(500)

      Tasks.remove(_id)
    }
  })
}
