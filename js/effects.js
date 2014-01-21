var scrollController = function(event) {
		$('.intro').css({
		'background-position': '0 ' + (window.scrollY*-1)/3 + 'px'
		});
	},
	innerScrollController = function(id) {
		console.log(document.getElementById(id), id.substring(1,id.length));
		var left = document.getElementById(id.substring(1,id.length)).style.getPropertyValue('left');
		console.log(left);
    $('.inner-content').animate({
      'margin-left': '-' + left
    }, 1000);
	}

$(document).on('scroll', scrollController);

$('#contact-form').on('submit', function(event) {
	event.preventDefault();
	$.post( 'mailto.php', $(this).serialize(), function(data) {
		console.log(data);
	});
});

$('.inner-menu a').on('click', function(event) {
	event.preventDefault();
	event.stopPropagation();
	console.log(event.target);
	innerScrollController($(event.target).attr('href'));
});

$('.inner-content').css('width', ($('.content-container').length*100) + '%');

$('.content-container').each(function(index) {
	$(this).css({
		'left': (window.innerWidth*index) + 'px',
		'width': window.innerWidth + 'px'
	});
});