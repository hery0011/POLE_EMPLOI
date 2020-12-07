$(document).ready(function(){
	$('.header-menu').click(function() {
		$('#toggle-nav').toggle(1000);
		$(this).find('i').toggleClass('fa fa-times fas fa-bars');
	})

	$('.icon-collapse-foot').click(function() {
		$(this).find('i').toggleClass('fas fa-plus fas fa-minus');

		$('.footer-list-1').slideToggle();
		$('.footer-list-2').slideToggle();
		$('.footer-list-3').slideToggle();
		$('.footer-list-4').slideToggle();
	})
})