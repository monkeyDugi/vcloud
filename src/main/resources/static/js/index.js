/*
 * Descript : 메인화면 js, youtube 영상재생 common으로 변경 될 수도 있음.
 * ---------------------------------------------------------------------
 * 작성일         작성자                            내용
 * ---------------------------------------------------------------------
 * 20191212       이병덕                            init
************************************************************************/
let videoId;
let tag;
let currentSongIndex;
let songList;

/**
 * Youtube API Load
 */
tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/**
 * 필수
 * 플레이어 API에 대한 JavaScript 다운로드 완료 시 API가 이 함수 호출한다.
 * 페이지 로드 시 표시할 플레이어 개체를 만들어야 한다.
 */
let player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '200',
		width: '200',
		videoId: '',
		events: {
			'onReady': onPlayerReady,               // 플레이어 로드가 완료되고 API 호출을 받을 준비가 될 때마다 실행
			'onStateChange': onPlayerStateChange    // 플레이어의 상태가 변경될 때마다 실행
		}
	});
}

function onPlayerReady(event) {
	// 재생
	// 커스텀 펑션으로 뺀다면 player.playVideo()로 사용.
	event.target.playVideo();
}

function onPlayerStateChange(event) {
	if(event.data == YT.PlayerState.ENDED) {
		onclickVideoIdSet();
	}
}

$.ajax({
    type : "GET"
,   url :  "/songs/chart/twelve/random"
,   dataType : "JSON"
,   contentType : "application/json"
,   success : function(obj) {
        songList = obj;
        songListSet();
    }
});

// 음악 목록 Set
function songListSet() {
	for(let i=0; i<songList.length; i++) {
		document.getElementsByTagName('url')[i].dataset.url = songList[i].url;
		document.getElementsByTagName('index')[i].dataset.index = i;
		document.getElementsByClassName('video-item-title')[i].innerHTML = songList[i].title;
		document.getElementsByClassName('video-item-img')[i].firstElementChild.src = songList[i].img;
		document.getElementsByClassName('video-item-artist')[i].innerHTML = songList[i].singer;
	}
}

// 마지막 곡인지 체크
function lastSongChk() {
	if(++currentSongIndex ==  songList.length) {
		return false;
	}

	return true;
}

// 재상완료 후 다음곡 or 1번 곡 idSet
function endedVideoIdSet() {
	if(lastSongChk()) {
		return document.getElementsByTagName('url')[currentSongIndex].dataset.url
	}

	currentSongIndex = 0;
	return document.getElementsByTagName('url')[0].dataset.url
}

 $('.video-item').click(function() {
 	onclickVideoIdSet($(this));
 });

// onClick 시 VideoId, 현재노래 index Set
function onclickVideoIdSet(obj) {
	if(obj != null && obj != '') {
		videoId = obj.children().children('url').data('url');
		currentSongIndex = obj.children().children('index').data('index');
	} else {
		videoId = endedVideoIdSet();
	}
	
	videoLoad(videoId);
}

// 지정한 동영상 로드
function videoLoad(videoId) {
	player.loadVideoById(videoId, 0, 'small');
}
