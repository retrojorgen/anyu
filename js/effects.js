var scrollController = function(event) {
  $('.intro').css({
    'background-position': '0 ' + (window.scrollY*-1)/3 + 'px'
  });
}

$(document).on('scroll', scrollController);