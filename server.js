var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var port = process.env.port || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("./public"));

//routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(port, function() {
	console.log("Elder Helper is tuned in to port " + port + " (No Hearing Aide Needed).");
})
