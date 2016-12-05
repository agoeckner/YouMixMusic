console.log("script loaded");

var videoPlayer = document.getElementById('videoPlayer');

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

function loadVideo(YID) {
	var initialURL = "http://www.youtube.com/embed/";
	var parameters = "?controls=0&cc_load_policy=0&showinfo=0&modestbranding=1&enablejsapi=1&rel=0&autoplay=1";
	var result = initialURL + YID + parameters;

	videoPlayer.src = result;
}

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('videoPlayer', {
		height: '100%',
		width: '20%',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		},
		playerVars: {
			html5: 1
		}
	});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	console.log("Player ready")
	videoPlayer = document.getElementById('videoPlayer');
	if (queueIndex == -1) {
		//player.addEventListener('onStateChange', onPlayerStateChange);
		videoPlayer.style.float = 'left';
		videoPlayer.style.visibility = 'hidden';
	}
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
	console.log("IT DID SOMETHING " + event.data);
	if (event.data == YT.PlayerState.ENDED) {
		queuePlayNext();
	}
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