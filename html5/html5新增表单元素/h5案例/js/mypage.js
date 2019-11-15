$(function () {
    // 获取屏幕的高度
    var k = $(window).height();
    //定义一个标识符，控制动画播放
    var flag = false;
    $('#fullpage').fullpage({
        navigation: true,  //是否显示导航条
        scrollingSpeed: 1200, //转换的速度
        loopBottom: true ,  //到了底部是否跳转到第一页
        //回调函数，滚动到对应页数后执行
        afterLoad: function(anchorLink, index){ //锚链接的名称 和 索引 索引从1开始
            if(index == 2 && flag == false){
                $(".search").show().animate({"right": 370},1500,function(){//执行完动画的回调
                    $(".search-words").animate({"opacity": 1}, 500, function(){
                        $(".search").hide();
                        $(".search-02-01").show().animate({"right": 250, "height": 30, "bottom": 452}, 1000,
                        function() {
                            flag = true;//当这个动画加载完，才执行沙发掉落
                        });
                        $(".goods-02").show().animate({"height": 218}, 1000, function(){
                            $(".words-02").animate({"opacity": 1});
                        });
                    })
                })
            }
        },
        //滚动前的回调函数
        onLeave: function(index, nextIndex, direction) { //离开的索引，滚动到的索引，滚动的方向：up down
            if(index == 2 && nextIndex == 3 && flag == true){
            $(".shirt-02").show().animate({"bottom":-(k - 200), "left": 260, "width": 207}, 1500, function() {
                $(".img-01-a").animate({"opacity": 1}, 500, function(){
                    $(".btn-01-a").animate({"opacity": 1}, 500);
                })
            })
            $(".cover").show();
        }
        // 当第三屏滚动时
        if(index == 3 && nextIndex == 4){
            $(".shirt-02").hide();
            $(".t1f").show();
            $(".cover").show();
        }
        }
    });
})