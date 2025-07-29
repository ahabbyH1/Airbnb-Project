const listing = require("./models/listing");
const review = require("./models/review.js");
const ExpressError = require("./util/ExpressError.js");
const {listingSchema,reviewSchema} = require("./schema.js");


module.exports.isLoggedin = (req,res,next) => {
    if(!req.isAuthenticated())
    {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","you must be logged in first");
        return res.redirect("/login");
        
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.session.redirectUrl)
    {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async(req,res,next) => {
    let {id} = req.params;
    let post = await listing.findById(id);
    if(!post.owner.equals(res.locals.currUser._id))
    {
        req.flash("error","You are not the owner of this post");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isreviewAuthor = async(req,res,next) => {
    let {id,reviewId} = req.params;
    let reviewPost = await review.findById(reviewId);
    if(!reviewPost.author.equals(res.locals.currUser._id))
    {
        req.flash("error","You are not the owner of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else
    next();
}

module.exports.validateReview = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else
    next();
}
