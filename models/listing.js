const mongoose = require("mongoose");
const review = require("./review.js");
const user = require("./user.js");
const { string, required } = require("joi");

const listingSchema = new mongoose.Schema({
    title:{
        type: String,
        //required: true,
    },
    description: String,
    image: {
        filename: String,
        url: String,
    },
    // image:{
    //     type: String,
    //     set: (v) => v===""?"":v,
    // },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "review",
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    geometry: {
        type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
    },
    category:{
       type:String,
       enum: ["Rooms","Iconic Cities","Mountains","Arctics","Castles","Camping","Farms","Tree Houses","Villas","Condos","Bungalows"],
       required: true,
    }
});
listingSchema.post("findOneAndDelete",async(listing) => {
    if(listing)
    {
        await review.deleteMany({_id: {$in: listing.reviews}});
    }
})
const listing = mongoose.model("listing",listingSchema);
module.exports = listing;