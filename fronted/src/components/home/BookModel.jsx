
import {PiBookOpenTextLight} from "react-icons/pi"
import {BiUserCircle } from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"



const BookModel = ({ book, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 right-0 left-0 bottom-0 top-0 z-50 flex justify-center items-center' onClick={onClose}>

            <div className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative' onClick={(e)=>e.stopPropagation()}>
                <AiOutlineClose className="right-6 top-6 absolute text-3xl text-red-600 cursor-pointer" onClick={onClose} />
                <h2 className="w-fit px-4 py-1 rounded-lg bg-red-300">{book.publishedYear}</h2>
                <h4 className="my-2 text-gray-500 ">{book._id}</h4>
                <div className="flex justify-start items-center gap-x-2">
                    <PiBookOpenTextLight className="text-red-300 text-2xl" />
                    <h2 className="my-1 ">{book.title}</h2>

                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiUserCircle className="text-red-300 text-2xl" />
                    <h2 className="my-1 ">{book.author}</h2>

                </div>
                <p className='my-3'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusamus, eligendi? Fugiat voluptatibus aspernatur sed fuga quaerat facere harum, doloremque a,
                    ducimus minus quisquam reiciendis aut perferendis asperiores, culpa praesentium accusantium!
                </p>

            </div>
        </div>

    )
}

export default BookModel