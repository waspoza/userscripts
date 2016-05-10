// ==UserScript==
// @name         Reddit hide
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var elmDeleted = document.getElementsByClassName("sponsorshipbox")[0];
    if(elmDeleted !== null)
        elmDeleted.parentNode.removeChild(elmDeleted);

    elmDeleted = document.getElementById("ad_main");
    if(elmDeleted !== null)
        elmDeleted.parentNode.removeChild(elmDeleted);
})();
