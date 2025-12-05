// ==UserScript==
// @name         微信读书助手
// @version      2025-12-05
// @description  try to take over the world!
// @author       若水
// @match        https://weread.qq.com/web/reader/82132d00718b6676821fbad
// @grant        none
// ==/UserScript==

//filter: invert(100%) drop-shadow(0px 0px 0px #ffffff);

const styleHtml = `
body:not(.wr_whiteTheme) img.s-pic.wr_absolute.wr_readerImage_opacity {
	filter: invert(100%) drop-shadow(0px 0px 0px #ffffff);
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
