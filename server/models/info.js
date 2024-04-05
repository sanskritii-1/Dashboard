import mongoose from "mongoose";

const infoSchema = new mongoose.Schema({
    "end_year": Number,
    "intensity": Number,
    "sector": String,
    "topic": String,
    "insight": String,
    "url": String,
    "region": String,
    "start_year": Number,
    "impact": String,
    "added": Date,
    "published": Date,
    "country": String,
    "relevance": Number,
    "pestle": String,
    "source": String,
    "title": String,
    "likelihood": Number
},{ useCreateIndex: false })

const info = mongoose.model("topics", infoSchema);

export default info;