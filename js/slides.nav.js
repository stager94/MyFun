$(document).ready(function(){
	$('nav#tab-navigation a').on('click', function() {
		var add = 0;
		var scrollAnchor = $(this).attr('data-scroll'),
				scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

		if ($(document).width() < 1600) {
			add = 40;
		}
		if ($(document).width() < 1400) {
			add = 80;
		}


		
		$('body,html').animate({
				scrollTop: scrollPoint + add
		}, 500);

		return false;
	});

	$(window).scroll(function() {
		var windscroll = $(window).scrollTop();
		// console.log(windscroll)
		if (windscroll >= 100) {
				// $('nav').addClass('fixed');
				$('section.bg-slide').each(function(i) {
					if ($(this).position().top <= windscroll+200) {
						$('nav#tab-navigation').removeClass('gray dark blue').addClass($(this).attr("data-color"));
						$('nav#tab-navigation a.active').removeClass('active');
						$('nav#tab-navigation a').eq(i).addClass('active');
					}
				});

		} else {

			// $('nav').removeClass('fixed');
			$('nav#tab-navigation a.active').removeClass('active');
			$('nav#tab-navigation a:first').addClass('active');
		}

	}).scroll();
});