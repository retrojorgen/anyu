var scrollController = function(event) {
  $('.intro').css({
    'background-position': '0 ' + (window.scrollY*-1)/3 + 'px'
  });
}

$(document).on('scroll', scrollController);

$('#contact-form').on('submit', function(event) {
	event.preventDefault();
	console.log($(this).serialize());
	$.post( 'mailto.php', $(this).serialize(), function(data) {
		console.log(data);
	});
});