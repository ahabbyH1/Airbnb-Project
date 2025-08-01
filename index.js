if(process.env.NODE_ENV != "production")
{
    require('dotenv').config();
}

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./util/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const reviewsRoute = require("./routes/review.js");
const listingsRoute = require("./routes/listing.js");
const userroute = require("./routes/user.js");

const User = require("./models/user.js");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsMate);

const store = MongoStore.create({
    mongoUrl: "mongodb+srv://mtauheedcse2105h1:9BZQcxRBbmRbTk8d@cluster0.6d0o1iy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
    },
}
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

app.use("/listings",listingsRoute);
app.use("/listings/:id/reviews",reviewsRoute);
app.use("/",userroute);

main()
.then(() => {
    console.log("database is connected");
})
.catch((err) => {
    console.log(err);
});
async function main(){
    await mongoose.connect("mongodb+srv://mtauheedcse2105h1:9BZQcxRBbmRbTk8d@cluster0.6d0o1iy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

app.listen(port,() => {
    console.log(`server is running on port ${port}`);
});


// app.get("/",(req,res) => {
//     res.send("root is working");
// });

// app.get("/demouser",async(req,res) => {
//     let fakeUser = new User({
//         email: "tauheed123@gmail.com",
//         username: "tauheed123"
//     });
//     let registeredUser = await User.register(fakeUser,"helloworld");
//     res.send(registeredUser);
// });


app.all("*",(req,res,next) => {
    next(new ExpressError(404,"page not found!"));
})
app.use((err,req,res,next) => {
    let {statusCode=500,message="something went wrong"} = err;
    res.status(statusCode).render("./listings/error.ejs",{message});
    // res.status(statusCode).send(message);
})

// app.get("/listing",async (req,res) => {
//     let sampleListing = new listing({
//         title: "Hyderabad Beach",
//         description: "wonderful Beach in the world",
//         price: 3344,
//         location: "Hyderabad",
//         country: "INdia",
//     });
//     await sampleListing.save();
//     res.send("successful");
// })