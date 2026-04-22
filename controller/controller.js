const Product = require("../models/book.model");
const book = require("../models/book.model");


// get all books----------------------------------------
const getallBooks = async (req,res) => {
  try{
    const allBooks = await book.find({});

    if(allBooks.length > 0){
      res.status(200).json({
        success: true,
        message: 'List All Books Fetched Successfully',
        data: allBooks
      })
    }else{
        res.status(404).json({
          success: false,
          message: 'No books Found'
        })
      }

  }catch (error){
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went Wrong'
    })  
  }
}

// books by id ----------------------------------------------

const booksById = async (req,res) => {
  try {
    const id = req.params.id;
    const singleBook = await Product.findById(id)

    if(singleBook){
      res.status(200).json({
        success: true,
        message: 'Book fetched successfully',
        data: singleBook
      })
    }else{
      res.status(404).json({
        success: false,
        message: 'Book not found'
      })
    }

  } catch (error) {
    res.status(500).json({
      success: false,
      message:" something went wrong"
    })
  }
}

// create book----------------------------------------------------

const createBook = async  (req,res) => {
   try {
    const newBook = await Product.create(req.body)
      res.status(201).json({
        success: true,
        message: 'Book Cerated Successfully',
        data: newBook
      })

   } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong'
    })
   }
} 

// update book------------------------------------------------------------

const updateBook = async(req,res) => {
  try {
    const id = req.params.id;
    const updatedbook = await Product.findByIdAndUpdate(id,req.body, {new: true})

    if(updatedbook){
      res.status(200).json({
        success: true,
        message: "book updated successfully"
      })
    }else{
        res.status(404).json({
          sucess: false,
          message: 'Book not found'
        })
    }
  } catch (error) {
    res.status(500).json({
      sucess:false,
      message: 'something went wrong'
    })
  }
}

//delete book-----------------------------------------------------------

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteBook = await Product.findByIdAndDelete(id)

    if(deleteBook){
      res.status(200).json({
        success: true,
        message: 'Book Deleted successfuly'
      })
    }else{
        res.status(404).json({
          success: false,
          message: 'Book not found'
        })
      }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong'
    })
  }
}



module.exports = {
  getallBooks,
  booksById,
  createBook,
  updateBook,
  deleteBook
}