const express = require('express')
const { createUser, getUser, getUserById, updateUser, deleteUserById } = require('../controller/userController')
const router = express.Router()


router.get('/', (req, res) => {
    res.send("Api is working fine")
})


router.post('/api/users', createUser)
router.get('/api/users', getUser)
router.get('/api/users/:id', getUserById)
router.put('/api/users/:id', updateUser)
router.delete('/api/users/:id', deleteUserById)

module.exports = router