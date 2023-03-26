import express from "express";
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectdb from "./mongodb/connect.js";

// routes or sub/routes
import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"

dotenv.config();

// middlewares 

const app=express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
// routes defined int ext file integartion

//ext routes

app.use('/api/v1/post',postRoutes)

app.use('/api/v1/dalle',dalleRoutes)





// middleware function in Express starting from v4.16.0. It parses incoming JSON requests and puts the parsed data in req.body
// app.use(express.json());

// puts the parsed data in req.body
app.post('/test', function(req,res) {
    // Without `express.json()`, `req.body` is undefined.
    // console.log(`${req.body}`);
  });

  const PORT=8080;

app.get("/",async(req,res)=>{
    res.send("Hello form Open AI :()")

})

// const PORT=8080;
// ini server
const startserver= async()=> {
try{
    connectdb(process.env.MONGODB_URL);
    app.listen(8080,async(req,res)=>{
        console.log("server are hot at "+PORT)
        // connectdb("mongodb+srv://rahul4:test123@cluster0.ar70d.mongodb.net/foodie")
    })
}catch(err){
    console.log("Some error occured");
    console.log(err);
}
    

}

startserver();


