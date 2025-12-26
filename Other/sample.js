// ==UserScript==
// @name         WeRead
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       XiandaHe
// @match        https://weread.qq.com/web/reader/*
// @grant        GM_addStyle
// ==/UserScript==

/* 字体 */
GM_addStyle("*{font-family: '王羲之书法字体',FZS3JW,SourceHanSerifCN-Medium,Kaiti,STKaiti,FangSong, SimSun; !important;}");

/* 顶部工具栏 */
GM_addStyle(".readerTopBar{max-width:90%; font-family: SourceHanSerifCN-Bold !important;}");
/* 书标题 */
GM_addStyle(".readerTopBar_title .readerTopBar_title_link{font-family: SourceHanSerifCN-Bold; !important; font-weight:bold !important;}");
/* 当前章节标题 */
GM_addStyle(".readerTopBar_title .readerTopBar_title_chapter{font-family: SourceHanSerifCN-Bold !important;}");
/* 去书架查看 */
GM_addStyle(".readerTopBar_actions .addShelfItem{font-family: SourceHanSerifCN-Bold !important;}");
/* 背影色 */
GM_addStyle(".wr_whiteTheme .renderTargetContainer .renderTargetContent .wr_readerImage_opacity {background-color: rgba(249,243,232,100) !important;}");
GM_addStyle(".wr_whiteTheme .renderTargetContainer .renderTargetContent .wr_readerBackground_opacity{background-color: rgba(249,243,232,100) !important;}");
GM_addStyle(".wr_readerBackground_opacity, .wr_readerImage_opacity {opacity: 0.2 !important;}");
/* 配图不透明度 边框 */
GM_addStyle("img.wr_readerImage_opacity {opacity: 1.0 !important;border:5px solid #ccc; margin:5px; padding:5px;}");

GM_addStyle(".wr_whiteTheme .readerContent .app_content{background-color: rgba(249,243,232,100) !important;}");
GM_addStyle(".readerChapterContent{color: rgba(94,64,40,100) !important;}");
GM_addStyle(".readerChapterContent{font-weight: normal !important;}");

/* 笔记 */
GM_addStyle(".readerNotePanel .selectionListItem{border:5px solid  #f00; font-family: '王羲之书法字体';!important;}");

/* 目录 */
GM_addStyle(".readerCatalog h2.readerCatalog_bookInfo_title .readerCatalog_bookInfo_title_txt{font-family: '幼圆',SourceHanSerifCN-Bold !important;}");
GM_addStyle(".readerCatalog ul.readerCatalog_list li.chapterItem span.chapterItem_text{font-family: '幼圆',SourceHanSerifCN-Light !important;}");
GM_addStyle(".readerCatalog ul.readerCatalog_list li.chapterItem_current{border:5px solid #ccc; font-family: '幼圆',SourceHanSerifCN-Bold !important;}");
GM_addStyle(".readerCatalog ul.readerCatalog_list li.chapterItem_current span.chapterItem_text{font-family: '幼圆',SourceHanSerifCN-Bold !important;}");

/*以下为拼接进来的*/
/* readerControls */
GM_addStyle(".readerControls{padding:0,100; !important;}");

/* 下一页 */
GM_addStyle(".readerFooter .readerFooter_button {font-family: SourceHanSerifCN-Bold !important;}");

(function () {
	"use strict";

	/* 100% 宽度 */
	document.getElementsByClassName("app_content")[0].style.width = "90%";
	document.getElementsByClassName("app_content")[0].style.maxWidth = "90%";

	/* 内容容器 */
	//document.getElementsByClassName("renderTargetContainer")[0].style.width="100%";
	//document.getElementsByClassName("renderTargetContainer")[0].style.maxWidth="100%";

	/* 内容 */
	//document.getElementsByClassName("renderTargetContent")[0].style.width="100%";
	//document.getElementsByClassName("renderTargetContent")[0].style.maxWidth="100%";

	/*以下为拼接进来的*/
	//右侧浮动菜单
	document.getElementsByClassName("readerControls")[0].style.marginLeft = "0";
	document.getElementsByClassName("readerControls")[0].style.left = "inherit";
	document.getElementsByClassName("readerControls")[0].style.right = "0%";
})();
