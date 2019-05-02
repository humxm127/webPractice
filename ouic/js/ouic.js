//JavaScript Document
$(document).ready(function(){
	/* 메뉴 */
	$('.gnbMenu > li').mouseover(function(){
		$('.depth2, .subBg').stop().slideDown(400);
	});
	$('.gnbMenu > li').mouseleave(function(){
		$('.depth2, .subBg').stop().slideUp(400);
	});
	
	/* 검색창 */
	$('a.schBtn').click(function(){
		$('.schArea > .schForm').show();
		$('a.schBtn').hide();
	});
	$('a.xBtn').click(function(){
		$('.schArea > .schForm').hide();
		$('a.schBtn').show();
	});
	
	/* 메인 슬라이드 */
	$('.mSlide').bxSlider({
		auto: true,
		speed: 500,
		controls: false,
		pager:true,
		pause: 5000,
	});
	
	/* 공지사항 슬라이드 */
	$('.nList').bxSlider({
		auto: true,
		speed: 500,
		controls: false,
		pagerCustom: '#bx-pager-notice', /* 변경 pager 지정 */
		pause: 5000,
		slideWidth: 300,
		minSlides: 1,
		maxSlides: 4,
		moveSlides: 1
	});
	
	/* 창업보육센터_지원사업안내 슬라이드 */
	$('.infoSlide').bxSlider({
		auto: true,
		speed: 500,
		controls: true,
		pager: false,
		pause: 5000,
	});

	/* 창업보육센터_공지사항 슬라이드 */
	$('.noticeSlide').bxSlider({
		auto: true,
		speed: 500,
		mode: 'vertical',
		slideWidth: 250,		
		controls: true,
		nextSelector: '#slider-down',    /* 화살표 디자인 변경 */
		prevSelector: '#slider-up',
		nextText: '<i class="fas fa-caret-up"></i>',
		prevText: '<i class="fas fa-caret-down"></i>',
		pager: false,
		pause: 5000,
	});
	
	/* OUIC on facebook_슬라이드*/
	$('.fbSlide').bxSlider({
		auto: false,
		speed: 500,
		pause: 5000,
		pager: false,
		controls: true,
		nextSelector: '#slider-next',   /* 화살표 디자인 변경 */
		prevSelector: '#slider-prev',
		nextText: '<i class="fas fa-arrow-right"></i>',
		prevText: '<i class="fas fa-arrow-left"></i>',
		slideWidth: 300,
		minSlides: 1,
		maxSlides: 3,
		moveSlides: 1,
		slideMargin: 50,
	});
});
