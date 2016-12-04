console.log("Load common scripts.");

function uiCreateRow(video) {
	var div = document.createElement("div");
	div.setAttribute("class", "panel panel-info");
	var heading = document.createElement("div");
	heading.setAttribute("class", "panel-heading");
	var title = document.createTextNode(video.snippet.title);
	var body = document.createElement("div");
	body.setAttribute("class", "panel-body");
	var img = document.createElement("img");
	img.setAttribute("alt", video.id.videoId);
	img.setAttribute("src", video.snippet.thumbnails.default.url);
	img.setAttribute("style", "width: 10%;");

	body.appendChild(img);
	heading.appendChild(title);
	div.appendChild(heading);
	div.appendChild(body);

	return div;
}