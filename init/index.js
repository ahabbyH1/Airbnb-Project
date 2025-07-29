const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => {
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wonderlust");
}
let initDB = async () => {
    await listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj,owner: "687e562675a8b8652f023b19"}));
    await listing.insertMany(initData.data);
    console.log("data initialized successfully");
}
initDB();