$(document).ready(function(){    
	$(".btn1").on("click",function(){ 
		$("section>article").removeClass("on"); 
		$(".box2").addClass("on"); 
		$(".btn2").fadeIn(); 
	}); 
	
	$(".btn2").on("click",function(){ 
		$("section>article").removeClass("on"); 
		$(".box1").addClass("on"); 
		$(".btn1").fadeIn(); 
	});  
	
}); // document end