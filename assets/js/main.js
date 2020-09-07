
//owlcarousel
$(".welcome-area").owlCarousel({
    items: 1,
    autoplay:false,
    loop: true,
    nav: true,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
  });

  $(".brand").owlCarousel({
    items: 4,
    autoplay:true,
    loop: true,
    nav: false,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
  });


// counter up
$('.counter').counterUp({
  delay: 10,
  time: 5000
});

// vedio popup

$(document).ready(function() {
	$('.image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});
});