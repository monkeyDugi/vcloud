/*
 * File Name : myListTest.js
 * Descript  : 마이리스트 화면 js
 */
$(function() {

//  최근들은곡 TEST
//    var recentSongsCookie = 'singer=' + 'BSK' + ';'
//                          + 'song='   + '꾸러기' + ';'
//                          + 'url='    + 'url' + ';'
//                          + 'img='    + 'img' + ';';
//
//    var recentSongsList = [
//        'singer=BSK'
//    ,   'song=꾸러기'
//    ,   'url=www.abc.abc'
//    ,   'img=www.bbb.bbb'
//    },
//    {
//        'singer=BSK2'
//    ,   'song=꾸러기2'
//    ,   'url=www.abc.abc2'
//    ,   'img=www.bbb.bbb2'
//    }
//    ];

    var cookieName =
    [
            'singer'
        ,   'song'
        ,   'url'
        ,   'img'
    ];

    var cookieValue =
    [
            '박효신,'
        ,   '야생화,'
        ,   'naver.com1,'
        ,   '.png1,'
    ];

    for(var i=0; i<cookieName.length; i++) {

        var values = $.cookie(cookieName[i])
        var maxLength = 5;
        var expireDay = 5;

        // 해당 아이디에 값이 있다면
        if(values) {

            // ','구분자로 짤라서 배열로 만든다.
            valueArray = values.split(',');

            // 만들어진 배열에서 해당 값이 존재하는지 확인
            if(valueArray.indexOf(cookieValue[i]) != -1) {

                console.log('이미 존재함');

            // 값이 없으면
            } else {

                //  배열가장 앞에 추가
                valueArray.unshift(cookieValue[i]);

                if(valueArray.length > maxLength) {

                    valueArray.length = maxLength;

                    values = valueArray.join(',');
                    $.cookie(cookieName[i], values, expireDay);
                }
            }
        } else {

            $.cookie(cookieName[i], cookieValue[i], { expires: expireDay });
        }

//        $.cookie(cookieName[i], cookieValue[i] + ',', { expires: expireDay });
//        console.log($.cookie(cookieName[i]));
    }
        console.log($.cookie());


});