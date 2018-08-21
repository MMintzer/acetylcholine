const express = require('express')
const morgan = require('morgan')
const path = require('path') // may need this later

const routes = require('./api') // TODO need to set this path up

// copied the below line.  Maybe need explained
app.use(morgan('      ↓ received :method :url · responded :status :res[Content-Type]'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)

// custom error handling
app.use((err, req, res, next) => {
    // just in case
  if (!err.stack || !err.message) next(err)
    // clean up the trace to just relevant info
  const cleanTrace = err.stack
        .split('\n')
        .filter(line => {
            // comment out the next two lines for full (verbose) stack traces
          const projectFile = line.indexOf(__dirname) > -1 // omit built-in Node code
          const nodeModule = line.indexOf('node_modules') > -1 // omit npm modules
          return projectFile && !nodeModule
        })
        .join('\n')
    // colorize and format the output
  console.log(chalk.magenta('      ' + err.message))
  console.log('    ' + chalk.gray(cleanTrace))
    // send back error status
  res.status(err.status || 500).end()
})

module.exports = app
