$(document).ready(function() {
  
  $('.carousel__inner').slick({
    dots: false,
    infinite: true,
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></img></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          dots: true,
          dotsClass: "dots-castom"
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
          dotsClass: "dots-castom"
        }
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          dots: true,
          dotsClass: "dots-castom"
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          dots: true,
          dotsClass: "dots-castom"
        }
      }
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  };
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // Modal

  $('[data-modal=consultation]').on('click', function() {
     $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
     $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  
  $('.button_mini').each(function(i) {
      $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
      })
  });

  function valideForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },       
        phone: {
          required: true
        },            
        email: {
          required: true,
          email:true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите своё имя",
          minlength: jQuery.validator.format("Введите минимум {0} символа!")
        },
        phone: {
          required: "Пожалуйста, введите свой номер телефона",
        },
        email: {
          required: "Пожалуйста, введите свой email",
          email: "Ваш email должен быть формата name@domain.com"
        }
      }
    });
  };
  
  valideForms('#consultation-form'),
  valideForms('#consultation form'),
  valideForms('#order form'),

  $('input[name=phone]').mask("+38 (999) 999-99-99");
});