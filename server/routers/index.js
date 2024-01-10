const Router = require('express')
const router = new Router()
const toDo = require('./toDoRouts')

router.use('/todo',toDo)

module.exports = router
