const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");


const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialised: true,
}

app.use(session(sessionOptions));
app.use(flash());



app.get("/register",(req,res)=>{
    let {name= "anonymous"} = req.query;
    req.session.name = name;
    req.flash("success", "user registered successfully")
    req.redirect("/hello")

});

app.get("/hello", (req,res)=>{
    res.send(`hello ${req.session.name}`)
})



// app.get("/recount", (req, res) => {
//     if(req.session.count){
//         req.session.count++;
//     }
//     else{
//         req.session.count =1;
//     }
//     req.session.count = 1;
//   res.send(`you sent a request ${req.session.count} times`);
// });

// app.get("/test", (req,res)=>{
//     res.send("test successful!");
// });

app.listen(3000, () => {
  console.log("server is listening to 3000");
});
