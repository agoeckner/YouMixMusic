console.log("script loaded");

// Register panels.
var resultsList = document.getElementById("resultsList");
var resultsPanel = document.getElementById("resultsPanel");
uiRegisterPanel(resultsPanel);
var welcomePanel = document.getElementById("welcomePanel");
uiRegisterPanel(welcomePanel);

$('#searchForm').submit(function () {
	console.log($('#SearchField')[0].value);
	clearSearchResults();
	uiSetPanel(resultsPanel, 0)
    getSearch($('#SearchField')[0].value);
    return false;
});

function getSearch(searchTerm) {
    var data;
    var images = document.getElementsByClassName('yt-thumb');
    $.get("https://www.googleapis.com/youtube/v3/search?" +
                "part=snippet&maxResults=10&q=" + searchTerm +
                "&key=AIzaSyC1KDOmFxYy_81d_ydVs46RuM-mMtfA_wg" +
				"&type=video", function (data) {
                    searchResults(data);
                }
    );
}

function clearSearchResults() {
	while (resultsList.hasChildNodes()) {
		resultsList.removeChild(resultsList.lastChild);
	}
}

function searchResults(data) {
    var results = data.items;
    var length = results.length;
    for (var i = 0; i < length; i++) {
        var li = uiCreateRow(results[i], "div");
        resultsList.appendChild(li);
    }
    
    /*
    var playlist = data.items;
    var length = data.resultsPerPage;
    for (i = 0, len = elementList.length; (i < len) ; i++) {
        elementList[i].setAttribute("title", playlist[i].snippet.resourceId.videoId);
        elementList[i].innerHTML = playlist[i].snippet.title;
        elementList[i].onclick = function () {
            videoId = this.getAttribute("title");
            videoLink = "http://www.youtube.com/embed/" + videoId + "?rel=0";
            if (display.getAttribute("src") != videoLink)
                display.setAttribute("src", videoLink);
            return false;
        }
        elementList[i].style.visibility = "visible";
        images[i].setAttribute("src", "http://i.ytimg.com/vi/" + playlist[i].snippet.resourceId.videoId + "/mqdefault.jpg");
        images[i].setAttribute("title", playlist[i].snippet.resourceId.videoId);
        images[i].style.visibility = "visible";
        images[i].onclick = function () {
            videoId = this.getAttribute("title");
            videoLink = "http://www.youtube.com/embed/" + videoId + "?rel=0";
            if (display.getAttribute("src") != videoLink)
                display.setAttribute("src", videoLink);
            return false;
        }
        if ((i == 0)) {
            videoId = elementList[0].getAttribute("title");
            videoLink = "http://www.youtube.com/embed/" + videoId + "?rel=0";
            display.setAttribute("src", videoLink);
        }
    }*/
}

function initialize() {
	uiHideAllPanels();
	uiSetPanel(welcomePanel, 0);
	uiSetPanel(queuePanel, 1);
}
initialize();