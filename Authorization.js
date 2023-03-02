var path = require("path");
require('dotenv').config()
// console.log(process.env.user)

function authentication(req, res, next) {
var authheader = req.headers.authorization;
console.log(req.headers);

if (!authheader) {
var err = new Error("You are not authenticated!");
res.setHeader("WWW-Authenticate", "Basic");
err.status = 401;
return next(err);
}

var auth = new Buffer.from(authheader.split(" ")[1], "base64")
.toString()
.split(":");
var user = auth[0];
var pass = auth[1];

if (user == process.env.user && pass == process.env.password) {
next();
} else {
var err = new Error("You are not authenticated!");
res.setHeader("WWW-Authenticate", "Basic");
err.status = 401;
return next(err);
}
}

module.exports = authentication