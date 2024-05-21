import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import backButton from '../components/backButton'
import Spinner from '../components/Spinner'

const ShowList = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:3000/books/${id}`).then((response) => {
      setBook(response.data.data);
      setLoading(false);
      console.log(response.data.data);
    }).catch((err) => {
      console.log(err.message);
      setLoading(false)
    })

  
  } , [])
  return (
    <div className='p-4'>
      <backButton />
      <h1 className='text-3xl my-4'> Show Book</h1>
      {
      loading ? (<Spinner />) :
      (
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
      )
      }
    </div>

    
  )
}

export default ShowList