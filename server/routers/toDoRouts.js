const Router = require('express')
const toDoControllers = require('../controllers/toDoControllers')
const router = new Router()


router.get('/',toDoControllers.getAll)
router.post('/',toDoControllers.newToDo)
router.delete('/:id',toDoControllers.deleteToDo)
router.patch('/',toDoControllers.updateTuoDo)

module.exports = router
