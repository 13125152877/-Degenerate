/**
 * Created by Administrator on 2017/1/10.
 */
//顶部吸顶效果
(function () {
    $(window).scroll(function () {
        var tops=$(document).scrollTop();
        if(tops>150){
            $(".top").addClass("ceiling");
        }else {
            $(".top").removeClass("ceiling")
        }
    })
})();

//左边二级菜单效果
(function () {
    $(".goods").mouseenter(function () {
        $(".menu h2").eq($(this).index()).css({
            "background":"url(../images/you02.gif) no-repeat",
            "background-size":"13px 21px",
            "background-position":"right"

        });

        $(".menu h2 .change").eq($(this).index()).css("color","red");
        $(".menu").css("border-right","none")
        $(".goods").eq($(this).index()).css({
            "border-top":"1px solid #f1f1f1",
            "border-bottom":"1px solid #f1f1f1",
        }).siblings().css("border-right","1px solid #f1f1f1")
        $(".menu div").eq($(this).index()).show();
        $(".menu div").eq($(this).index()).css(
            "border-left","none"
        );
    });

    $(".goods").mouseleave(function () {
        $(".menu h2").eq($(this).index()).css({
            "background":"url(../images/you.gif) no-repeat",
            "background-size":"13px 21px",
            "background-position":"right",
        });
        $(".menu h2 .change").eq($(this).index()).css("color","#000000");
        $(".menu").css("border-right","1px solid #f1f1f1")
        $(".goods").eq($(this).index()).css({
            "border-top":"none",
            "border-bottom":"none",
        }).siblings().css("border-right","none")
        $(".menu div").eq($(this).index()).hide();
        $(".menu div").eq($(this).index()).css(
            "border-left","1px solid  #f1f1f1"
        );
    })
})();
//轮播图效果
(function () {
    var index=0;
    //右边按钮
    $(".rightBtn").click(rHandle);
    function rHandle() {
        if($(".muit").is(":animated"))return;
        index++;
        $(".muit").animate({"left":-1200*index},300,function () {
            if(index>=$(".muit").children("li").length-1){
                index=0;
                $(".muit").css({"left":0});
            }
        })
        changecirle()
    }
    //左边按钮
    $(".leftBtn").click(function () {
        if($(".muit").is(":animated"))return;
        index--;
            if(index<0){
                index=$(".muit").children("li").length-2;
                $(".muit").css({"left":-1200*(index+1)});
            }
            $(".muit").animate({"left":-1200*index},300)
        changecirle()
         })

        //自动播放
        var timer=setInterval(rHandle,1000);
        $(".carousel").mouseenter(function () {
            clearInterval(timer);
        })
        $(".carousel").mouseleave(function () {
            timer=setInterval(rHandle,1000);
            changecirle()
        })
        //点击小圆点
        $(".cirle span").click(function () {
            index=$(this).index();
            $(".muit").animate({"left":-1200*index},300);
         })
        // 小圆点随着图片变化
        function changecirle() {
            //console.log(index);
            var n = index <= $(".muit").children("li").length-2 ? index : 0;
            $(".cirle span").eq(n).addClass("cur").siblings().removeClass("cur");
        }

})();
//图片放大效果
for(var w=1;w<6;w++){
    var abcd=document.getElementsByClassName("a")[w-1];
    abcd.style.background="url(../images/0"+w+".jpg)"
}
$(".a").mouseenter(function(){
    $(this).css({
        "background-position":"center",
        "background-size": "260px 200px"
    })
})
$(".a").mouseleave(function(){
    $(this).css({"background-position":"center",
        "background-size": "228px 180px"})
})

//广告部分
for(var i=1;i<5;i++){
    var fur=document.getElementsByClassName("fur")[i-1];
    fur.src="../images/a0"+i+".jpg";
    fur.style.width="450px"
}
// <!--固定在右边的 返回顶部-->
(function(){
    var $Rtop = $('#Rtop p');
    var index = 1 ;
    //鼠标移入和移出的改变颜色和背景图片的 事件
    $Rtop.mouseover(function(){
        index = $(this).index();
        index ++ ;
        $(this).css('background','#F10554');
        $(this).children('a').css('background','url(images/1a00'+(index*10+index)+'.png)no-repeat');
        $(this).children('img').css('display','block');
    });
    $Rtop.mouseout(function(){
        $(this).css('background','white');
        $(this).children('a').css('background','url(images/1a00'+index+'.png)no-repeat');
        $(this).children('img').css('display','none');
    });
    //获取向下偏移的值 从而设置返回顶部的返回按钮
    var height = 0;
    $(window).scroll(function(){
        height = $(document).scrollTop();
        if(height >= 270){
            $('#Rtop-one').css('display','block');
        }else{
            $('#Rtop-one').css('display','none');
        }
        // <!-- 吸顶效果 -->
        if(height >=140){
            $('.seek-fix').removeClass('seek-fix').addClass('seek-F');
            // $('#seek-fs').css('display','block');
            // $('#seek-fs').css('position','fixed');
        }else{
            $('.seek-F').removeClass('seek-F').addClass('seek-fix');
        }
    });
    //点击返回顶部
    $('#Rtop-one').click(function(){
        var hs = height;
        var tim = setInterval(function(){
            $(document).scrollTop(hs -= 6);
            hs <= 0 && (clearInterval(tim));
        },1);
        // $(document).animate({'left':0},1000);
    });
})();











