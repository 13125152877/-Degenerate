/**
 * Created by Administrator on 2017/1/12.
 */
//商品分类第一部分

for(i=0;i<40;i++){
    var a=Math.floor(i/8);;
    var b=i%8;
    $(".goods-colth .colthof").eq(i).css({"background":"url(../images/b"+a+b+".jpg)"});
    $(".goods-colth .colthof").eq(i).css({"backgroundSize":"337px 337px"});
    // $(".goods-colth .colthof").eq(i).html("b"+a+b);
}


$(".fashion-colth").mouseenter(function(){
    $(this).children(".colthof").css({
        "background-position":"center",
        "background-size": "380px 380px"
    })
    $(this).children("h1").css("color","red");
});
$(".fashion-colth").mouseleave(function(){
    $(this).children(".colthof").css({
        "background-size": "337px 337px"
    })
    $(this).children("h1").css("color","black");
});

//鼠标放在导航栏上变换一组图片
$(".navbess li").mouseover(function(){

    $(this).css("color","red");
    $(this).parents(".navbess").parents(".boutique-two").siblings(".thing").children(".goods-colth").eq($(this).index()).show()
    .siblings().hide();

});
$(".navbess li").mouseout(function(){
    $(this).css("color","black");
})