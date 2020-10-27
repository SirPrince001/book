const Book = require("../models/book");
const { Response, ResponseError } = require("../utils/response");
const mongooose = require("mongoose");
require("dotenv").config();

exports.createBook = async (request, response) => {
  let { book_title, author_name, age, genre } = request.body;

  //check if a book with the same name exist

  const existingBook = await Book.findOne({
    book_title: request.body.book_title,
  });
  if (!existingBook) {
    let newBook = new Book({
      book_title,
      author_name,
      age,
      genre,
    });
    let data = await newBook.save();
    return new Response(200, {
      status: "Success",
      result: data,
    });
  } else {
    throw new ResponseError(400, " Sorry, Book with the same Book Title exist");
  }
};

exports.getAllBooks = async (request, response) => {
  try {
    let data = await Book.find({});
    return new Response(200, {
      status: "Success",
      result: data,
    });
  } catch (error) {
    throw new ResponseError(
      400,
      ` Sorry, We could not get the book due to the error ${error}`
    );
  }
};

exports.getBookById = async (request, response) => {
  try {
    let getbook_by_Id = await Book.findById({ _id: request.params.id });
    return new Response(200, {
      status: "Success",
      result: getbook_by_Id,
    });
  } catch (error) {
    throw new ResponseError(
      400,
      `Sorry, We could not get any book by ID due to the error ${error}`
    );
  }
};

exports.updateBookById = async (request, response) => {
  try {
    // set data to update the book with
  //let bookId = request.params.id;
    let { book_title, author_name, age, genre } = request.body;
    // if (!mongooose.isValidObjectId(bookId))
    //   throw new ResponseError(
    //     400,
    //     `Sorry , No Author with this book ID ${bookId}`
    //   );
    // let updateBook = new Book({
    //   book_title,
    //   author_name,
    //   age,
    //   genre,
    // });

   let updateBook =  await Book.findByIdAndUpdate(request.params.id, {
       book_title,author_name, age,genre
   },{new:true});
    return new Response(200, {
      status: "Success",
      result: updateBook,
    });
  } catch (error) {
    throw new ResponseError(
      400,
      `Sorry, We could not update any book by ID due to the error ${error}`
    );
  }
};

exports.deleteBookById = async (request, response) => {
  try {
    let data = await Book.deleteOne({ _id: request.params.id });
    return new Response(200, {
      status: "Success",
      result: data,
    });
  } catch (error) {
    throw new ResponseError(
      400,
      `Sorry, We could not delete any book by ID due to the error ${error}`
    );
  }
};
