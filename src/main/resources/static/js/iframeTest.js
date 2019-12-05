/*
 * Youtube API Load
 */
tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/*
 * 필수
 * 플레이어 API에 대한 JavaScript 다운로드 완료 시 API가 이 함수 호출한다.
 * 페이지 로드 시 표시할 플레이어 개체를 만들어야 한다.
 */
var player;
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
        // 반복재생
        //player.playVideo();
    }
}

$(function() {

    var id;
    var tag;

    // Dingo Click
    $('.dingo').click(function() {
        idSet($(this));
    });

    // Album CLick
    $('.album').click(function() {
        idSet($(this));
    });


    // Video Id Set
    function idSet(obj) {
        id = obj.parent().children().eq(0).val();

        play(id);
    }

    // 지정한 동영상 로드 후 재생
    function play(id) {
        player.loadVideoById(id, 0, 'small');
    }
});
