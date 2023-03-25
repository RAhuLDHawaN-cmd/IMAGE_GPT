import mongoose from "mongoose";

const connectdb=(url)=>{
    mongoose.set('strictQuery',true);
    mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true}).
    then(()=>console.log("MongoDb connected"))
    .catch((err)=>console.log(err));


}
export default connectdb;


