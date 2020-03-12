$(document).ready(function(){
	
	/*gnb 스크롤 탑 픽스*/	
	$(window).scroll(function(){
		var scrollTop02=$(document).scrollTop();
		if( scrollTop02 >= 105 ){
			$("#header").css({ "position" : "fixed" , "top" : "-105px", "z-index": "9999"});
		}else{
			$("#header").css({ "position" : "relative","top":"0"});
		}		
	});
/* 메뉴 */
	$(".main_menu").mouseenter(function(){
		$(this).find(".sub").stop().slideToggle(100);
		$(this).find(".menuBack").stop().slideToggle(0);
	});
	
	$(".main_menu").mouseleave(function(){
		$(this).find(".sub").stop().slideToggle(500);
		$(this).find(".menuBack").stop().slideToggle(0);
	});
	
/* main slider 이미지 전환 */	
	
/* 발렌타인 모달창 */	
$(function(){
	$(".valen_img").click(function(){
		event.preventDefault();
		//a의 이벤트명.preventDdfault(); a의 하이퍼링크 기능을 무시..
		$("div.black").show();
		$("div.myWin").show();
		var myWinBack ="url("+ $('.thum_img').attr('href')+ ')';
		$("div.myWin").css("background-image",myWinBack);	
		return false; //a의 하이퍼링크 기능을 무시..
	});			
					
	$("p.close img").click(function(){
		$("div.black").hide();
		$("div.myWin").hide();
	});						
});	

	
	

});//$(function(){ 끝