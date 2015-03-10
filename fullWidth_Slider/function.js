$(document).ready(function(){

	var indexPosition = 0;
	var slideImagesID = ["img#slide-one","img#slide-two","img#slide-three","img#slide-four","img#slide-five"];
	var navCarousel = ["li#nav-one", "li#nav-two", "li#nav-three", "li#nav-four", "li#nav-five"];


	function animateSwitch(){
	
		$(".carousel-nav li").css({backgroundColor: "#787979"});//Removes the background color for the bottom navi
		switch(indexPosition){// Each case is set to cycle and display an image. By setting the display to inline.
			case 0:
				$(slideImagesID[0]).fadeIn("2000");
				$(navCarousel[0]).css({backgroundColor: "#e8e8e8"});
			break;
			case 1:
				$(slideImagesID[1]).fadeIn("2000");
				$(navCarousel[1]).css({backgroundColor: "#e8e8e8"});
				break;
			case 2:
				$(slideImagesID[2]).fadeIn("2000");
				$(navCarousel[2]).css({backgroundColor: "#e8e8e8"});
				break;
			case 3:
				$(slideImagesID[3]).fadeIn("2000");
				$(navCarousel[3]).css({backgroundColor: "#e8e8e8"});
				break;
			case 4:
				$(slideImagesID[4]).fadeIn("2000");
				$(navCarousel[4]).css({backgroundColor: "#e8e8e8"});
				break;
		}	
	}

	$("#right-Arrow").click(function(){
	$("img").fadeOut("2000");// Sets any image display to NONE and fades it out
		if(indexPosition === 4){
			indexPosition = 0;//Once we reach the end of the slide images it will reset the position to zero and cycle back

			animateSwitch();
	
		} else {
			indexPosition++;
			animateSwitch();// Else it will just add one to the current position and slide right
		}

	});

	$("#left-Arrow").click(function(){
	$("img").fadeOut("2000");
		if(indexPosition === 0){
			indexPosition = 4;

			animateSwitch();

		} else {
			indexPosition--;
			animateSwitch();
		}
		
	});



});






























