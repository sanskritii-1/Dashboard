import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors";
import "dotenv/config";
import graphRoutes from "./routes/graphs.js";
// import generalRoutes from "./routes/general.js";
// import managementRoutes from "./routes/management.js";
import Info from "./models/info.js";
import {data} from "./data/jsondata.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use("/graph", graphRoutes);
// app.use("/general", generalRoutes);
// app.use("/management", managementRoutes);


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL,{dbName: process.env.dbname});
  console.log("db connected");
  // await Info.insertMany(data)
}


app.listen(PORT, ()=>{
  console.log("Server listening on port", PORT);
})