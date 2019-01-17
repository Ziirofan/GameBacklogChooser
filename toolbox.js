/**
 * My toolbox by ziirofan
 */


/**
 * @function convertMinuteToFormatHHMM: convert minutes into format hh:mm.
 * @param {integer} minute 
 */
function convertMinuteToFormatHHMM(minute){
    let heure = Math.trunc(minute / 60);
    let rest = minute % 60;
    if(rest<=60){
        let heureComp=Math.trunc(rest/60);
        heure += heureComp;
        rest = rest%60;
    }
    var heureEtMinutes = {h: heure,
                            m : rest};
    return heureEtMinutes;
}

/**
 * @function elementFactory : create and add element in html
 * @param {string} elementName: name of element which will create ("div","h1",...) 
 * @param {DOMnode} parent : parent of node (default : document.body) 
 * @param {number} w : width
 * @param {number} h : height
 * @param {number} x : x position
 * @param {number} y : y position  
 * @param {object} style : map of style of element  
 * @param {string} classes : name of element classes 
 */
function elementFactory(elementName, parent, w, h, x, y, style, classes){
    var el = document.createElement(elementName);
    parent.appendChild(el);
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.style.width = w + "px";
    el.style.height = h + "px";
    el.style.position = "absolute";

    for(var property in style)
        el.style[property] = style[property];

    el.className=classes;
    return el;
}
