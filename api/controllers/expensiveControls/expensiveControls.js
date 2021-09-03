const expensiveControlsRouter = require('express').Router()
const userExtractor = require('../../middlewares/userExtractor')
const createExpensiveControl = require('./actions/createExpensiveControl')
const getAllExpensiveControlsByUser = require('./actions/getAllExpensiveControlsByUser')

expensiveControlsRouter.get(
  '/byUser',
  userExtractor,
  getAllExpensiveControlsByUser
)

// expensiveControlsRouter.get('/:id', async (req, res, next) => {
//   const { id } = req.params
//   try {
//     const result = await Note.findById(id).populate('user', {
//       username: 1,
//       name: 1
//     })
//     if (result === null) {
//       next()
//     } else {
//       res.json(result)
//     }
//   } catch (err) {
//     next(err)
//   }
// })

// expensiveControlsRouter.put('/:id', userExtractor, async (req, res, next) => {
//   const { id } = req.params
//   const note = req.body

//   const newNoteInfo = {
//     content: note.content,
//     important: note.important
//   }

//   try {
//     const result = await Note.findByIdAndUpdate(id, newNoteInfo, { new: true })

//     if (result === null) {
//       next()
//     } else {
//       res.json(result)
//     }
//   } catch (err) {
//     next(err)
//   }
// })

// expensiveControlsRouter.delete(
//   '/:id',
//   userExtractor,
//   async (req, res, next) => {
//     const { id } = req.params

//     try {
//       const result = await Note.findByIdAndDelete(id)

//       if (result === null) {
//         next()
//       } else {
//         res.status(204).json(result)
//       }
//     } catch (err) {
//       next(err)
//     }
//   }
// )

expensiveControlsRouter.post('/', userExtractor, createExpensiveControl)

module.exports = expensiveControlsRouter
