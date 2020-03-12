$(document).ready(function(){
	
	/* 메뉴 */
	$("#gnb li.menu").mouseenter(function(){
		$(this).find('ul.sub').stop().slideDown();
	});
	$("#gnb li.menu").mouseleave(function(){
		$(this).find('ul.sub').stop().slideUp();
	});

	/*$("#gnb li.menu1").hover(
		function(){
			// $("#gnb > li.menu1").next().stop().slideDown();
			$(this).find('.sub').stop().slideDown();
			$("#gnbBack").stop().slideDown(50);
		}, // 마우스 올렸을 때	
			
	
		function(){
			$(".menu1 .sub").next().stop().slideUp();
			$("#gnbBack").stop().slideUp(50);	
			$(this).find('.sub').hide();			
		} // 마우스 내렸을 때
	);
	*/
	
	
		$(".bg1").each(function(aa){ //each배열
			$(this).css("left",aa*1190);
		});	

		setInterval(function(){
			$(".bg").each(function(){
				var currentLeft = parseInt($(this).css("left"));
				var movePos = currentLeft-1190;
					$(this).animate({"left":movePos},500,function(){//콜백함수
						var newLeft=parseInt($(this).css("left")); //새롭게 움직인 왼쪽값을 가지고 온다.
						if(newLeft == -4760){ //새롭게 움직인 왼쪽값이 지정된 위치에 왔는지 물어본다.
							$(this).css("left",0); //지정된 위치에 왔을때 해당 이미지를 맨 뒤에 이동시킨다.
						}
				});
			});
		},3000);

		/* popUp */
	$("#gnb h1").click(function(){
		$("#popUp").show();
	});	
	$(".close").click(function(){
		$("#popUp").hide();		
	});
	
	
	/*1초마다 현재 시간값 재설정*/
	var timer = setInterval(function(){
		var now =new Date();
		var hr = now.getHours();
		var min = now.getMinutes(); 
		var sec = now.getSeconds();
		
		//시간이 한자리 숫자일때 앞에 0 붙이기
		if(hr >=10){
			hNum = hr;
		}else{
			hNum = "0"+hr;
		};
		
		//분이 한자리 숫자일때 앞에 0 붙이기
		if(min >=10){
			mNum = min;
		}else{
			mNum="0"+min;
		};
		
		//초가 한자리 숫자일때 앞에 0 붙이기
		if(sec >=10){
			sNum = sec;
		}else{
			sNum="0"+sec;
		};
		//p태그 안에 시간 출력
		$(".weather p span").eq(0).text(hNum);
		$(".weather p span").eq(1).text(mNum);
		$(".weather p span").eq(2).text(sNum);
	},1000)//1초의 시간마다 안쪽의 구문을 반복 실행
	
		
});
