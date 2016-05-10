// ==UserScript==
// @name         Youtube hide add
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @grant        GM_log
// ==/UserScript==

(function() {
    'use strict';

    GM_log(window.location.href);
    //var hidelm = document.getElementById("watch7-sidebar-ads");
    //if(hidelm !== null)
    //    hidelm.parentNode.removeChild(hidelm);

    var MutationObserver = window.MutationObserver;
    var observer       = new MutationObserver (mutationHandler);
    var config = { childList: true, subtree: true, characterData: true, attributes: true };
    observer.observe(document, config);

    function mutationHandler (mutationRecords) {
        mutationRecords.forEach ( function (mutation) {
            //GM_log(mutation.type);
            if (mutation.type == "childList" &&  typeof mutation.addedNodes == "object" &&  mutation.addedNodes.length) {
                var added = mutation.addedNodes[0];
                //GM_log(added);
                if(added.id == "watch7-sidebar-ads") {
                    added.parentNode.removeChild(added);
                    //observer.disconnect();
                    GM_log("watch7-sidebar-ads removed");
                }
            }
            else {
                //GM_log("type: "+mutation.type);
                if(mutation.type == "childList")
                    //GM_log("id: "+mutation.target.id);
                    if(mutation.target.id == "google_companion_ad_div") {
                        //GM_log("mut: "+mutation);
                        mutation.target.parentNode.removeChild(mutation.target);
                        GM_log("*** watch7-sidebar-ads removed");
                    }
        }
        });
    }
})();
