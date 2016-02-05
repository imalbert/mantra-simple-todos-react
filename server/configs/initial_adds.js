import { Tasks } from '/lib/collections'

export default function () {
  if (!Tasks.findOne()) {
    for (let i = 1; i <= 5; i++) {
      const text = `This is my task #${i}`
      Tasks.insert({text})
    }
  }
}
