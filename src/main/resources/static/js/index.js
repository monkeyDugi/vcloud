/*
 * Descript : 메인화면 js, youtube 영상재생 common으로 변경 될 수도 있음.
 * ---------------------------------------------------------------------
 * 작성일         작성자                            내용
 * ---------------------------------------------------------------------
 * 20191212       이병덕                            init
**/
let videoId;
let tag;
let nextSong;
let preSong;
let currentSongIndex;
let songList = [
	{
		'url' : '0clr0fJhCRM'
	,	'img' : 'https://i.ytimg.com/vi/0clr0fJhCRM/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBgMnrRAHc3J1-R8dVwq-WTP6vJBg'
	, 	'title' : 'fall away'
	,   'singer' : '김범수, 에일리'
	}
,
	{
		'url' : 'zxhVITT3OGk'
	,	'img' : 'https://i.ytimg.com/vi/zxhVITT3OGk/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBdsqjMRrM3auUZje1GOd3ATSUrsA'
	, 	'title' : '잠시만 안녕'
	,   'singer' : '이수'
	}
,
	{
		'url' : 'w_k39JRSTtw'
	,	'img' : 'https://i.ytimg.com/vi/w_k39JRSTtw/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLD-2X4GTXcOM_pfFXKZoyd52BnZUA'
	, 	'title' : '제발'
	,   'singer' : '김범수'
	}
,
	{
		'url' : '1mkMMxXRppg'
	,	'img' : 'https://i.ytimg.com/vi/1mkMMxXRppg/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLDgvUgRD1A9iV6eluRh6Gd7eeOFrQ'
	, 	'title' : 'your my lady'
	,   'singer' : '김건모'
	}
,
	{
		'url' : '2H7fkiqM8ms'
	,	'img' : 'https://i.ytimg.com/vi/2H7fkiqM8ms/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLBQ-c4ZArxrzSIN5UznUMLMviwvXg'
	, 	'title' : '술이야'
	,   'singer' : '장혜진'
	}
,
	{
		'url' : 'cDS3vu_Ep6E'
	,	'img' : 'https://i.ytimg.com/vi/cDS3vu_Ep6E/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDpbGrSxdabqDYFRdOeYzXj_dBA9A'
	, 	'title' : '너를위해'
	,   'singer' : '임재범'
	}
,
	{
		'url' : '5oFnMWvEPsY'
	,	'img' : 'https://i.ytimg.com/vi/5oFnMWvEPsY/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCsnjpPlnCnJ_tD744xALUs5HQS6g'
	, 	'title' : '지나간다'
	,   'singer' : '김범수'
	}
,
	{
		'url' : 'MkX2ZLAlbq8'
	,	'img' : 'https://i.ytimg.com/vi/MkX2ZLAlbq8/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCh2aNx91giHrJnBbzDHK6HvOnIfw'
	, 	'title' : '날 널 사랑해'
	,   'singer' : '김범수'
	}
,
	{
		'url' : 'OKcELJjsDZQ'
	,	'img' : 'https://i.ytimg.com/vi/OKcELJjsDZQ/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAwX701GYPxf1mIbpS7Hv-thb9UHQ'
	, 	'title' : '끝사랑'
	,   'singer' : '김범수'
	}
,
	{
		'url' : '5aN08SaYJ6E'
	,	'img' : 'https://i.ytimg.com/vi/5aN08SaYJ6E/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDL0KRV9doLSjcD4wX6eshYAfdb_Q'
	, 	'title' : '보고싶다, 나의하루'
	,   'singer' : '박정현, 김범수'
	}
,
	{
		'url' : 'AYbEV4aOMAA'
	,	'img' : 'https://i.ytimg.com/vi/AYbEV4aOMAA/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLC-aTD2eKfTCoSCqiHQ83ONxyaFuA'
	, 	'title' : '님과함께, 아모르 파티'
	,   'singer' : '김범수'
	}
,
	{
		'url' : 'ABaMJM_I8tA'
	,	'img' : 'https://i.ytimg.com/vi/ABaMJM_I8tA/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCE-Wk5iQ8_N2K1T_Zzl3l7BP4TPA'
	, 	'title' : 'ROCK STAR'
	,   'singer' : '김범수'
	}
];

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

songListSet();

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

// Album Click
// Vanila.js로 변경가능하면 변경
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
