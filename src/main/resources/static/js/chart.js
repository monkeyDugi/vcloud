/*
 * Descript : 차트화면 js, youtube 영상재생 common으로 변경 될 수도 있음.
 * ---------------------------------------------------------------------
 * 작성일         작성자                            내용
 * ---------------------------------------------------------------------
 * 20191216      monkeyDugi                       init
************************************************************************/

$.ajax({
    type : "GET"
,   url :  "/songs/chart/thirty"
,   dataType : "JSON"
,   contentType : "application/json"
,   success : function(obj) {
        songList = obj;
        console.log(songList);
//        songListSet();
    }
});


