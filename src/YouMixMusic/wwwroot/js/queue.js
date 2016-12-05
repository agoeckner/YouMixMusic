console.log("Load queue scripts.")

// Register queue panel.
var queuePanel = document.getElementById("queuePanel");
var queueList = document.getElementById("queueList");
uiRegisterPanel(queuePanel);

var songQueue = [];

function queueAdd(video)
{
	songQueue.push(video);
	queueDisplay();
	console.log("Added video to queue with ID: " + video.id.videoId);
}

function queueClear() {
	queueDisplayClear();
	songQueue = [];
}

function queueDisplay() {
	queueDisplayClear();
	for (var i = 0; i < songQueue.length; i++) {
		var row = queueCreateRow(songQueue[i], "li");
		queueList.appendChild(row);
	}
	uiSetPanel(queuePanel, 1);
}

function queueDisplayClear() {
	while (queueList.hasChildNodes()) {
		queueList.removeChild(queueList.lastChild);
	}
}

function queueCreateRow(video, rowType) {
	var div = document.createElement(rowType);
	div.setAttribute("class", "panel panel-info");
	var heading = document.createElement("div");
	heading.setAttribute("class", "panel-heading");
	var title = document.createTextNode(video.snippet.title);
	var youtubeBtn = document.createElement("a");
	youtubeBtn.innerHTML = "  <i class=\"fa fa-mail-forward\"></i>";
	youtubeBtn.setAttribute("href", "#");
	youtubeBtn.setAttribute("class", "pull-right listbtn listbtn-youtube");
	youtubeBtn.setAttribute("href", "http://youtube.com/watch?v=" + video.id.videoId);
	youtubeBtn.setAttribute("target", "_blank");
	youtubeBtn.setAttribute("title", "Open with Youtube");

	heading.appendChild(title);
	heading.appendChild(youtubeBtn);
	div.appendChild(heading);

	return div;
}