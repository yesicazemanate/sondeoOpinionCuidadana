import mongoose from 'mongoose'


const connectionBd = async ()=>{
    try{
    const dbUri= 'mongodb+srv://yemaze123yz:NzbNWLyJFOvPSa0F@cluster0.rtdzair.mongodb.net/sondeoOpinionCuidadana'
    await mongoose.connect(dbUri, {useNewUrlParser: true})
        console.log("conection establishes to SondeoOpinionCuidadana database")
}catch(error){
    console.log("Errorconnecting to the database:", error.message)
    process.exit(1)
    }
}
export default connectionBd;