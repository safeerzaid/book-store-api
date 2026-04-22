
const express = require('express')
const router = express.Router()

const {getallBooks, booksById,createBook, updateBook, deleteBook} = require('../controller/controller')

router.get('/books', getallBooks)
router.get('/books/:id', booksById)
router.post('/books', createBook)
router.put('/books/:id', updateBook)
router.delete('/books/:id', deleteBook)
module.exports = router;