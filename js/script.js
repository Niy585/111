$(function() {

  $('.slider-box-scrol-arc-11').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  })
});
$(function(){
	$('.menu-am').on('click', function(){
		$('.headre_nav-menu_container').toggleClass('menu-open');
	});
})
$(function(){
	$('.menu-am').on('click', function(){
		$('.menu-am').toggleClass('menu-clos');
	});
})