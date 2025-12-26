// ==UserScript==
// @name         微信读书助手
// @version      2025-12-26
// @description  try to take over the world!
// @author       若水
// @match        https://weread.qq.com/web/reader/*
// @grant        none
// @updateURL    https://github.com/CHIHARA61/WeRead_Assistant/raw/refs/heads/main/WeRead_Assistant.user.js
// @downloadURL  https://github.com/CHIHARA61/WeRead_Assistant/raw/refs/heads/main/WeRead_Assistant.user.js
// ==/UserScript==

//filter: invert(100%) drop-shadow(0px 0px 0px #ffffff);

const styleHtml = `
body:not(.wr_whiteTheme) img.s-pic.wr_absolute.wr_readerImage_opacity {
	filter: invert(100%) drop-shadow(0px 0px 0px #ffffff);
}
.wr_horizontalReader .readerChapterContent {
	width: 100%;
}
.wr_horizontalReader .wr_horizontalReader_app_content .readerTopBar {
	width: 100%;
}
`;

///////////////////////////////////////////////////
///////////////////通用组件//////////////////////////
///////////////////////////////////////////////////

function wait(selector, callback, maxWaitTime = 10000, interval = 500) {
	const startTime = new Date().getTime();
	const waitForElementPresent = () => {
		const now = new Date().getTime();
		if (now - startTime > maxWaitTime) {
			console.error(`Element ${selector} not found after ${maxWaitTime}ms`);
			return;
		}
		var element = document.querySelector(selector);
		if (element) {
			console.log("Element found, doing something...", element);
			callback(element);
		} else {
			setTimeout(waitForElementPresent, interval);
		}
	};
	waitForElementPresent();
}

///////////////////////////////////////////////////
///////////////////main////////////////////////////
///////////////////////////////////////////////////

wait("head", (head) => {
	const style = document.createElement("style");
	style.innerHTML = styleHtml;
	head.appendChild(style);
});
