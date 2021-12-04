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

function addGlobalStyle(css) {
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}

addGlobalStyle(`
body {
    background: #c66262 !important;
}

.taskUnlocked {
    border-radius: 50px !important;
    background: #c66262 !important;
    box-shadow: inset 15px 15px 30px #8d4646,
            inset -15px -15px 30px #ff7e7e !important;
	padding: 45px !important;
	border: 0px !important;
}

.button {
	/*border-radius: 50px !important;*/
	background: linear-gradient(145deg, #057fd5, #056bb3) !important;
	box-shadow:  1px 1px 2px #04548d,
             -1px -1px 2px #069aff !important;
}

div.taskProgressBarFrame {
	border-radius: 50px;
	background: linear-gradient(145deg, #ffffff, #d8d9da) !important;
	box-shadow:  1px 1px 2px #aaabac,
             -1px -1px 2px #ffffff !important;
}

div.taskProgressBar {
	border-radius: 50px;
	background: linear-gradient(145deg, #057fd5, #056bb3);
	box-shadow:  1px 1px 2px #04548d,
             -1px -1px 2px #069aff;
}

div.sidebarFrame {
	border-radius: 10px !important;
	background: #c66262 !important;
	box-shadow:  5px 5px 10px #a04f4f,
	             -5px -5px 10px #ec7575 !important;
	border: 0px !important;
}

div#leaderboardFrame, div#dailyGoalFrame {
	padding-top: 2px;
}

div#topRibbon {
	border-radius: 50px;
	background: linear-gradient(145deg, #b25858, #d46969);
	box-shadow:  5px 5px 10px #a04f4f,
	             -5px -5px 10px #ec7575;
	border: 0px !important;
}

div#dailyGoalProgressBarFrame {
	background: linear-gradient(145deg, #b25858, #d46969);
	box-shadow:  5px 5px 10px #a04f4f,
	             -5px -5px 10px #ec7575 !important;
}

#lessonSidebar {
	background: #c66262 !important !important;
	box-shadow: inset 5px 5px 10px #a04f4f,
				inset -5px -5px 10px #ec7575 !important;
    border: 0px !important;
}
`);
