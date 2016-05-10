// ==UserScript==
// @name         Ringpolska hide
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.ringpolska.pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var hidelm = document.getElementsByClassName("bannergroup")[0];
    if(hidelm !== null)
        hidelm.parentNode.removeChild(hidelm);
})();
