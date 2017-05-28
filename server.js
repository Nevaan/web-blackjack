/**
 * Created by pawel on 18.03.2017.
 */

var express = require('express');
var app = express();
var path = require('path');
var appPath = __dirname + '/dist';

app.use(express.static(appPath));
app.use("/styles", express.static(appPath + '/styles'));
app.use("/images", express.static(appPath + '/assets/images'));
app.use("/fonts", express.static(appPath + '/assets/fonts'));
app.use("/scripts", express.static(appPath + '/js'));

app.get('/', function (req, res) {
    res.sendFile(path.join(appPath+ '/index.html'));
});

app.listen(process.env.PORT || 8080);