var elementsArray = [],
    currentSection = '',
    scrollToArea = function(href) {
        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, 500);
    },

    scrollController = function(event) {
        event.preventDefault();
        event.stopPropagation();
        var target = $(event.target);
        scrollToArea(target.attr('href'));
    },

    linkScrollControll = function(event) {
        event.preventDefault();
        event.stopPropagation();
        var target = $(event.target).closest('.content-box.blue');
        scrollToArea(target.attr('href'));
    }

    menuHighlight = function(target) {
          $('.navigation-item').removeClass('selected');
          target.addClass('selected');
    },

    registerElements = function() {
        $('.body-wrapper').children().each(function(index) {
            var fromTop = $(this).offset().top,
                height = $(this).height(),
                id = $(this).attr('id');
                elementsArray.push({
                    top: fromTop,
                    height: height,
                    id: id
                });
        });
    },

    scrollEvent = function(event) {
        elementsArray.forEach(function(element) {
            var pageOffset = window.pageYOffset;
            if(pageOffset >= (element.top-20) && pageOffset <= (element.top+element.height)) {
                if(element.id != currentSection) {
                    menuHighlight($('.navigation-item.' + element.id));
                    currentSection = element.id;
                }
            }
        });
    };

window.addEventListener('scroll', scrollEvent);
$('.menu-link').on('click', scrollController);
$('.content-box.blue').on('click', linkScrollControll);
$('.navigation-item.home').addClass('selected');
registerElements();