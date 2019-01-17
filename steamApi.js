/**
 * Mis en place de l'Api Steam
 */

// script strict mode
"use strict";

function getXHR(){
    var xhr = null;
    xhr = new XMLHttpRequest();
    return xhr;
}
var xhr = getXHR();

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)){
        console.log("XHR get success \n"+xhr.responseText);
    }
};


xhr.open("GET","http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json", true);
xhr.send(null);
