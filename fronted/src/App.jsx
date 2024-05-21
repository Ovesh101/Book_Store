import { Routes , Route } from "react-router-dom"
import CreateBook from "./pages/CreateBook"
import EditBook from "./pages/EditBook"
import Home from "./pages/Home"
import ShowList from "./pages/ShowList"
import DeleteBook from "./pages/DeleteBook"


export default function App() {
  return (
  <Routes>
    <Route path="/books/details/:id" element={<ShowList/>}/>
    <Route path="/books/createBook" element={<CreateBook/>}/>
    <Route path="/books/editBook/:id" element={<EditBook/>}/>
    <Route path="/books/deleteBook/:id" element={<DeleteBook/>}/>
    <Route path="/" element={<Home/>}/>
  </Routes>
  )
}