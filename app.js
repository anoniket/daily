const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const lod = require("lodash");
const path = require("path");
require("dotenv").config()
// Load the core build.


//oAuth
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
const cors = require("cors");

//87683788767-nfp764066q9irmoel1adv6f5t4jo21sj.apps.googleusercontent.com  CLIENT ID
//_7FjNQefIpzR0yduztXesuOu CLIENT SECRET


// mongoose.connect("mongodb://localhost:27017/personalBlog",{useNewUrlParser:true,useUnifiedTopology: true});
mongoose.connect("mongodb+srv://admin-aniket:Admin123@cluster0-z81iv.mongodb.net/personalBlog",{ useNewUrlParser: true,useUnifiedTopology: true , useFindAndModify: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Einates have captured mongoose");
});

mongoose.set("useCreateIndex", true);

const blogSchema = new mongoose.Schema({
  blogTitle:String,
  blogBody:String
  
});

const Blog = new mongoose.model("Blog",blogSchema);


const userSchema = new mongoose.Schema({
  
  googleId:String,
  username:String,
  googleName:String,
  blogs:[blogSchema]
});

//if you dont define username it will give error


userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);


const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(User, done) {
  done(null, User);
});

passport.deserializeUser(function(User, done) {
  done(null, User);
});



passport.use(new GoogleStrategy({
  clientID: process.env.clientID || "782132931351-lb3im7qg19k9fh7ml711meld1nugur5j.apps.googleusercontent.com",
  clientSecret: process.env.clientSecret || "OmW66gFhp9Ujz6CUkFL16yW7",
  callbackURL: "/auth/google/compose"
},
function(accessToken, refreshToken, profile, cb) {
  // console.log(profile);
  User.findOrCreate({ googleId: profile.id, googleName: profile.displayName, username: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));



const app = express();
app.use(cors());
app.use(passport.initialize());
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({
  secret: "Dhoom Machale",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "client", "build")))





app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/compose', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    
    res.redirect("/compose");
    
    console.log("Done");
    // res.send("Hello");
    
  });



app.get("/home",function(req,res){


  if (req.isAuthenticated()) {
    console.log(req.user._id);
    User.find({_id:req.user._id},function(err,users){
      if(!err){
        
      var blogsarr = users[0].blogs;
      // console.log(users[0].blogs[0].blogTitle);
      res.send(blogsarr);

      }
    })
   
  } else {
    // Blog.find(function(err,blogs){
    //   if(!err){
    //     res.render("home",{p1:homeStartingContent,posts:blogs});
    //     // console.log(blogs);
    //   }
    // })
  }


})




  app.get("/test",function(req,res){
    if (req.isAuthenticated()) {
      // res.redirect("/composef");
res.send(req.user.googleName);
      console.log(req.user);
    } else {
      res.send("No");
      console.log("no");
    }

  })
  
  app.post("/composet",function(req,res){
  
  // const newPost = new Blog({
  //   blogTitle : lod.startCase(lod.toLower(req.body.postTitle)), //hoMe - will be converted to Home
  //   blogBody : req.body.postBody
  // });
  
//   newPost.save();

  console.log(req.User);
  
//   User.updateOne({_id:req.user._id},{ $push: { blogs: newPost } },function(err){
//     if(!err){
// console.log("Update done");
// res.send(req.body);
//       res.redirect("/h");}
//   });



  res.send("post submitted");
    // console.log(postContent);
  
  // console.log(req.body);
  // res.send(req.body);
  })





app.post("/composeit",function(req,res){

const newPost = new Blog({
    blogTitle : lod.startCase(lod.toLower(req.body.postTitle)), //hoMe - will be converted to Home
    blogBody : req.body.postBody
  });

  newPost.save();
  
  User.updateOne({_id:req.user._id},{ $push: { blogs: newPost } },function(err){
        if(!err){
    console.log("Update done");
    res.send("Updated")
          }
      });



})







app.post("/sent",async function(req,res){
  console.log(await req.body.userName);
 res.send(req.body.userName);
 })


// app.get("/",function(req,res){



//   if (req.isAuthenticated()) {
//     console.log(req.user._id);
//     User.find({_id:req.user._id},function(err,users){
//       if(!err){
        
//       var blogsarr = users[0].blogs;
//       console.log(users[0].blogs[0].blogTitle);
//       res.render("home",{p1:homeStartingContent,posts:blogsarr});

//       }
//     })
   
//   } else {
//     Blog.find(function(err,blogs){
//       if(!err){
//         res.render("home",{p1:homeStartingContent,posts:blogs});
//         // console.log(blogs);
//       }
//     })
//   }





// });


app.get("/hi", function(req,res){

Blog.find(function(err,blogs){
 res.send(blogs);
  console.log(blogs);
 

});

// Blog.find(function(err,blogs){
//   if(!err){
//     res.render("home",{p1:homeStartingContent,posts:blogs});
//     console.log(blogs);
//   }

});

// app.get("/about",function(req,res){
//   res.render("about",{p1:aboutContent});

// })

app.get("/contact",function(req,res){
  res.render("contact",{p1:contactContent});
})





app.post("/sent",async function(req,res){
 console.log(await req.body.userName);
res.send(req.body.userName);
})


app.get("/posts/:xyz",function(req,res){
  console.log(req.params.xyz);

//suppose a user has searched gokUl, we will first convert this into Gokul then find in blog database
// const findPost = lod.startCase(lod.toLower(req.params.xyz));

Blog.findOne({_id:req.params.xyz},function(err,foundBlog){
  if(!err){
    if(foundBlog){
      res.send(foundBlog);

    }else{
      console.log("not found");
    }
  }
});

})


app.get('/logout', function(req, res){
  req.logout();
  res.send("logout");
  
});

//delete from array inside a document

app.post("/delete",function(req,res){
  console.log(req.body.idb);
  const bid = req.body.idb;
  User.findByIdAndUpdate(
    req.user._id, { $pull: { "blogs": { _id: bid } } },
    function(err) {
        if (!err) { res.send("deleted")}
        else{res.send("No")}
    });
})



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "public", "index.html"));
});



app.listen(process.env.PORT ||5000,function(){
  console.log("Einates at your service!");
})
