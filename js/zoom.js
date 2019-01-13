;(function($){



    function Zoom(){

        this.images = [];
        this.zoomWrap = $(".zoom");
        this.imgWrap = $(".zoom-show-wrap > img");
        this.imagesDirect = "./images/case/";
        this.direct = "";
        this.now = 1;
        this.onload()

    }

    Zoom.prototype.onload = function(){

        var _this = this;

        //添加事件
        $("#zoom > ul > li").click(function(){
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

        $(".zoom-prev").click(function(){
            if(_this.now > 0){
                var index = _this.now--;
                _this.changeImg(_this.direct, index)
            }
        })

        $(".zoom-next").click(function(){
            console.log(_this.now++)
            if(_this.now < _this.images.length){
                var index = _this.now++
                _this.changeImg(_this.direct, index)
            }
        })
    }

    Zoom.prototype.changeImg = function(direct, index){

        console.log(index)

        if(direct){
            var imgUrl = this.imagesDirect + direct + "/" + this.images[index]-1;
            console.log(imgUrl)
            this.imgWrap.attr('src', imgUrl); 
        }
    }

    new Zoom();
    

})(jQuery)