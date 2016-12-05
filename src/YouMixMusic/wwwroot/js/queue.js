console.log("Load queue scripts.")

// Register queue panel.
var queuePanel = document.getElementById("queuePanel");
var queueList = document.getElementById("queueList");
uiRegisterPanel(queuePanel);

var songQueue = [];
var queueIndex = 0;

function queueAdd(video)
{
	songQueue.push(video);
	_queueDisplay();
	console.log("Added video to queue with ID: " + video.id.videoId);
}

function queueRemove(video) {
	var idx = songQueue.indexOf(video);
	queueRemoveIdx(idx);
}

function queueRemoveIdx(idx) {
	if (idx >= 0) {
		songQueue.splice(idx, 1);
	}
	_queueDisplay();
}

function queueClear() {
	_queueDisplayClear();
	songQueue = [];
}

function queuePlayIdx(idx) {

}

function _queueDisplay() {
	_queueDisplayClear();
	for (var i = 0; i < songQueue.length; i++) {
		var row = _queueCreateRow(songQueue[i], "li", i);
		queueList.appendChild(row);
	}
	uiSetPanel(queuePanel, 1);
}

function _queueDisplayClear() {
	while (queueList.hasChildNodes()) {
		queueList.removeChild(queueList.lastChild);
	}
}

function _queueCreateRow(video, rowType, idx) {
	var div = document.createElement(rowType);
	div.setAttribute("class", "panel panel-info");
	var heading = document.createElement("div");
	heading.setAttribute("class", "panel-heading");
	var title = document.createElement("a");
	title.innerText = video.snippet.title;
	title.setAttribute("href", "#");
	title.setAttribute("class", "listtitle");
	var youtubeBtn = document.createElement("a");
	youtubeBtn.innerHTML = "  <i class=\"fa fa-mail-forward\"></i>";
	youtubeBtn.setAttribute("href", "#");
	youtubeBtn.setAttribute("class", "pull-right listbtn listbtn-youtube");
	youtubeBtn.setAttribute("href", "http://youtube.com/watch?v=" + video.id.videoId);
	youtubeBtn.setAttribute("target", "_blank");
	youtubeBtn.setAttribute("title", "Open with Youtube");
	var removeBtn = document.createElement("a");
	removeBtn.innerHTML = "  <i class=\"fa fa-times-circle\"></i>";
	removeBtn.setAttribute("href", "#");
	removeBtn.setAttribute("class", "pull-right listbtn listbtn-remove");
	removeBtn.setAttribute("href", "#");
	removeBtn.setAttribute("title", "Remove from Play Queue");

	heading.appendChild(title);
	heading.appendChild(youtubeBtn);
	heading.appendChild(removeBtn);
	div.appendChild(heading);

	$(removeBtn).click(function () {
		queueRemoveIdx(idx);
	});
	$(title).click(function () {
		queuePlayIdx(idx);
	});

	return div;
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