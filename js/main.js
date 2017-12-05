

$(document).ready(function(){

	$(function(){
		$("#main-nav li").hover(
		function(){
			$(">.sub-nav",this).slideDown(300);
		},
		function(){
			$(">.sub-nav",this).slideUp(300);
		});
	});


	$('div.p-nav').hover(
		function(){
			var thisItem = $(this).find('img')[0];
			$(thisItem).attr("src", "images/p-nav-on.svg");
		}, function(){
			var thisItem = $(this).find('img')[0];
			$(thisItem).attr("src", "images/p-nav-off.svg");
		}
	);


	$(".hamburger").click(toggleMenu);

	function toggleMenu(){
		$(".nav-float").toggleClass('show');

	}

	$("#main-nav .nav-float ul > li").click(function(){
        toggleMenu();
    });

	
});

