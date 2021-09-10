require('dotenv').config()
require('./mongo')

const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

// const logger = require('./middlewares/logger')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')

const usersRouter = require('./controllers/users/users')
const expensiveControlsRouter = require('./controllers/expensiveControls/expensiveControls')

app.use(cors())
app.use(express.json())

// app.use(logger)

app.use('/api/users', usersRouter)
app.use('/api/expensiveControls', expensiveControlsRouter)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')

  app.use('/api/testing', testingRouter)
}

app.use(errorHandler)
app.use(notFound)

const appDir = path.resolve(__dirname, '../app/build')
app.use(express.static(appDir))

app.get('*', function (_req, res) {
  res.sendFile(path.resolve(appDir, 'index.html'))
})

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = { app, server }
