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
link.href = "https://github.com/eliskol/MA-NEUMORPHISM/raw/main/cssToCopy.css";
link.rel = "stylesheet";
document.head.appendChild(link);