console.log("Load common scripts.");

var uiPanels = [];
var uiLayers = [];

function uiRegisterPanel(panel) {
	uiPanels.push(panel);
	uiLayers.push(-1);
	console.log("UI registered new panel: " + panel.id);
}

function uiSetPanel(panel, layer) {
	console.log("UI set panel: " + panel.id);
	for (var i = 0; i < uiPanels.length; i++) {
		if (uiLayers[i] == layer) {
			uiPanels[i].style.display = 'none';
			uiLayers[i] = -1;
		}
	}
	uiLayers[i] = layer;
	panel.style.display = 'block';
}

function uiCreateRow(video, rowType) {
	var div = document.createElement(rowType);
	div.setAttribute("class", "panel panel-info");
	var heading = document.createElement("div");
	heading.setAttribute("class", "panel-heading");
	var addBtn = document.createElement("a");
	addBtn.innerText = "+";
	addBtn.setAttribute("href", "#");
	addBtn.setAttribute("class", "listbtn listbtn-add");
	/*addBtn.setAttribute("click", function testing() {
		queueAdd(video);
	});*/
	var title = document.createTextNode(video.snippet.title);
	var body = document.createElement("div");
	body.setAttribute("class", "panel-body");
	var img = document.createElement("img");
	img.setAttribute("alt", video.id.videoId);
	img.setAttribute("src", video.snippet.thumbnails.default.url);
	img.setAttribute("style", "width: 10%;");
	var link = document.createElement("a");
	link.innerText = "Open with YouTube";
	link.setAttribute("href", "http://youtube.com/watch?v=" + video.id.videoId);

	body.appendChild(img);
	body.appendChild(link);
	heading.appendChild(addBtn);
	heading.appendChild(title);
	div.appendChild(heading);
	div.appendChild(body);

	$(addBtn).click(function () {
		console.log("TESTING");
		queueAdd(video);
	});

	return div;
}