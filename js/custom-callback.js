$(document).ready(function(){
	var i=0;
	var aa;
	$(window).on("load", function(){// 처음 실행되어서 무조건 첫 번째 페이지의 p와 span 을 보이게 클래스 on을 적용..
	
		$("section").eq(0).addClass("on");
		$("section").eq(0).siblings().removeClass("on");  
	});
	
	
	//변수 ht에 브라우저의 높이값을 저장
	var ht = $(window).height();	
	//브라우저의 높이값을 section의 높이값으로 지정
	$("section").height(ht);
	
	//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});	
	
	
	
	//메뉴 버튼 클릭시
	$("#menu li").on("click",function(e){
		e.preventDefault();
		//각각의 li 안에는 a 요소가 들어있기 때문에 클릭시
		//링크가 동작해 페이지가 새로고침이 되면 깜빡임.
		//따라서 e.preventDefault();를 이용해 #menu li 안에 있는
		//a 요소의 디폴트 기능인 링크 기능을 막아준다.
		
		//변수 ht에 브라우저의 높이값 저장
		var ht = $(window).height();
		
		//변수 i에 현재 클릭한 li의 순서값을 저장
		i = $(this).index();
		console.log(i+"---클릭-----");
		// index() - 특정 태그가 몇번째 해당하는 요소인지 알아내는 방법. 0번부터 시작
		
		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
		var nowTop = i*ht;			
	
		//해당 스크롤 위치값으로 문서를 이동
		$("html,body").stop().animate({"scrollTop":nowTop},500, function(){
			$("section").eq(i).addClass("on");
		$("section").eq(i).siblings().removeClass("on");  
			
		});//1.2초
		       
	});
	moving=false;
	/* 화면이 스크롤될 때마다 현재 영역에 해당하는 메뉴 활성화하기- .on클래스 추가 */
	$(window).on("scroll",function(){	
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
		//scrollTop() - 현재 스크롤된 거리 값
		
				
		for(var i=0; i<5;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$("#menu li").removeClass();
				$("#menu li").eq(i).addClass("on");
			};
		}
		
		
		//section위에서 마우스 휠을 움직이면
		$("section").on("mousewheel",function(event,delta){    
			i = $(this).index();
			console.log(i+"---휠-----");
			//마우스 휠을 올렸을때	
			if (delta > 0) {  
				//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
			   var prev = $(this).prev().offset().top;
				 //문서 전체를 prev에 저장된 위치로 이동
				 $("html,body").stop().animate({"scrollTop":prev},500, function(){
					$("section").eq(i-1).addClass("on");
					$("section").eq(i-1).siblings().removeClass("on");  
				 });
				 
			//마우스 휠을 내렸을때	 
			}else if (delta < 0) {  
				//변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
				 var next = $(this).next().offset().top;
				 //문서 전체를 next에 저장된 위치로 이동
				$("html,body").stop().animate({"scrollTop":next},500, function(){
					 $("section").eq(i+1).addClass("on");
					$("section").eq(i+1).siblings().removeClass("on");    
				});  
			}
		});	
	});
	
	// 2) keyboard event
	$(this).keydown(function(e){
		if(!moving){
			moving=true;
			var t=$("section").offset().top;  //section 클래스의 상단 좌표를 t 변수에 대입합니다.
			var h=window.innerHeight;   //윈도우의 높이 정보를 h 변수에 대입합니다.

			if(e.keyCode == 40){  // 아래방향 키보드를 눌렀을 경우입니다.
				if(num < 4){
					num+=1;
					t-=h;
				}
			}else if(e.keyCode == 38){   // 위쪽방향 키보드를 눌렀을 경우입니다.
				if(num > 0){
					num-=1;
					t+=h;
				}
			}
			
			$("section").animate({top:t+"px"}, 500, function(){
				moving=false;
				$("section").removeClass("on");
				$("section").eq(num).addClass("on");
			});
		}
	});
	
	
	$("section").on("keydown",function(e){// 실행도중 새로고침(F5)를 눌렀을때 116-F5
		if(e.keyCode==116){
			aa = i;
		}
		console.log(aa + "/"+e.keyCode);
		$("section").eq(aa).addClass("on");
		$("section").eq(aa).siblings().removeClass("on");  
	});
	
	
});

$(document).ready(function(){  		

	$(".pp").on("mouseenter", function(){
		//콜백함수 이용
		$(this).stop().animate({"width":"35%"},1000,function(){
			$(this).find("h3").stop().animate({"right":"10px"},400);
			$(this).find("p").stop().animate({"right":"10px"},800);
			$(this).find(".btn_web").stop().animate({"right":"120px"},1000);
			$(this).find(".btn_sub").stop().animate({"right":"10px"},1200);
		});
	$(this).find("img").stop().animate({"opacity":"0.9"},1200);
	var vid = $(this).find("img").get(0);
	
	});

	$(".pp").on("mouseleave", function(){
		var vid = $(this).find("img").get(0);
		
		$(this).stop().animate({"width":"14%"},500);
		$(this).find("img").stop().animate({"opacity":"0"},1000);
		$(this).find("h3").stop().animate({"right":"-310px"},200);
		$(this).find("p").stop().animate({"right":"-310px"},500);
		$(this).find(".btn_web").stop().animate({"right":"-310px"},200);
		$(this).find(".btn_sub").stop().animate({"right":"-310px"},500);
	});

	
});





