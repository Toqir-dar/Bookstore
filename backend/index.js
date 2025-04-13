import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from './models/bookModel.js'; 
import booksRoute from "./routes/booksRoute.js";
import mongoose from "mongoose";
import cors from "cors";



const app = express();
app.use(express.json());

app.use(cors())
// middleware
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         methods: ['GET','POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Welcome to the backend!');
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Connected to MongoDB successfully!");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });
