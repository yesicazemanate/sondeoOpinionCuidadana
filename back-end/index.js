import express from "express"
import cors from 'cors'
import connectionBd from './config/db.js'
import routes from './routes/index.js'
import path from 'path'
const PORT= 4003
const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const imagenesPathn= path.join(__dirname, "imagenes")
console.log(imagenesPathn)
app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'], 
    credentials: true 
};

app.use(cors(corsOptions));
connectionBd()
app.use('/', routes)
app.use('/imagenes', express.static(imagenesPathn))
app.listen(PORT, ()=>{
    console.log("server working PORT 4003")
})