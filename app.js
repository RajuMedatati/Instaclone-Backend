const express= require("express");
const app= express();
const cors= require("cors");
const mongoose= require("mongoose");
const Route = require("./routes/routes") 

mongoose.set('strictQuery', true);
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json());



mongoose.connect("mongodb://localhost:27017",()=>
{
    console.log("mongoose is connected");
    
})


app.use("/", Route)
app.listen(5000,()=>{
    console.log("server is running");
})
