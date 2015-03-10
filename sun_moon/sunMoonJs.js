$(document).ready(function(){
	
	$("#sun").click(function(){
		$("#sun").hide();	
	});

	$("#moon").click(function(){
		$("#sun").show();
	});
//The above code (1st)section is to toggle the sun and moon

	$("#sun").click(function(){
		$(".day").hide();
	});

	$("#moon").click(function(){
		$(".day").show();
	});

//Above code (2nd part) above is the section to toggle the background

	$("#sun").mouseenter(function(){
		$(".cloudContainer").animate({left: '750px'}, 3500);
	});

	$("#sun").mouseleave(function(){
		$(".cloudContainer").animate({left: '0px'}, 3500);
	});

//The above code (3rd) are for the animaiton of the clouds

	$("#moon").mouseenter(function(){
		$("#shootingStar").animate({opacity: 1}, 300);
		$("#shootingStar").animate({'backgroundPosition': '0px 0px', 'top': '15%', 'opacity': 0}, 500);
	});

});
