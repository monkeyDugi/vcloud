/*
 * Descript : 일간차트 js, youtube 영상재생 common으로 변경 될 수도 있음.
 * ---------------------------------------------------------------------
 * 작성일         작성자                            내용
 * ---------------------------------------------------------------------
 * 20191219       이병덕                            init
************************************************************************/

let songList;


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
		document.getElementsByTagName('tr')[i+1].getElementsByTagName('td')[3].innerHTML = songList[i].title;
        document.getElementsByTagName('tr')[i+1].getElementsByTagName('td')[4].innerHTML = songList[i].singer;
        document.getElementsByTagName('tr')[i+1].getElementsByTagName('td')[5].firstElementChild.value = songList[i].live;
        document.getElementsByTagName('index')[i].dataset.index = i;
	}
}
