console.log("Load queue scripts.")

// Register queue panel.
var queuePanel = document.getElementById("queuePanel");
var queueList = document.getElementById("queueList");
uiRegisterPanel(queuePanel);

var songQueue = [];

function queueAdd(searchResult)
{
	songQueue.push(searchResult);
	queueDisplay();
	console.log("Added video to queue with ID: " + searchResult.id.videoId);
}

function queueClear() {
	queueDisplayClear();
}

function queueDisplay() {
	queueDisplayClear();
	for (var i = 0; i < songQueue.length; i++) {
		var row = uiCreateRow(songQueue[i], "li");
		queueList.appendChild(row);
	}
	uiSetPanel(queuePanel, 1);
}

function queueDisplayClear() {
	while (queueList.hasChildNodes()) {
		queueList.removeChild(queueList.lastChild);
	}
}