
// Dependencies
var express = require("express");
var mysql = require("mysql");
var path = require("path"); // Allows to read html files

// Instantiate Express
var app = express();

var PORT = process.env.PORT || 8001;

// Create mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "FriendFinder_DB"
});

// Instantiate mysql connection
connection.connect(function(err){
    if(err){
        console.error(`Connection Error: ${err.stack}`);
        return;
    }
    console.log(`Successful connection. Connection Id: ${connection.threadId}`);
})

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", function(req, res){
    console.log("In Root Get");
    res.sendFile(path.join(__dirname,"index.html"));

})

app.get("/survey", (req,res) => {
    res.sendFile(path.join(__dirname, "survey.html"));
})

app.post("/addFriend", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;

    res.send(newFriend);
})

app.listen(PORT, function(){
    
    console.log(`Server Listening on: http://localhost:${PORT}`);
    
})






























