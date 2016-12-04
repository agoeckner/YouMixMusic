console.log("Load common scripts.");

var uiPanels = [];

function uiRegisterPanel(panel) {
	uiPanels.push(panel);
	console.log("UI registered new panel: " + panel.id);
}

function uiSetPanel(panel) {
	console.log("UI set panel: " + panel.id);
	for (var i = 0; i < uiPanels.length; i++) {
		uiPanels[i].style.display = 'none';
	}
	panel.style.display = 'block';
}

function uiCreateRow(video) {
	var div = document.createElement("div");
	div.setAttribute("class", "panel panel-info");
	var heading = document.createElement("div");
	heading.setAttribute("class", "panel-heading");
	var addButton = document.createElement("button");//"input");
	addButton.setAttribute("text", "+");
	//addButton.setAttribute("value", "+");
	//addButton.setAttribute("type", "submit");
	addButton.setAttribute("class", "listbtn listbtn-add");
	addButton.setAttribute("onclick", "queueAdd(" + video + ")");
	var title = document.createTextNode(video.snippet.title);
	var body = document.createElement("div");
	body.setAttribute("class", "panel-body");
	var img = document.createElement("img");
	img.setAttribute("alt", video.id.videoId);
	img.setAttribute("src", video.snippet.thumbnails.default.url);
	img.setAttribute("style", "width: 10%;");

	body.appendChild(img);
	heading.appendChild(addButton);
	heading.appendChild(title);
	div.appendChild(heading);
	div.appendChild(body);

	return div;
}