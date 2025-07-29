const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../util/wrapAsync.js");
const {validateReview, isLoggedin, isreviewAuthor} = require("../middleware.js");
const reviewController = require("../controller/review.js");

router.post("/",validateReview,isLoggedin,wrapAsync(reviewController.createReview));

//delete review
router.delete("/:reviewId",isLoggedin,isreviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;