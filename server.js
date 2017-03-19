/**
 * Created by pawel on 18.03.2017.
 */

var express = require('express');
var app = express();
var path = require('path');
var filePath = 'build/';


app.use(express.static(filePath));
app.use("/styles", express.static(filePath + 'styles'));
app.use("/images", express.static(filePath + 'assets/images'));
app.use("/scripts", express.static(filePath + 'js'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
    res.sendFile(path.join(filePath+ 'index.html'));
});

app.listen(process.env.PORT || 8080);