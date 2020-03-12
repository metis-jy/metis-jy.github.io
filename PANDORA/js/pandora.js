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
	/* $(function(){
					//var cnt=0;
		setInterval(function(){
			$("#main_slider>li:eq(2)").fadeOut(2000,function(){ //맨 위의 그림을 페이드 아웃시켜 안보이게 만든다.
				$("#main_slider>li:eq(2)").insertBefore("#main_slider>li:eq(0)"); //페이드아웃된 맨 위쪽의 이미지를 맨 아래쪽으로 이동시킨다. 그럼 방금 페이드 아웃된 이미지 아래는 다시 인덱스번호 2번이 되고, 맨 아래쪽에 있던 이미지는 인덱스 번호 1번이 되고, 방금 전에 맨 아래로 이동된 이미지는 인덱스 번호 0번이 된다.
				$("#main_slider>li:eq(0)").fadeIn(); // 방금 전에 맨 아래로 이동된 이미지를 다시 보이게 한다.
			}); 
		},4000);
	
	/*페이저 클릭 추가
				$(".icon li:eq(0)").click(function(){
					$('.slider_child2').fadeOut();
					$('.slider_child2').insertBefore("main_slider>li:eq(0)");
					$('.slider_child1').fadeOut();
					$('.slider_child1').insertBefore("main_slider>li:eq(0)");
					$(".icon img").attr("src","img/ico_slider.png");
					$("img",this).attr("src","img/ico_slider_on.png");
					$('.slider_child3').fadeIn();
				}); 
				$(".icon li:eq(1)").click(function(){
					$('.slider_child3').fadeOut();
					$('.slider_child3').insertBefore("main_slider>li:eq(0)");
					$('.slider_child1').fadeOut();
					$('.slider_child1').insertBefore("main_slider>li:eq(0)");
					$(".icon img").attr("src","img/ico_slider.png");
					$("img",this).attr("src","img/ico_slider_on.png");
					$('.slider_child2').fadeIn();
				}); 
				$(".icon li:eq(2)").click(function(){
					$('.slider_child3').fadeOut();
					$('.slider_child3').insertBefore("main_slider>li:eq(0)");
					$('.slider_child2').fadeOut();
					$('.slider_child2').insertBefore("main_slider>li:eq(0)");
					$(".icon img").attr("src","img/ico_slider.png");
					$("img",this).attr("src","img/ico_slider_on.png");
					$('.slider_child1').fadeIn();
				}); 
	});	 */
	
/* MD추천 slider 이미지 전환 */
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
	
/* 팔찌 레이어드 slider 이미지 전환 */
	$(function(){
		$(".jewelry_bangle>div").each(function(index){ 
			$(this).css("left",index*476); // 그림들 옆으로 나열하기
		});
		$(".jewelry_bangle>div").eq(5).css("left","-2380px");  // 맨 마지막 이미지를 맨 앞으로 이동
	
		function aa(){
			$(".jewelry_bangle>div").each(function(){ 
				var left=parseInt($(this).css("left")); //자신의 left값 얻어오기
				var movePos=left-476;  // 현재위치에서 -960의 위치구하기
				$(this).animate({left:movePos},1000, function(){ //-960된 위치로 1초간 이동하기
					//이동한 후의 left값 구하기.
					var left=parseInt($(this).css("left")); // 이동 후 그림의 왼쪽 좌표값 구하기
					if(left<=-476){
						$(this).css("left",1904);
					}
				});							
			});
		}
	
		var bb;
		function startAa() {
			bb = setInterval(aa,2000);
		}
		
		function stopAa() {
			clearInterval(bb);
		}
		
		$("#jewelry_layering_2").hover(
			function(){stopAa();},
			function(){startAa();}
		);
		
		startAa();
	});
	
	

});//$(function(){ 끝