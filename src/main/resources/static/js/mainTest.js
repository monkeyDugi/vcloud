/*
 * File Name : main.js
 * Descript  : 메인화면 js
 */
$(function() {

//  랜덤10개 TEST
	$.ajax({

		type: "GET"
	,	url: "/songs/ten"
	,	dataType: "JSON"
	,	contentType: "application/json"
	,	success: function(obj) {
//			console.log(obj);
			getTenRandomSongs(obj);
		}
	,	error: function(xhr, status, error) { alert('실패'); }
	});

	function getTenRandomSongs(obj) {
//        console.log(obj);

        for(i=0; i<obj.length; i++) {
            $("body").append("{ id: " + obj[i].id + ", ");
            $("body").append("rnak : " + obj[i].rank + ", ");
            $("body").append("url : " + obj[i].url + ", ");
            $("body").append("img_path : " + obj[i].img_path + ", ");
            $("body").append("singer : " + obj[i].singer + ", ");
            $("body").append("title : " + obj[i].title + ", ");
            $("body").append("live : " + obj[i].live + "}, ");
            $("body").append("</br>");
        }
	}
});