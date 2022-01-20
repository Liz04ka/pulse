$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"> <img src="icon/chevron-left-solid.png"> </button>',
        nextArrow: '<button type="button" class="slick-next">  <img src="icon/chevron-right-solid.png"> </button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrow: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog_link').each(function(i) {
          $(this).on('click', (e) => {
                  e.preventDefault();
                  $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                  $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

              })
    })

    // открытие закрытие модальных окон

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
        
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut();
    });
    $('.price__btn').on('click', function() {
        $('.overlay, #order').fadeIn();
    });

    // ----------- алгоритм для скролла. Создаем стрелочку, которая показывается только когд апользователь пролистал 1600пк вниз ----------

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

// делает скролл наверх плавным

    $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"})
        return false;
    });
});
        


