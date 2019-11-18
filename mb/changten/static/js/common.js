$(function(){
	$(".float .a01").hover(function(){
		$(this).children("img").fadeIn(500);
	},function(){
		$(this).children("img").hide();
	})
	$(".float .a03").hover(function(){
		$(this).children("span").fadeIn(500);
	},function(){
		$(this).children("span").hide();
	})

})
