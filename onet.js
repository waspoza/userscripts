// ==UserScript==
// @name         Onet hide ads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*.onet.pl/*
// @match        http://vod.pl/*
// @grant        GM_log
// ==/UserScript==

(function() {
    'use strict';
    
    XMLHttpRequest.prototype.realOpen = XMLHttpRequest.prototype.open;

var myOpen = function(method, url, async, user, password) {
    //do whatever mucking around you want here, e.g.
    //changing the onload callback to your own version
GM_log("url: "+url);

    //call original
    this.realOpen (method, url, async, user, password);
};


//ensure all XMLHttpRequests use our custom open method
XMLHttpRequest.prototype.open = myOpen ;


    var i;
    var ads = document.getElementsByClassName("onet-ad");
    if( ads.length > 0)
        for (i = 0; i < ads.length; i++) {
            //ads[i].style.backgroundColor = "red";
            ads[i].parentNode.removeChild(ads[i]);
        }
    else
        GM_log("no ads");
    var MutationObserver = window.MutationObserver;
    var observer       = new MutationObserver (mutationHandler);
    var config = { childList: true, subtree: true, characterData: true, attributes: true };
    observer.observe(document, config);

    function mutationHandler (mutationRecords) {
        mutationRecords.forEach ( function (mutation) {
            //GM_log(mutation.type);
            if (mutation.type == "childList") {
                //GM_log("id:"+mutation.target.id, "class:"+mutation.target.className);
                if(mutation.target.className == "onet-ad")
                {
                    if(mutation.target.parentNode !== null) {
                        mutation.target.parentNode.removeChild(mutation.target);
                        GM_log("onet-ad removed");
                    }
                    return;
                }
                var added = mutation.addedNodes[0];
                if(added !== undefined && added.id == "admain") {
                    added.parentNode.removeChild(added);
                    //observer.disconnect();
                    GM_log("admain removed");
                }
            }
        });
    }
})();
