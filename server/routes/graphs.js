import express, { response } from "express";
import bodyParser from "body-parser";
import Info from "../models/info.js"

const router = express.Router();

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

router.post("/getVal", async (req,res)=>{
    try{
        const response = await Info.aggregate([
            {$group:{
                _id: `$${req.body.field}`,
                count: {$sum:1}
            }},
            {$match:{_id: {$nin:[null,""]}}}
        ])

        res.json(response);
    }
    catch(err){
        console.log(err);
    }
})

export default router;