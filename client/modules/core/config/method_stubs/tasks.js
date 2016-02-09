import { check } from 'meteor/check'

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'tasks.create' (_id, text) {
      check(_id, String)
      check(text, String)

      let now = new Date()

      const task = {
        _id, text,
        createdAt: now,
        checked: false,
        saving: true
      }

      Collections.Tasks.insert(task)
    },
    'tasks.toggle' (_id, checked) {
      check(_id, String)
      check(checked, Boolean)

      // Set the checked property to the opposite of its current value
      Collections.Tasks.update(_id, {
        $set: { checked: checked }
      })
    },
    'tasks.delete' (_id) {
      check(_id, String)

      Collections.Tasks.remove(_id)
    }
  })
}
