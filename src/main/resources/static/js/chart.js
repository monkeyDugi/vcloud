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
,   url :  "/songs/chart/top/thirty"
,   dataType : "JSON"
,   contentType : "application/json"
,   success : function(obj) {
        songList = obj;
        songListSet();
    }
});

// 음악 목록 Set
function songListSet() {
	for(let i=0; i<=songList.length; i++) {
		document.getElementsByTagName('tr')[i+1].getElementsByTagName('td')[1].firstElementChild.src = songList[i].img;
		document.getElementsByTagName('tr')[i+1].getElementsByTagName('td')[2].firstElementChild.value = songList[i].url;
		document.getElementsByTagName('tr')[i+1].getElementsByTagName('td')[2].firstElementChild.dataset.index = i;
		document.getElementsByTagName('tr')[i+1].getElementsByTagName('td')[3].innerHTML = songList[i].title;
        document.getElementsByTagName('tr')[i+1].getElementsByTagName('td')[4].innerHTML = songList[i].singer;
        document.getElementsByTagName('tr')[i+1].getElementsByTagName('td')[5].firstElementChild.value = songList[i].live;
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
		return document.getElementsByTagName('tr')[currentSongIndex + 1].getElementsByTagName('td')[2].firstElementChild.value;
	}

	currentSongIndex = 0;
	return document.getElementsByTagName('tr')[1].getElementsByTagName('td')[2].firstElementChild.value;
}

 $('.playBtn').click(function() {
 	onclickVideoIdSet($(this));
 });

// onClick 시 VideoId, 현재노래 index Set
function onclickVideoIdSet(obj) {
	if(obj != null && obj != '') {
		videoId = obj.val();
        currentSongIndex = obj.data('index');
        console.log("currentSongIndex : " + currentSongIndex);
	} else {
        videoId = endedVideoIdSet();
        console.log(videoId);
	}

	videoLoad(videoId);
}

// 지정한 동영상 로드
function videoLoad(videoId) {
	player.loadVideoById(videoId, 0, 'small');
}
