$(function(){
    $(document).ready(function(){
        $('.slider').slick({
            autoplay:'true',
            autoplaySpeed:'3000',
            prevArrow:'<i class="fas fa-arrow-circle-left slider-arrow"></i>',
            nextArrow:'<i class="fas fa-arrow-circle-right slider-arrow"></i>',
            fade: true,
            speed:2000
        });
    });

    $('#launch-count-down').countdown('2022/10/10', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<div class="count"><span>%D</span><span>Days</span></div>'
          + '<div class="count"><span>%H</span><span>Hours</span></div> '
          + '<div class="count"><span>%M</span><span>Minutes</span></div>'
          + '<div class="count"><span>%S</span><span>Sec</span></div>'
        ));
    });
    $('.gellary-filter').filterizr();

    $('.l_picture').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay:'true',
        prevArrow:'<i class="fas fa-chevron-left slider_arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right slider_arrow"></i>'
      });
    $(window).on('scroll',function() {
        if($(window).scrollTop()>400) {
            $('#backtotop').fadeIn(1000);
        }else{$('#backtotop').fadeOut(1000);}
    })
    $('#backtotop').on('click',function() {
        $('html,body').animate({
            scrollTop: 0
        },2000)
    })
})
