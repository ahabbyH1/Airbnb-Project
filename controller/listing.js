const listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async(req,res) => {
    let allListing = await listing.find({});
    res.render("./listings/index.ejs",{allListing});
}
const Listing = require("../models/listing.js");

module.exports.search = async (req, res) => {
  const query = req.query.query;

  // Create a case-insensitive regex
  const regex = new RegExp(query, 'i');

  // Search across title, category, location, or owner.username
  const results = await Listing.find({
    $or: [
      { title: regex },
      { category: regex },
      { location: regex }
    ]
  }).populate("owner");

  // Filter by owner username after population
  const filteredResults = results.filter(listing =>
    listing.owner && regex.test(listing.owner.username)
  );

  const finalResults = [...new Set([...results, ...filteredResults])];

  res.render("./listings/index.ejs", {
    allListing: finalResults,
    query
  });
};

module.exports.rooms = async(req,res) => {
    let allListing = await listing.find({category: "Rooms"});
    res.render("./listings/index.ejs",{allListing});
}
module.exports.iconic = async(req,res) => {
    let allListing = await listing.find({category: "Iconic Cities"});
    res.render("./listings/index.ejs",{allListing});
}
module.exports.mountain = async(req,res) => {
    let allListing = await listing.find({category: "Mountains"});
    res.render("./listings/index.ejs",{allListing});
}
module.exports.arctic = async(req,res) => {
    let allListing = await listing.find({category: "Arctics"});
    res.render("./listings/index.ejs",{allListing});
}
module.exports.castle = async(req,res) => {
    let allListing = await listing.find({category: "Castles"});
    res.render("./listings/index.ejs",{allListing});
}
module.exports.camping = async(req,res) => {
    let allListing = await listing.find({category: "Camping"});
    res.render("./listings/index.ejs",{allListing});
}
module.exports.farm = async(req,res) => {
    let allListing = await listing.find({category: "Farms"});
    res.render("./listings/index.ejs",{allListing});
}
module.exports.tree = async(req,res) => {
    let allListing = await listing.find({category: "Tree Houses"});
    res.render("./listings/index.ejs",{allListing});
}
module.exports.villa = async(req,res) => {
    let allListing = await listing.find({category: "Villas"});
    res.render("./listings/index.ejs",{allListing});
}
module.exports.condo = async(req,res) => {
    let allListing = await listing.find({category: "Condos"});
    res.render("./listings/index.ejs",{allListing});
}
module.exports.bungalow = async(req,res) => {
    let allListing = await listing.find({category: "Bungalows"});
    res.render("./listings/index.ejs",{allListing});
}
module.exports.trending = async(req,res) => {
    let allListing = await listing.find({category: "Arctics"});
    res.render("./listings/index.ejs",{allListing});
}

module.exports.newListingForm = (req,res) => {
    res.render("./listings/new.ejs");
}

module.exports.createNewListing = async(req,res) => {
    let response = await geocodingClient.forwardGeocode({
  query: req.body.listing.location,
  limit: 1
})
  .send()
    // let {title,description,image,price,location,country} = req.body;
    // let newPost = new listing({
    //     title: title,
    //     description: description,
    //     image: image,
    //     price: price,
    //     location: location,
    //     country: country,
    // });
    // await newPost.save();/
    let url = req.file.path;
    let filename = req.file.filename;
    let newPost = new listing(req.body.listing);
    newPost.owner = req.user._id;
    newPost.image = {url,filename};
    newPost.geometry = response.body.features[0].geometry;
    let savedPost = await newPost.save();
    console.log(savedPost);
    req.flash("success","new listing created!");
    res.redirect("/listings"); 
}

module.exports.showListing = async(req,res) => {
    let {id} = req.params;
    let post =await listing.findById(id).populate({path: "reviews",populate: {path: "author"},}).populate("owner");
    //console.log(post);
    if(!post)
    {
        req.flash("error","listing you requested for does not exists!");
        res.redirect("/listings");
    }
    res.render("./listings/show.ejs",{post});
}

module.exports.renderEditForm = async(req,res) => {
    let {id} = req.params;
    let post = await listing.findById(id);
    if(!post)
    {
        req.flash("error","listing you requested for does not exists!");
        res.redirect("/listings");
    }
    let originalImage = post.image.url;
    let prevImage = originalImage.replace("/upload","/upload/w_250");
    res.render("./listings/edit.ejs",{post,prevImage});
}

module.exports.editListing = async(req,res) => {
    
    let {id} = req.params;
    let updated = req.body.listing;
    let post = await listing.findByIdAndUpdate(id,updated,{runValidators: true,new: true});
    if(typeof req.file != "undefined")
    {
       let url = req.file.path;
       let filename = req.file.filename;
        post.image = {url,filename};
        await post.save();
    }
    req.flash("success","listing updated successfully");
    res.redirect("/listings");
}

module.exports.destroyListing = async(req,res)=>{
    let {id} = req.params;
    await listing.findByIdAndDelete(id);
    req.flash("success","listing deleted successfully");
    res.redirect("/listings");
}