// ==UserScript==
// @name         Motherless hide ads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://motherless.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var i;
    var ads = document.getElementsByClassName("sidebar");
    if( ads.length > 0)
        for (i = 0; i < ads.length; i++) {
            //ads[i].style.backgroundColor = "red";
            ads[i].parentNode.removeChild(ads[i]);
        }
})();
