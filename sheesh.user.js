// ==UserScript==
// @name         SO CLEAN
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mathacademy.com/*
// @icon         https://mathacademy.com/img/favicon.ico
// @grant        none
// ==/UserScript==

let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://eliskol.github.io/MA-NEUMORPHISM/cssToCopy.css";
link.type = "text/css";
document.head.appendChild(link);