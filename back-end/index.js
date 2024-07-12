import express from "express"
import cors from 'cors'
import connectionBd from './config/db.js'
import routes from './routes/index.js'
const PORT= 4003
const app = express();
app.use(express.json())
connectionBd()
app.use(cors())
app.use('/', routes)

app.listen(PORT, ()=>{
    console.log("server working PORT 4003")
})