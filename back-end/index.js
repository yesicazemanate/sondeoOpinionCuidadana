import express from "express"
import cors from 'cors'
import connectionBd from './config/db.js'

const PORT= 4003
const app = express();
app.use(express.json())
connectionBd()
app.use(cors())

app.listen(PORT, ()=>{
    console.log("server working PORT 4003")
})