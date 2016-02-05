import { Tasks } from '/lib/collections'
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

export default function () {
  Meteor.methods({
    'tasks.create'(_id, text) {
      check(_id, String)
      check(text, String)

      // Show the latency compensations
      Meteor._sleepForMs(500)

      // XXX: Do some user authorization
      const task = {_id, text}
      Tasks.insert(task)
    }
  })
}
