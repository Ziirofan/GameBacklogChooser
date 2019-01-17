/**
 * Server nodeJs de l'appli
 */
"use strict";
/************************************************** */
/**
 * Require:
 */
var express = require('express');
var request = require('request');
var key = require('./key.json');

/**************************************************** */
var steamKey = key.key;
var steamId = key.id;
var app = express();



app.get('/', function (httpRequest, httpResponse) {
    // Calculate the Steam API URL we want to use GetNewsForApp/v0002/?appid=440
    var url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=' + steamKey + '&include_appinfo&steamid=' + steamId;
    httpRequest.params.appid;
    request.get(url, function (error, steamHttpResponse, steamHttpBody) {
        httpResponse.setHeader('Content-Type', 'application/json');
        httpResponse.send(steamHttpBody);
    });
});

var port = 4000;
var server = app.listen(port);
console.log('Listening on port ' + port);