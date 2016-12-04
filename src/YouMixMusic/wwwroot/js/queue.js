console.log("Load queue scripts.")

// Register queue panel.
var queuePanel = document.getElementById("queue");
uiRegisterPanel(queuePanel);

var songQueue = [];

function queueAdd(searchResult)
{
	songQueue.push(searchResult);
	console.log("Added video to queue with ID: " + searchResult.id.videoId);
}

function queueDisplay() {
	queueDisplayClear();
	for (var i = 0; i < songQueue.length; i++) {
		var row = uiCreateRow(songQueue[i]);
		queuePanel.appendChild(row);
	}
	uiSetPanel(queuePanel);
}

function queueDisplayClear() {
	while (queuePanel.hasChildNodes()) {
		queuePanel.removeChild(queuePanel.lastChild);
	}
}