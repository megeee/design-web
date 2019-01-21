;(function($){

    new Swiper ('.banner-show', {
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
            dynamicBullets: true,
            dynamicMainBullets: 2
        }
    }) 
    new Swiper ('.case', {

    }) 

    new Swiper ('.banner', {
        grabCursor: true,
        autoplay: true,
        loop : true,
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
            dynamicBullets: true,
            dynamicMainBullets: 2
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    })

    $(window).bind('scroll',function(){
        var scrollTop = parseInt($(window).scrollTop());
        //改变头部
        scrollTop >= 80 ? 
        $(".nav-wrap").addClass('active') : $(".nav-wrap").removeClass('active');
    })

    //导航
    $(".nav a").on("click", function(){
        var router =  $(this).attr("data-router"),
            targer = $("." + router).offset().top;
        $("html,body").animate({
            scrollTop: targer - 60 + "px"
        }, 500);
    })

})(jQuery)