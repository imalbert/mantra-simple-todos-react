import { check } from 'meteor/check'

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'tasks.create'(_id, text) {
      check(_id, String)
      check(text, String)

      let now = new Date()

      const task = {
        _id, text,
        createdAt: now,
        saving: true
      }

      Collections.Tasks.insert(task)
    }
  })
}
