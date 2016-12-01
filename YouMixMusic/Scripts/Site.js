(function () {
    var element = document.getElementsByClassName('yt-link');
    if (element) {
        var display = document.getElementsByTagName("iframe")[0];
        getPlaylist(element, display, "recent", "PL5HkNpFmcHE5m3E0qXfAxvD58dvVcmafm");
    }
}());

function getPlaylist(elementList, display, category, playlistId) {
    var data;
    var images = document.getElementsByClassName('yt-thumb');
    $.get("https://www.googleapis.com/youtube/v3/playlistItems?" +
                "part=snippet&maxResults=10&playlistId=" + playlistId +
                "&key=AIzaSyC1KDOmFxYy_81d_ydVs46RuM-mMtfA_wg", function (data) {
                    playlistLoop(data, elementList, images, display);
                }
    );
}

function playlistLoop(data, elementList, images, display) {
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
    }
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