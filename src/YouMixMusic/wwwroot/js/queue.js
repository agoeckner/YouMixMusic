console.log("Load queue scripts.")

// Register queue panel.
var queuePanel = document.getElementById("queuePanel");
var queueList = document.getElementById("queueList");
uiRegisterPanel(queuePanel);

var songQueue = [];

var queueIndex = 0;

function queueAdd(searchResult)
{
	songQueue.push(searchResult);
	queueDisplay();
	console.log("Added video to queue with ID: " + searchResult.id.videoId);
}

function queueClear() {
	queueDisplayClear();
	songQueue = [];
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

function queueNext() {
    if (queueIndex >= songQueue) {
        return;
    }
        var list = $("#queueList > li");
        list[queueIndex].addClass("deselect");
        list[queueIndex].removeClass("select");
        queueIndex++;
        list[queueIndex].addClass("select");
}

function queuePrev() {

    if (queueIndex <= 0) {
        return;
    }
        var list = $("#queueList > li");
        list[queueIndex].addClass("deselect");
        list[queueIndex].removeClass("select");
        queueIndex--;
        list[queueIndex].addClass("select");
}