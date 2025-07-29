const listing = require("../models/listing.js");
const review = require("../models/review.js");

module.exports.createReview = async(req,res) => {
    let {id} = req.params;
    let listingReview = await listing.findById(id);
    let newReview = new review(req.body.review);
    newReview.author = req.user._id;
    listingReview.reviews.push(newReview);

    await newReview.save();
    await listingReview.save();
    console.log(newReview);
    req.flash("success","review added successfully");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyReview = async(req,res)=> {
    let {id,reviewId} = req.params;
    await listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await review.findByIdAndDelete(reviewId);
    req.flash("success","review deleted successfully")
    res.redirect(`/listings/${id}`);
}