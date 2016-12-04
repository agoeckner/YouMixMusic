console.log("script loaded");
$('#searchForm').submit(function () {
	console.log($('#SearchField')[0].value);
	clearSearchResults();
    getSearch($('#SearchField')[0].value);
    return false;
});

function getSearch(searchTerm) {
    var data;
    var images = document.getElementsByClassName('yt-thumb');
    $.get("https://www.googleapis.com/youtube/v3/search?" +
                "part=snippet&maxResults=10&q=" + searchTerm +
                "&key=AIzaSyC1KDOmFxYy_81d_ydVs46RuM-mMtfA_wg", function (data) {
                    searchResults(data);
                }
    );
}

function clearSearchResults() {
	var parent = document.getElementById("results");
	while (parent.hasChildNodes()) {
		parent.removeChild(parent.lastChild);
	}
}

function searchResults(data) {
    console.log(data);
    console.log("inside searchResults");
    var results = data.items;
    var length = results.length;
    var parent = document.getElementById("results");
    for (var i = 0; i < length; i++) {
        var li = document.createElement("li");
        li.setAttribute("class", "panel panel-info");
        var heading = document.createElement("div");
        heading.setAttribute("class", "panel-heading");
        var title = document.createTextNode(results[i].snippet.title);
        var body = document.createElement("div");
        body.setAttribute("class", "panel-body");
        var img = document.createElement("img");
        img.setAttribute("alt", results[i].id.videoId);
        img.setAttribute("src", results[i].snippet.thumbnails.default.url);
        img.setAttribute("style", "width: 30%;");

        body.appendChild(img);
        heading.appendChild(title);
        li.appendChild(heading);
        li.appendChild(body);
        parent.appendChild(li);
        //console.log(li);
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

jQuery(function ($) {
    var panelList = $('#draggablePanelList');

    panelList.sortable({
        // Only make the .panel-heading child elements support dragging.
        // Omit this to make then entire <li>...</li> draggable.
        handle: '.panel-heading',
        update: function () {
            $('.panel', panelList).each(function (index, elem) {
                var $listItem = $(elem),
                    newIndex = $listItem.index();

                // Persist the new indices.
            });
        }
    });
});

jQuery(function ($) {
    var panelList2 = $('#draggablePanelList2');

    panelList2.sortable({
        // Only make the .panel-heading child elements support dragging.
        // Omit this to make then entire <li>...</li> draggable.
        handle: '.panel-heading',
        update: function () {
            $('.panel', panelList2).each(function (index, elem) {
                var $listItem = $(elem),
                    newIndex = $listItem.index();

                // Persist the new indices.
            });
        }
    });
});