import express from "express";
import database from './config/database.js';
import cors from 'cors';
import Productrouter from "./router/app.js";

const app = express()
const PORT = 5555

try {
    await database.authenticate();
    console.log('database connected....')
} catch (error) {
    console.log(error)
}
app.use(cors());
app.use(express.json());
app.use('/products',Productrouter);

app.listen(PORT,()=>{
    console.log(`run at http://localhost:${PORT}`)
})