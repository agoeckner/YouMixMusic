﻿console.log("Load common scripts.");

var uiPanels = [];
var uiLayers = [];

function uiRegisterPanel(panel) {
	uiPanels.push(panel);
	uiLayers.push(-1);
	console.log("UI registered new panel: " + panel.id);
}

function uiHideAllPanels() {
	for (var i = 0; i < uiPanels.length; i++) {
		uiPanels[i].style.display = 'none';
		uiLayers[i] = -1;
	}
}

function uiSetPanel(panel, layer) {
	idx = -1;
	for (var i = 0; i < uiPanels.length; i++) {
		if (uiLayers[i] == layer) {
			uiPanels[i].style.display = 'none';
			uiLayers[i] = -1;
		}
		if (uiPanels[i] == panel) {
			idx = i;
		}
	}
	console.log("panel is at index " + idx);
	if (panel != null && idx >= 0) {
		console.log("UI set panel: " + panel.id + " layer: " + layer);
		uiLayers[idx] = layer;
		panel.style.display = 'block';
	}
}

function uiCreateRow(video, rowType) {
	var div = document.createElement(rowType);
	div.setAttribute("class", "panel panel-info");
	var heading = document.createElement("div");
	heading.setAttribute("class", "panel-heading");
	var title = document.createElement("a");
	title.innerText = video.snippet.title;
	title.setAttribute("href", "#");
	title.setAttribute("class", "listtitle");
	var body = document.createElement("div");
	body.setAttribute("class", "panel-body");
	var img = document.createElement("img");
	img.setAttribute("alt", video.id.videoId);
	img.setAttribute("src", video.snippet.thumbnails.default.url);
	img.setAttribute("style", "width: 10%;");
	var addBtn = document.createElement("a");
	addBtn.innerHTML = "<i class=\"fa fa-plus-circle\"></i>";
	addBtn.setAttribute("href", "#");
	addBtn.setAttribute("class", "pull-right listbtn listbtn-add");
	addBtn.setAttribute("title", "Add to Play Queue");
	var youtubeBtn = document.createElement("a");
	youtubeBtn.innerHTML = "  <i class=\"fa fa-mail-forward\"></i>";
	youtubeBtn.setAttribute("href", "#");
	youtubeBtn.setAttribute("class", "pull-right listbtn listbtn-youtube");
	youtubeBtn.setAttribute("href", "http://youtube.com/watch?v=" + video.id.videoId);
	youtubeBtn.setAttribute("target", "_blank");
	youtubeBtn.setAttribute("title", "Open with Youtube");

	body.appendChild(img);
	body.appendChild(youtubeBtn);
	body.appendChild(addBtn);
	heading.appendChild(title);
	div.appendChild(heading);
	div.appendChild(body);

	$(addBtn).click(function () {
		queueAdd(video);
	});

	return div;
}