const user = require("../models/user.js");

module.exports.renderSignupForm = (req,res) => {
    res.render("./users/signup.ejs");
}

module.exports.signup = async(req,res) => {
    try{
        let {username,email,password} = req.body;
    const newUser = new user({
        username: username,
        email: email
    });
    const registeredUser = await user.register(newUser,password);
    console.log(registeredUser);
    req.login(registeredUser,(err) => {
        if(err){
            return next(err);
        }
        req.flash("success","Welcome to Wanderlust");
        res.redirect("/listings");
    })
    }catch(e)
    {
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req,res) => {
    res.render("./users/login.ejs");
}

module.exports.login = async(req,res) => {
    let {username} = req.body;
    req.flash("success",`welcome back ${username}`);
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout = (req,res,next) => {
    req.logout((err) => {
        if(err){
            next(err);
        }
        req.flash("success","you logged out successfully!");
        res.redirect("/listings");
    })
}