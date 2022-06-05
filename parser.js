const Papa = require('papaparse')
const { DateTime } = require('luxon')
const fs = require('fs')

function parseCsv ({ file, onError, onComplete }) {
  Papa.parse(file, {
    dynamicTyping: true,
    header: true,
    skipEmptyLines: true,
    transformHeader: h => h.trim(),
    complete: onComplete,
    error: onError
  })
}

function onComplete (csv) {
  const { data } = csv
  const dates = data.filter(item => {
    let date = DateTime.fromJSDate(new Date(item.SnsPublishTime))
    let today = DateTime.now()
    let lastMonth = today.minus({ months: 1 })
    return date.startOf('day') > lastMonth.startOf('day')
  })
  console.log(`dates`, dates)
}

function onError (error) {
  console.error(error)
}

function init () {
  try {
    const csvFile = fs.readFileSync('./results.csv', 'utf8')
    parseCsv({ file: csvFile, onComplete, onError })
  } catch (error) {
    onError(error)
  }
}

init()
