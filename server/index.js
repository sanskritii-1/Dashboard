import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors";
import "dotenv/config";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("db connected");
}

app.listen(PORT, ()=>{
    console.log("Server listening on port", PORT);
})