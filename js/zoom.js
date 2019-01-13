/** 
 * 图片浏览f
 * V 1.1
 * By: Jeff Guo
 */

;(function($){

    function Zoom(){

        this.images = [];
        this.zoomWrap = $(".zoom");
        this.imgWrap = $(".zoom-show-wrap > img");
        this.imagesDirect = "./images/case/";
        this.direct = "";
        this.now = 0;
        this.onload()

    }

    Zoom.prototype.onload = function(){

        var _this = this;

        //添加事件
        $("#zoom > ul > li").click(function(){
            _this.now = 0;
            _this.images = $(this).attr("data-bigimages").split(",");
            _this.direct = $(this).attr("data-direct");
                // console.log(images)
            if(_this.images && _this.direct){
                _this.zoomWrap.show();
                _this.changeImg(_this.direct, _this.now)
            }
        })

        //关闭
        $(".zoom-close").click(function(){
            _this.zoomWrap.hide();
            _this.imgWrap.attr('src', ""); 
        })

        //上一张
        $(".zoom-prev").click(function(){
            if(_this.now > 0){
                _this.now--;
                _this.changeImg(_this.direct)
            }
        })

        //下一张
        $(".zoom-next").click(function(){
            if(_this.now < _this.images.length-1) {
                _this.now++
                _this.changeImg(_this.direct);
            }
        })
    }

    /**
     * 切换图片
     */
    Zoom.prototype.changeImg = function(direct){
        if(direct){
            var imgUrl = this.imagesDirect + direct + "/" + this.images[this.now];
            this.imgWrap.attr('src', imgUrl); 
        }
    }

    new Zoom();
    

})(jQuery)