import express from 'express'
import { Book } from '../models/bookModel.js';


const router = express.Router();


//  Save a book info to database
router.post( '/', async ( req, res ) => {
    try {
       if(!req.body.title || !req.body.author || !req.body.publishedYear) {
        return res.status(400).send({message: 'Please provide all the required fields.'});

       }
       const newBook = {
        title : req.body.title,
        author : req.body.author,
        publishedYear : req.body.publishedYear
       }

       const book = await Book.create( newBook ); // create a new book object
       return res.status(201).send(book);
     
 
    } catch (error) {
        res.status(500).send({message:"There is some error by addind the book"})
    }
})

//  Get All Books Routes

router.get("/" , async (req , res)=>{
    try {
        
        const getAllBooks = await Book.find({});
        res.status(200).json({count:getAllBooks.length , data:getAllBooks})
    } catch (error) {
        res.status(500).send({message:error.message})
        
    }

})
//  Get a book by id Routes
router.get("/:id" , async (req , res)=>{
    try {
        const {id} = req.params;
        const singleBook = await Book.findById(id)
        if(!singleBook) return res.status(404).send({message:"Book not found"})
        res.status(200).json({data:singleBook})
    } catch (error) {
        res.status(500).send({message:error.message})
        
    }

})
//  Update a  book info Routes
router.patch("/:id"  , async (req , res)=>{
    try {
        // if(!req.body.title || !req.body.author || !req.body.publishedYear) {
        //     return res.status(400).send({message: 'Please provide all the required fields.'});
    
        // }
        const {id} = req.params;
        const updateBook = await Book.findByIdAndUpdate(id , req.body , {new:true})
        if(!updateBook) return res.status(404).send({message:"Book not found"})
        res.status(200).json({data:updateBook , message:"Book Updated Successfully"})
        
    } catch (error) {
        res.status(500).send({message:error.message})
        
    }

})

// Delate a  book 

router.delete("/:id" , async (req , res)=>{
    try {
        const {id} = req.params;
        const deleteBook = await Book.findByIdAndDelete(id)
        if(!deleteBook) return res.status(404).send({message:"Book not found to perform delete action"})
        res.status(200).json({message:"Book Deleted Successfully"})

    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})

export default router