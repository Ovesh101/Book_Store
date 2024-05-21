import express  from 'express';
import mongoose from 'mongoose';
import { URL } from './config.js';
import cors from "cors"
import bookRoute from "./router/bookRoutes.js"
const app = express();
app.use(express.json());
app.use(cors())
//  2nd method for implementing cors manually

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders : ["Content-type"]
// }))

app.get( '/', ( req, res ) => {
    res.send( 'Hello World!' );
})

//  Book Route
app.use("/books" , bookRoute)

mongoose.connect(URL)
.then(()=>{
    console.log('Database connected successfully');
    app.listen(3000, () => { console.log('Server is running on port 3000'); });

}).catch((error) => {

    console.log(error);


})