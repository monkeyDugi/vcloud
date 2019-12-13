$(document).ready(function(){	
	// 헤더
	$('.btn-menu').click(function(){
		if ($(this).hasClass("active")) {
			$('body').removeAttr("style");
			$(this).removeClass("active");
			$('.mb_menu').removeClass("active");
		} else {
			$('body').css('overflow','hidden');
			$(this).addClass("active");
			$('.mb_menu').addClass("active");
		}
	});
	// 아코디언메뉴
	var $target = $('.accordeon > li'),
		isClass = 'active';		
	var $targetCss = $target.attr("class");		
	if($targetCss= "active") {
		$(".active").find(".accbody").slideDown();
	}
	$target.on('click', function () {
		var _$self = $(this),
		oldClass = _$self.siblings('.' + isClass);
		if(!!oldClass) {
			oldClass.removeClass(isClass);
			$(".accbody",oldClass).slideUp();
		}
		if(!_$self.is(isClass)) {
		   _$self.addClass('active');
			$(this).find(".accbody").slideDown();
		}
		isClass = _$self.attr('class');
	});

	// 검색차트
	$('.dayMenu>ul>li>a').on('click',function(){
		$(this).addClass('on').siblings().removeClass('on');
	});

	// 차트 탭메뉴
	$('.dayMenu>ul>li a').on('click',function(){
		$('.dayMenu>ul>li a').removeClass('on');
		$(this).addClass('on');
		$('.dayMenu_sub').hide();
		var target = $(this).attr('href');
		$(target).show();
	});
	$('.findMenu>li a').on('click',function(){
		$('.findMenu>li a').removeClass('on');
		$(this).addClass('on');
		$('.findMenu_sub').hide();
		var target = $(this).attr('href');
		$(target).show();
	});
});