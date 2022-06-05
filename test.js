const { handler } = require('./lambda')
const event = require('./event')
handler(event, null, () => {
  console.log(`Finish!`)
})
