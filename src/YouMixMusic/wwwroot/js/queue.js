console.log("Load queue scripts.")

// Register queue panel.
var queuePanel = document.getElementById("queuePanel");
var queueList = document.getElementById("queueList");
uiRegisterPanel(queuePanel);

var songQueue = [];
var queueIndex = -1;

function queueAdd(video)
{
	songQueue.push(video);
	_queueDisplay();
	console.log("Added video to queue with ID: " + video.id.videoId);
}

function queueRemove(video) {
	var idx = songQueue.indexOf(video);
	queueRemoveIdx(idx);
	_queueDisplay();
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

function queuePlayPause() {
	// Just starting.
	if (queueIndex < 0) {
		queuePlayNext();
	}
	// Pause
	if ($("#playBtn").hasClass("fa-pause")) {
		player.pauseVideo();
		$("#playBtn").removeClass("fa-pause");
		$("#playBtn").addClass("fa-play");
	}
	// Resume
	else {
		player.playVideo();
		$("#playBtn").removeClass("fa-play");
		$("#playBtn").addClass("fa-pause");
	}
}

function queuePlayIdx(idx) {
	loadVideo(songQueue[idx].id.videoId);
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
	heading.setAttribute("class", "panel-heading deselect");
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
		_queueDisplay();
	});

	if (idx == queueIndex) {
	    $(heading).css("background-color", "#3d3e43");
	}

	else {
	    $(heading).css("background-color","#222327");
	}

	return div;
}

function queuePlayNext() {
    if (queueIndex >= songQueue) {
        return;
    }
    queueIndex++;
    _queueDisplay();
	queuePlayIdx(queueIndex);
}

function queuePlayPrev() {

    if (queueIndex <= 0) {
        return;
    }
    queueIndex--;
    _queueDisplay();
	queuePlayIdx(queueIndex);
}