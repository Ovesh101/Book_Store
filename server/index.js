import express  from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
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
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



app.use(express.static(path.resolve(__dirname , "./public")));

//  Book Route
app.use("/books" , bookRoute)

app.get("*" , (req , res)=>{
    res.sendFile(path.resolve(__dirname , "./public" , "index.html"))
})

mongoose.connect(URL)
.then(()=>{
    console.log('Database connected successfully');
    app.listen(3000, () => { console.log('Server is running on port 3000'); });

}).catch((error) => {

    console.log(error);


})