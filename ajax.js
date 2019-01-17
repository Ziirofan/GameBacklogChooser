/**
 * Mis en place de la technologie Ajax
 */

// script mode strict
"use strict"; 


class Xhr{
    constructor(serverRequest){
        this.serverRequest=serverRequest;
        this.xh = new XMLHttpRequest();
    }
    
    /**
     * @method xhrOpen : send http request
     * @param {string} method 
     */
    static xhrOpen(method){}

}