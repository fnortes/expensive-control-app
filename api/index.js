require('dotenv').config()
require('./mongo')

const express = require('express')
const app = express()
const cors = require('cors')

// const logger = require('./middlewares/logger')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')

const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const expensiveControlsRouter = require('./controllers/expensiveControls/expensiveControls')

app.use(cors())
app.use(express.json())
app.use(express.static('../app/build'))

// app.use(logger)

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/expensiveControls', expensiveControlsRouter)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')

  app.use('/api/testing', testingRouter)
}

app.use(errorHandler)

app.use(notFound)

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = { app, server }
