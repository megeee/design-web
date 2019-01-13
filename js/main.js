;(function($){

    new Swiper ('.swiper-container', {
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
            dynamicBullets: true,
            dynamicMainBullets: 2
        }
    })    

    $(window).bind('scroll',function(){
        var scrollTop = parseInt($(window).scrollTop());
        //改变头部
        scrollTop >= 80 ? 
        $(".nav-wrap,.banner").addClass('active') : $(".nav-wrap,.banner").removeClass('active');
    })

    //导航
    $(".nav a").on("click", function(){
        var router =  $(this).attr("data-router"),
            targer = $("." + router).offset().top;
        $("html,body").animate({
            scrollTop: targer + "px"
        }, 500);
    })

})(jQuery)