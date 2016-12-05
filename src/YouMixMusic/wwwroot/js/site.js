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

function loadVideo(yid) {
	player.loadVideoById(yid);
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
			'onReady': onPlayerReady
		},
		playerVars: {
			html5: 1,
			cc_load_policy: 0,
			controls: 0,
			modestbranding: 1,
			rel: 0,
			showinfo: 0
		}
	});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	console.log("Player ready")
	event.target.playVideo();
	videoPlayer = document.getElementById('videoPlayer');
	if (queueIndex == -1) {
		event.target.addEventListener('onStateChange', onPlayerStateChange);
		videoPlayer.style.float = 'left';
		//videoPlayer.style.visibility = 'hidden';
		videoPlayer.style.display = 'none';
	}
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var mytimer;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
		queuePlayNext();
	}
	else if (event.data == YT.PlayerState.PLAYING) {

		$('#progressBar').show();
		var playerTotalTime = player.getDuration();

		mytimer = setInterval(function () {
			var playerCurrentTime = player.getCurrentTime();
			var playerTimeDifference = (playerCurrentTime / playerTotalTime) * 100;
			setProgressBar(playerTimeDifference, $('#progressBar'));
		}, 1000);
	} else {

		clearTimeout(mytimer);
		$('#progressBar').hide();
	}
}

function setProgressBar(percent, $element) {
	var progressBarWidth = percent * $element.width() / 100;

	// $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");

	$element.find('div').animate({ width: progressBarWidth });
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
}

function initialize() {
	$.get(
		"./api/motd",
		null,
		function (data) {
			console.log("Got MOTD.");
			welcomePanel.innerHTML = welcomePanel.innerHTML + "<br /><br />" + data;
		}
	);

	uiHideAllPanels();
	uiSetPanel(welcomePanel, 0);
	uiSetPanel(queuePanel, 1);
}
initialize();