const router = require("express").Router();
const injector = require("../services/injector_response");
const create_book = require("../controllers/createBookController");

router.post("/api/v1/create-book", injector(create_book.createBook));
router.get("/api/v1/get-all-books", injector(create_book.getAllBooks));
router.get('/api/v1/get-book-by-id/:id' , injector(create_book.getBookById))
router.post('/api/v1/update-book-by-id/:id' , injector(create_book.updateBookById))
router.delete('/api/v1/delete/:id' , injector(create_book.deleteBookById))

module.exports = router;
