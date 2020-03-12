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
	
	/* 메뉴  */
	
/* 1번 메뉴 */		
	$("#gnb .top_menu1").mouseenter(function(){
		$('#black_1').addClass("on");
		$('.sub_1').addClass("on");
		$('.stacking').stop().slideDown();
	});
	$(".search").mouseenter(function(){
		$('#black_1').removeClass("on");
		$('.sub_1').removeClass("on");
		$('.stacking').stop().slideUp();	
	});
	$("#black_1").mouseleave(function(){
		$('#black_1').removeClass("on");
		$('.sub_1').removeClass("on");
		$('.stacking').stop().slideUp();	
	});
/* 1번 */	
	$("#gnb .top_menu1").mouseenter(function(){
		$('#black_2').removeClass("on");
		$('.sub_2').removeClass("on");
		$('.cham').stop().slideUp();	
	});
	$("#gnb .top_menu1").mouseenter(function(){
		$('#black_3').removeClass("on");
		$('.sub_3').removeClass("on");
		$('.ring').stop().slideUp();	
	});
	$("#gnb .top_menu1").mouseenter(function(){
		$('#black_4').removeClass("on");
		$('.sub_4').removeClass("on");
		$('.bangle').stop().slideUp();	
	});
	$("#gnb .top_menu1").mouseenter(function(){
		$('#black_5').removeClass("on");
		$('.sub_5').removeClass("on");
		$('.neck').stop().slideUp();	
	});
	$("#gnb .top_menu1").mouseenter(function(){	
		$('#black_6').removeClass("on");
		$('.sub_6').removeClass("on");
		$('.earring').stop().slideUp();	
	});
	$("#gnb .top_menu1").mouseenter(function(){	
		$('#black_7').removeClass("on");
		$('.sub_7').removeClass("on");
		$('.gift').stop().slideUp();	
	});
	$("#gnb .top_menu1").mouseenter(function(){	
		$('#black_8').removeClass("on");
		$('.sub_8').removeClass("on");
		$('.club').stop().slideUp();	
	});
/* 1번끝 */	
	
/* 2번 메뉴 */			
	$("#gnb .top_menu2").mouseenter(function(){
		$('#black_2').addClass("on");
		$('.sub_2').addClass("on");
		$('.cham').stop().slideDown();
	});
	$(".search").mouseenter(function(){
		$('#black_2').removeClass("on");
		$('.sub_2').removeClass("on");
		$('.cham').stop().slideUp();	
	});
	$("#black_2").mouseleave(function(){
		$('#black_2').removeClass("on");
		$('.sub_2').removeClass("on");
		$('.cham').stop().slideUp();	
	});
/* 2번 */	
	$("#gnb .top_menu2").mouseenter(function(){
		$('#black_1').removeClass("on");
		$('.sub_1').removeClass("on");
		$('.stacking').stop().slideUp();	
	});
	$("#gnb .top_menu2").mouseenter(function(){
		$('#black_3').removeClass("on");
		$('.sub_3').removeClass("on");
		$('.ring').stop().slideUp();	
	});
	$("#gnb .top_menu2").mouseenter(function(){
		$('#black_4').removeClass("on");
		$('.sub_4').removeClass("on");
		$('.bangle').stop().slideUp();	
	});
	$("#gnb .top_menu2").mouseenter(function(){
		$('#black_5').removeClass("on");
		$('.sub_5').removeClass("on");
		$('.neck').stop().slideUp();	
	});
	$("#gnb .top_menu2").mouseenter(function(){	
		$('#black_6').removeClass("on");
		$('.sub_6').removeClass("on");
		$('.earring').stop().slideUp();	
	});
	$("#gnb .top_menu2").mouseenter(function(){	
		$('#black_7').removeClass("on");
		$('.sub_7').removeClass("on");
		$('.gift').stop().slideUp();	
	});
	$("#gnb .top_menu2").mouseenter(function(){	
		$('#black_8').removeClass("on");
		$('.sub_8').removeClass("on");
		$('.club').stop().slideUp();	
	});
/* 2번끝 */	
	
	
/* 3번 메뉴*/		
	$("#gnb .top_menu3").mouseenter(function(){
		$('#black_3').addClass("on");
		$('.sub_3').addClass("on");
		$('.ring').stop().slideDown();
	});
	$(".search").mouseenter(function(){
		$('#black_3').removeClass("on");
		$('.sub_3').removeClass("on");
		$('.ring').stop().slideUp();	
	});
	$("#black_3").mouseleave(function(){
		$('#black_3').removeClass("on");
		$('.sub_3').removeClass("on");
		$('.ring').stop().slideUp();	
	});
/* 3번 */	
	$("#gnb .top_menu3").mouseenter(function(){
		$('#black_1').removeClass("on");
		$('.sub_1').removeClass("on");
		$('.stacking').stop().slideUp();	
	});
	$("#gnb .top_menu3").mouseenter(function(){
		$('#black_2').removeClass("on");
		$('.sub_2').removeClass("on");
		$('.cham').stop().slideUp();	
	});
	$("#gnb .top_menu3").mouseenter(function(){
		$('#black_4').removeClass("on");
		$('.sub_4').removeClass("on");
		$('.bangle').stop().slideUp();	
	});
	$("#gnb .top_menu3").mouseenter(function(){
		$('#black_5').removeClass("on");
		$('.sub_5').removeClass("on");
		$('.neck').stop().slideUp();	
	});
	$("#gnb .top_menu3").mouseenter(function(){	
		$('#black_6').removeClass("on");
		$('.sub_6').removeClass("on");
		$('.earring').stop().slideUp();	
	});
	$("#gnb .top_menu3").mouseenter(function(){	
		$('#black_7').removeClass("on");
		$('.sub_7').removeClass("on");
		$('.gift').stop().slideUp();	
	});
	$("#gnb .top_menu3").mouseenter(function(){	
		$('#black_8').removeClass("on");
		$('.sub_8').removeClass("on");
		$('.club').stop().slideUp();	
	});
/* 3번끝 */	

/* 4번 메뉴 */		
	$("#gnb .top_menu4").mouseenter(function(){
		$('#black_4').addClass("on");
		$('.sub_4').addClass("on");
		$('.bangle').stop().slideDown();
	});
	$(".search").mouseenter(function(){
		$('#black_4').removeClass("on");
		$('.sub_4').removeClass("on");
		$('.bangle').stop().slideUp();	
	});
	$("#black_4").mouseleave(function(){
		$('#black_4').removeClass("on");
		$('.sub_4').removeClass("on");
		$('.bangle').stop().slideUp();	
	});
/* 4번 */	
	$("#gnb .top_menu4").mouseenter(function(){
		$('#black_1').removeClass("on");
		$('.sub_1').removeClass("on");
		$('.stacking').stop().slideUp();	
	});
	$("#gnb .top_menu4").mouseenter(function(){
		$('#black_2').removeClass("on");
		$('.sub_2').removeClass("on");
		$('.cham').stop().slideUp();	
	});
	$("#gnb .top_menu4").mouseenter(function(){
		$('#black_3').removeClass("on");
		$('.sub_3').removeClass("on");
		$('.ring').stop().slideUp();	
	});
	$("#gnb .top_menu4").mouseenter(function(){
		$('#black_5').removeClass("on");
		$('.sub_5').removeClass("on");
		$('.neck').stop().slideUp();	
	});
	$("#gnb .top_menu4").mouseenter(function(){	
		$('#black_6').removeClass("on");
		$('.sub_6').removeClass("on");
		$('.earring').stop().slideUp();	
	});
	$("#gnb .top_menu4").mouseenter(function(){	
		$('#black_7').removeClass("on");
		$('.sub_7').removeClass("on");
		$('.gift').stop().slideUp();	
	});
	$("#gnb .top_menu4").mouseenter(function(){	
		$('#black_8').removeClass("on");
		$('.sub_8').removeClass("on");
		$('.club').stop().slideUp();	
	});
/* 4번끝 */	

/* 5번 메뉴 */			
	$("#gnb .top_menu5").mouseenter(function(){
		$('#black_5').addClass("on");
		$('.sub_5').addClass("on");
		$('.neck').stop().slideDown();
	});
	$(".search").mouseenter(function(){
		$('#black_5').removeClass("on");
		$('.sub_5').removeClass("on");
		$('.neck').stop().slideUp();	
	});
	$("#black_5").mouseleave(function(){
		$('#black_5').removeClass("on");
		$('.sub_5').removeClass("on");
		$('.neck').stop().slideUp();	
	});
/* 5번 */	
	$("#gnb .top_menu5").mouseenter(function(){
		$('#black_1').removeClass("on");
		$('.sub_1').removeClass("on");
		$('.stacking').stop().slideUp();	
	});
	$("#gnb .top_menu5").mouseenter(function(){
		$('#black_2').removeClass("on");
		$('.sub_2').removeClass("on");
		$('.cham').stop().slideUp();	
	});
	$("#gnb .top_menu5").mouseenter(function(){
		$('#black_3').removeClass("on");
		$('.sub_3').removeClass("on");
		$('.ring').stop().slideUp();	
	});
	$("#gnb .top_menu5").mouseenter(function(){
		$('#black_4').removeClass("on");
		$('.sub_4').removeClass("on");
		$('.bangle').stop().slideUp();	
	});
	$("#gnb .top_menu5").mouseenter(function(){	
		$('#black_6').removeClass("on");
		$('.sub_6').removeClass("on");
		$('.earring').stop().slideUp();	
	});
	$("#gnb .top_menu5").mouseenter(function(){	
		$('#black_7').removeClass("on");
		$('.sub_7').removeClass("on");
		$('.gift').stop().slideUp();	
	});
	$("#gnb .top_menu5").mouseenter(function(){	
		$('#black_8').removeClass("on");
		$('.sub_8').removeClass("on");
		$('.club').stop().slideUp();	
	});
/* 5번끝 */

/* 6번 메뉴 */		
	$("#gnb .top_menu6").mouseenter(function(){
		$('#black_6').addClass("on");
		$('.sub_6').addClass("on");
		$('.earring').stop().slideDown();
	});
	$(".search").mouseenter(function(){
		$('#black_6').removeClass("on");
		$('.sub_6').removeClass("on");
		$('.earring').stop().slideUp();	
	});
	$("#black_6").mouseleave(function(){
		$('#black_6').removeClass("on");
		$('.sub_6').removeClass("on");
		$('.earring').stop().slideUp();	
	});
/* 6번 */	
	$("#gnb .top_menu6").mouseenter(function(){
		$('#black_1').removeClass("on");
		$('.sub_1').removeClass("on");
		$('.stacking').stop().slideUp();	
	});
	$("#gnb .top_menu6").mouseenter(function(){
		$('#black_2').removeClass("on");
		$('.sub_2').removeClass("on");
		$('.cham').stop().slideUp();	
	});
	$("#gnb .top_menu6").mouseenter(function(){
		$('#black_3').removeClass("on");
		$('.sub_3').removeClass("on");
		$('.ring').stop().slideUp();	
	});
	$("#gnb .top_menu6").mouseenter(function(){
		$('#black_4').removeClass("on");
		$('.sub_4').removeClass("on");
		$('.bangle').stop().slideUp();	
	});
	$("#gnb .top_menu6").mouseenter(function(){	
		$('#black_5').removeClass("on");
		$('.sub_5').removeClass("on");
		$('.neck').stop().slideUp();	
	});
	$("#gnb .top_menu6").mouseenter(function(){	
		$('#black_7').removeClass("on");
		$('.sub_7').removeClass("on");
		$('.gift').stop().slideUp();	
	});
	$("#gnb .top_menu6").mouseenter(function(){	
		$('#black_8').removeClass("on");
		$('.sub_8').removeClass("on");
		$('.club').stop().slideUp();	
	});
/* 6번끝 */	

/* 7번 메뉴 */		
	$("#gnb .top_menu7").mouseenter(function(){
		$('#black_7').addClass("on");
		$('.sub_7').addClass("on");
		$('.gift').stop().slideDown();
	});
	$(".search").mouseenter(function(){
		$('#black_7').removeClass("on");
		$('.sub_7').removeClass("on");
		$('.gift').stop().slideUp();	
	});
	$("#black_7").mouseleave(function(){
		$('#black_7').removeClass("on");
		$('.sub_7').removeClass("on");
		$('.gift').stop().slideUp();
	});
/* 7번 */	
	$("#gnb .top_menu7").mouseenter(function(){
		$('#black_1').removeClass("on");
		$('.sub_1').removeClass("on");
		$('.stacking').stop().slideUp();	
	});
	$("#gnb .top_menu7").mouseenter(function(){
		$('#black_2').removeClass("on");
		$('.sub_2').removeClass("on");
		$('.cham').stop().slideUp();	
	});
	$("#gnb .top_menu7").mouseenter(function(){
		$('#black_3').removeClass("on");
		$('.sub_3').removeClass("on");
		$('.ring').stop().slideUp();	
	});
	$("#gnb .top_menu7").mouseenter(function(){
		$('#black_4').removeClass("on");
		$('.sub_4').removeClass("on");
		$('.bangle').stop().slideUp();	
	});
	$("#gnb .top_menu7").mouseenter(function(){	
		$('#black_5').removeClass("on");
		$('.sub_5').removeClass("on");
		$('.neck').stop().slideUp();	
	});
	$("#gnb .top_menu7").mouseenter(function(){	
		$('#black_6').removeClass("on");
		$('.sub_6').removeClass("on");
		$('.earring').stop().slideUp();	
	});
	$("#gnb .top_menu7").mouseenter(function(){	
		$('#black_8').removeClass("on");
		$('.sub_8').removeClass("on");
		$('.club').stop().slideUp();	
	});
/* 7번끝 */	

/* 8번 메뉴 */		
	$("#gnb .top_menu8").mouseenter(function(){
		$('#black_8').addClass("on");
		$('.sub_8').addClass("on");
		$('.club').stop().slideDown();
	});
	$(".search").mouseenter(function(){
		$('#black_8').removeClass("on");
		$('.sub_8').removeClass("on");
		$('.club').stop().slideUp();	
	});
	$("#black_8").mouseleave(function(){
		$('#black_8').removeClass("on");
		$('.sub_8').removeClass("on");
		$('.club').stop().slideUp();	
	});
/* 8번 */	
	$("#gnb .top_menu8").mouseenter(function(){
		$('#black_1').removeClass("on");
		$('.sub_1').removeClass("on");
		$('.stacking').stop().slideUp();	
	});
	$("#gnb .top_menu8").mouseenter(function(){
		$('#black_2').removeClass("on");
		$('.sub_2').removeClass("on");
		$('.cham').stop().slideUp();	
	});
	$("#gnb .top_menu8").mouseenter(function(){
		$('#black_3').removeClass("on");
		$('.sub_3').removeClass("on");
		$('.ring').stop().slideUp();	
	});
	$("#gnb .top_menu8").mouseenter(function(){
		$('#black_4').removeClass("on");
		$('.sub_4').removeClass("on");
		$('.bangle').stop().slideUp();	
	});
	$("#gnb .top_menu8").mouseenter(function(){	
		$('#black_5').removeClass("on");
		$('.sub_5').removeClass("on");
		$('.neck').stop().slideUp();	
	});
	$("#gnb .top_menu8").mouseenter(function(){	
		$('#black_6').removeClass("on");
		$('.sub_6').removeClass("on");
		$('.earring').stop().slideUp();	
	});
	$("#gnb .top_menu8").mouseenter(function(){	
		$('#black_7').removeClass("on");
		$('.sub_7').removeClass("on");
		$('.gift').stop().slideUp();	
	});
/* 8번끝 */	

/* slider */
	$(function(){
		var n=0;
		var img_count = $(".imgwrap li").last().index()+1; 
			$(".btn_next").click(function(){	
				n++;
				if(n==5){
					$('.imgwrap').css({left:0});
					n=1; /* 첫번째 이미지의 인덱스 번호 */
				}
			$('.imgwrap').stop(true).animate({left:-1250*n});
		});
	
		$(".btn_prev").click(function(){
			 n--;
			console.log(n);
			if(n==-1){ /**/
				$(".imgwrap").css({left:-5000}); // img_count-5 에서 5는 보여질 창의 크기 수
			 	n=3;
			}
				$(".imgwrap").stop(true).animate({left:-1250*n}); /**/
		});
	});

/**/



}); //$(function(){ 끝
