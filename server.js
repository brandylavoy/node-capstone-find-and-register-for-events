var express = require('express');
var unirest = require('unirest');
var events = require('events');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();
var activity = require('./models/activity');
app.use(express.static('public'));
app.use(bodyParser.json());



var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }

        app.listen(config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};

if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
};

// external API call
var getFromActive = function(searchTerm) {
    var emitter = new events.EventEmitter();
    //console.log("inside getFromActive function");
    unirest.get("http://api.amp.active.com/v2/search?query=running&category=event&near="+searchTerm+",US&radius=50&api_key=2e4ra5w6b9augfrn54vjb4bx")
        .header("Accept", "application/json")
        .end(function(result) {
            console.log(result.status, result.headers, result.body);
            //success scenario
            if (result.ok) {
                emitter.emit('end', result.body);
            }
            //failure scenario
            else {
                emitter.emit('error', result.code);
            }
        });
    
    return emitter;
};
// local API endpoints
app.get('/activity/:name', function (req, res) {
    

    //    external api function call and response

    var searchReq = getFromActive(req.params.name);

    //get the data from the first api call
    searchReq.on('end', function (item) {
        res.json(item);
    });

    //error handling
    searchReq.on('error', function (code) {
        res.sendStatus(code);
    });

});
app.listen(3000);
