const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth')
const bookController = require('../controllers/books.controllers');
router.get("/",checkAuth,bookController.getAll);
router.post("/add",checkAuth,bookController.addBook);
// router.get("/:_id",bookController.getSingleBook);
router.put("/:_id",checkAuth, bookController.updatebook);
router.delete("/:_id",checkAuth, bookController.deleteBook);
module.exports = router;