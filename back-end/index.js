import express from "express"
import cors from 'cors'
import connectionBd from './config/db.js'
import routes from './routes/index.js'

const PORT= 4003
const app = express();
app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'], 
    credentials: true 
};

app.use(cors(corsOptions));
connectionBd()
app.use('/', routes)

app.listen(PORT, ()=>{
    console.log("server working PORT 4003")
})