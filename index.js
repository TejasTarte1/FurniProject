var express=require("express");
var user_route=require("./routes/user_route");
var admin_route=require("./routes/admin_route");
var bodyparser=require("body-parser");
var upload=require("express-fileupload");
var session=require("express-session");

var app=express();
app.use(express.static("public/"))
app.use(bodyparser.urlencoded({extended:true}));
app.use(upload());
app.use(session({
    secret:"Tejas Tarte",
    resave:true,
    saveUninitialized:true 
}));

app.use("/",user_route);
app.use("/admin",admin_route);

app.listen(1000);