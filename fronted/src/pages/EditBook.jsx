import { useEffect , useState } from "react"
import axios from "axios"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import { useSnackbar } from "notistack"
import { useNavigate, useParams } from "react-router-dom"


const EditBook = () => {
  const [title , setTitle] = useState("");
  const [author , setAuthor] = useState("");
  const [publishedYear , setPublishedYear] = useState("");
  const [loading , setLoading] = useState(false);
  const {id} = useParams();
  const {enqueueSnackbar}  = useSnackbar();

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3000/books/${id}`).then((response)=>{
      setLoading(false);
      setAuthor(response.data.data.author);
      setTitle(response.data.data.title);
      setPublishedYear(response.data.data.publishedYear);

    }).catch((err)=>{
      console.log(err.message);
      setLoading(false)
    })
  } , [])

  const navigate = useNavigate();

  const handleSavedButton = ()=>{
    setLoading(true);
    const data = {title , author , publishedYear};
   
    axios.patch(`http://localhost:3000/books/${id}` , data).then(()=>{
      setLoading(false);
      enqueueSnackbar("Book Updated  Successfully" , {variant:"success"})
      navigate("/")

    }).catch((err)=>{
      console.log(err.message);
      setLoading(false);
      enqueueSnackbar("Error While Updating data" , {variant:"error"})
    
    })

  }

  return (
   <div className="p-4">
    <BackButton/>
    <h1 className="text-3xl my-4">Create Book</h1>
    {loading ? <Spinner /> : " "}
    <div className="flex flex-col border-2 border-sky-100  rounded-xl w-[600px] p-4 mx-auto ">
      <div className="my-4">
        <label className="text-xl text-gray-500 mr-4">Title</label>
        <input
         type="text"
          className="border-2 border-gray-500 px-4 py-2 w-full"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
           />
      </div>
      <div className="my-4">
        <label className="text-xl text-gray-500 mr-4">Author</label>
        <input
         type="text"
          className="border-2 border-gray-500 px-4 py-2 w-full"
          value={author}
        
          onChange={(e)=>setAuthor(e.target.value)}
           />
      </div>
      <div className="my-4">
        <label className="text-xl text-gray-500 mr-4">Publish Year</label>
        <input
         type="number"
          className="border-2 border-gray-500 px-4 py-2 w-full"
          value={publishedYear}
          onChange={(e)=>setPublishedYear(e.target.value)}
           />
      </div>
      <div class="flex items-center justify-between">
      <button id="saveButton" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSavedButton} type="button">Save</button>
    </div>
    </div>




   </div>
  )
}

export default EditBook