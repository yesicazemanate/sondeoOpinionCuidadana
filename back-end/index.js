import express from "express"
import cors from 'cors'
import connectionBd from './config/db.js'
import routes from './routes/index.js'
import path, { dirname } from 'path'
import url, { fileURLToPath } from 'url'
const PORT= 4003
const app = express();
const __filename = fileURLToPath(import.meta.url)
console.log(__filename)
const __dirname = dirname(__filename)
console.log(__dirname)
//const imagenesPathn= path.join(__dirname, "imagenes")
//console.log(imagenesPathn)
app.use(express.json())
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:4003'],
    methods: ['GET', 'POST'], 
    credentials: true 
};

app.use(cors(corsOptions));
connectionBd()
app.use('/', routes)
app.use('/imagenes', express.static(path.join(__dirname,'/imagenes')))
app.listen(PORT, ()=>{
    console.log("server working PORT 4003")
})