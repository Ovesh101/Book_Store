import { useState , useEffect } from "react"
import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"
import { useParams, useNavigate } from "react-router-dom"

import axios from "axios"
import ShowList from "./ShowList"
import { useSnackbar } from "notistack"  


const DeleteBook = () => {
  const [loading , setLoading] = useState(false);
  const [book , setBook] = useState({});
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:3000/books/${id}`).then((response)=>{
      setLoading(false);
      setBook(response.data.data);
    }).catch((err)=>{
      setLoading(false);
      alert("Error Occured while fetching the data");
      console.log(err.message);
    })
  } , [])

  const handleDeleteButton = ()=>{
    setLoading(true);
    axios.delete(`http://localhost:3000/books/${id}`).then(()=>{
      setLoading(false);
      enqueueSnackbar("Book Deleted Successfully" , {variant:"success"})
      navigate("/")

    }).catch((err)=>{
      setLoading(false);
      enqueueSnackbar("Error While Deleting" , {variant:"error"})
    })

  }
  return (
    <div className="py-4">
      <BackButton />
      <h1 className="text-3xl my-4">
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col items-center border-2 border-sky-500 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl m-4 ">Are you Sure you want to delete this book?</h3>
          <div className='felx flex-col border-2 border-sky-100 rounded-xl w-fit p-4'>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray-500' >ID</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray-500' >Title</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray-500' >Author</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray-500' >Publish Year</span>
            <span>{book.publishedYear}</span>
          </div>
        </div>


          <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteButton}>Yes Delete it..</button>
        </div>
      </h1>
    </div>
  )
}

export default DeleteBook