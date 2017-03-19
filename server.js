/**
 * Created by pawel on 18.03.2017.
 */

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));
app.use("/styles", express.static(__dirname + '/styles'));
app.use("/images", express.static(__dirname + '/assets/images'));
app.use("/scripts", express.static(__dirname + '/js'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+ '/index.html'));
});

app.listen(process.env.PORT || 8080);