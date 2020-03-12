$(function(){
	
/* gnb */
	$("#gnb").mouseenter(
		function(){
			$("#gnb ul.sub").stop().slideDown();
			$("#gnbBack").stop().slideDown();
		}); // 마우스 올렸을 때
	
	$("#gnbBack").mouseleave(function(){
			$("#gnb ul.sub").stop().slideUp();
			$("#gnbBack").stop().slideUp();			
		});// 마우스 내렸을 때
		

/*gnb 스크롤 탑 픽스*/	
	$(window).scroll(function(){
		var scrollTop02=$(document).scrollTop();
		if( scrollTop02 >= 30 ){
			$("#header").css({ "position" : "fixed" , "top" : "-30px", "z-index": "9999"});
		}else{
			$("#header").css({ "position" : "absolute","top":"0"});
		}		
	});
	
/*attraction 아이,연인,동물 선택*/		
	$("li.button_kids").click(function(){
		event.preventDefault();
		$(this).css({'border':'2px solid #ff6600' });
		$('li.button_kids a').css({'color':'#ff6600'});
		$('li.button_couple').css({'border':'2px solid #ababab'});
		$('li.button_couple a').css({'color':'#777'});
		$('li.button_animal').css({'border':'2px solid #ababab'});
		$('li.button_animal a').css({'color':'#777'});
		$("#attraction_animal").hide();
		$("#attraction_couple").hide();
		$("#attraction_kids").show();
	});
	$("li.button_couple").click(function(){
		event.preventDefault();
		$(this).css({'border':'2px solid #ff6600' });
		$('li.button_couple a').css({'color':'#ff6600'});
		$('li.button_kids').css({'border':'2px solid #ababab'});
		$('li.button_kids a').css({'color':'#777'});
		$('li.button_animal').css({'border':'2px solid #ababab'});
		$('li.button_animal a').css({'color':'#777'});
		$("#attraction_animal").hide();
		$("#attraction_kids").hide();
		$("#attraction_couple").show();
	});
	$("li.button_animal").click(function(){
		event.preventDefault();
		$(this).css({'border':'2px solid #ff6600' });
		$('li.button_animal a').css({'color':'#ff6600'});
		$('li.button_couple').css({'border':'2px solid #ababab'});
		$('li.button_couple a').css({'color':'#777'});
		$('li.button_kids').css({'border':'2px solid #ababab'});
		$('li.button_kids a').css({'color':'#777'});
		$("#attraction_kids").hide();
		$("#attraction_couple").hide();
		$("#attraction_animal").show();
	});
		

}); //$(function(){ 끝

