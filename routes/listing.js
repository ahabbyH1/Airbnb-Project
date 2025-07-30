const express = require("express");
const router = express.Router();
const wrapAsync = require("../util/wrapAsync.js");
const {isLoggedin, isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controller/listing.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage })

router.route("/")
.get(wrapAsync(listingController.index))
.post(upload.single('image'),validateListing,wrapAsync(listingController.createNewListing))

router.route("/search")
.get(wrapAsync(listingController.search));
router.route("/rooms")
.get(wrapAsync(listingController.rooms));
router.route("/iconic")
.get(wrapAsync(listingController.iconic));
router.route("/villa")
.get(wrapAsync(listingController.villa));
router.route("/castle")
.get(wrapAsync(listingController.castle));
router.route("/farm")
.get(wrapAsync(listingController.farm));
router.route("/mountain")
.get(wrapAsync(listingController.mountain));
router.route("/arctic")
.get(wrapAsync(listingController.arctic));
router.route("/tree")
.get(wrapAsync(listingController.tree));
router.route("/camping")
.get(wrapAsync(listingController.camping));
router.route("/condo")
.get(wrapAsync(listingController.condo));
router.route("/bungalow")
.get(wrapAsync(listingController.bungalow));
router.route("/trending")
.get(wrapAsync(listingController.trending));

router.get("/new",isLoggedin,listingController.newListingForm);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(upload.single('image'),validateListing,isOwner,wrapAsync(listingController.editListing))
.delete(isLoggedin,isOwner,wrapAsync(listingController.destroyListing));

router.get("/:id/edit",isLoggedin,isOwner,wrapAsync(listingController.renderEditForm));







module.exports = router;