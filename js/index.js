$(function(){
	
	$('header').find("button").click(function(){
	$(this).next().stop().slideToggle();
	});
    
});

