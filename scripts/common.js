$(document).ready(function() {
  // lazy-load
  const el = document.querySelectorAll('.lazy');
  window.observer = lozad(el);
  window.observer.observe();

  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    $('body').addClass('touch-device');
    $('.js-magik-scroll').each(function() {
      $(this).on('scroll', function() {
        const scrollTop = $(this).scrollTop();
        const scrollHeight = this.scrollHeight;
        const clientHeight = $(this).innerHeight();

        if (scrollTop + clientHeight >= scrollHeight) {
          $(this).addClass('at-end');
        } else {
          $(this).removeClass('at-end');
        }
      });
    });

  } else {
    $('.js-magik-scroll').each(function() {
      new PerfectScrollbar(this, {
        wheelSpeed: 0.5,
        wheelPropagation: true,
        minScrollbarLength: 20
      });

      $(this).on('ps-scroll-y', function() {
        const isAtEnd = this.scrollTop + this.clientHeight >= this.scrollHeight;
        if (isAtEnd) {
          $(this).addClass('at-end');
        } else {
          $(this).removeClass('at-end');
        }
      });
    });
  }

  function toggleSlick() {
    $('.js-mob-slider').each(function() {
      let sliderProd = $(this);

      if ($(window).width() <= 560) {
        if (!sliderProd.hasClass('slick-initialized')) {
          sliderProd.slick({
            infinite: false,
            fade: true,
            speed: 500,
            dots: true,
            arrows: false,
            // adaptiveHeight: true
          });

          sliderProd.closest('.js-slider-mob-parent').find('.js-slider-prev').click(function() {
            sliderProd.slick('slickPrev');
          });

          sliderProd.closest('.js-slider-mob-parent').find('.js-slider-next').click(function() {
            sliderProd.slick('slickNext');
          });
        }
      } else {
        if (sliderProd.hasClass('slick-initialized')) {
          sliderProd.slick('unslick');
        }
      }
    });
  }


  toggleSlick();

  $(window).resize(function() {
    toggleSlick();
  });

  // js-single-slider
  $('.js-single-slider').each(function() {
    let slider = $(this);

    slider.slick({
      infinite: false,
      fade: true,
      speed: 500,
      dots: true,
      arrows: false
    });

    slider.closest('.js-slider-single-parent').find('.js-slider-prev').click(function() {
      slider.slick('slickPrev');
    });

    slider.closest('.js-slider-single-parent').find('.js-slider-next').click(function() {
      slider.slick('slickNext');
    });
  });


  // js-double-slider
  $('.js-double-slider').each(function() {
    let slider = $(this);

    slider.slick({
      infinite: false,
      speed: 500,
      dots: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
          }
        }
      ]
    });

    slider.closest('.js-slider-double-parent').find('.js-slider-prev').click(function() {
      slider.slick('slickPrev');
    });

    slider.closest('.js-slider-double-parent').find('.js-slider-next').click(function() {
      slider.slick('slickNext');
    });
  });


  $(document).on('click', '.js-tabs-button', function() {
    let tabId = $(this).data('id');

    $('.js-tabs-button').removeClass('active');
    $(this).addClass('active');

    $('.js-tabs-block').removeClass('active');
    $('.js-tabs-block[data-id="' + tabId + '"]').addClass('active');
  });


});
