/**
 * Created by Administrator on 2017/1/12.
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
//二级菜单
$(".sheet li").mouseover(function () {
    $(this).children(".sec").show()
})
$(".sheet li").mouseout(function () {
    $(this).children(".sec").hide()
})


//添加背景
$(".suopic").mouseover(function () {
    var src = $(this).children("img").attr("src");
    $(".tt>img").attr("src",src);
    $(".bigPic").css({
        "background":"url('" + src +"')",
        "background-size": "800px 800px"
    })
    $(this).css("border","1px solid red").siblings().css("border","none");
})
//放大镜
var bigPic=document.getElementById("bigPic");
var smallPic=document.getElementById("smallPic");
var zoom=document.getElementById("zoom");

smallPic.onmouseover = function() {
    zoom.style.display = 'block';
    bigPic.style.display = 'block';
    // bigPic.style.background="url('" + src +"') "
};
smallPic.onmouseout = function() {
    zoom.style.display = 'none';
    bigPic.style.display = 'none';
};
smallPic.onmousemove=function (event) {
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;

    var x=event.clientX-(getAllLeft(smallPic) - scrollLeft)-169;
    var y=event.clientY-(getAllTop(smallPic) - scrollTop)-169;



    if (x < 0) {
        x = 0;
    } else if(x > 182) {
        x = 182;
    }
    if (y<0) {
        y = 0;
    } else if (y >182) {
        y = 182;
    }
    zoom.style.left=x+"px";
    zoom.style.top=y+"px";
    var rate = 800 / 520 ;
    bigPic.style.backgroundPosition = -x * rate + "px " + -y * rate + "px";

};
function getAllLeft(obj) {
    var allLeft = obj.offsetLeft;
    //当前正在算高度的元素
    var currentObj = obj;
    while (currentObj = currentObj.offsetParent) {
        allLeft += currentObj.offsetLeft;
    }
    return allLeft;
}
function getAllTop(obj) {
    var allTop=obj.offsetTop;
    var currentObj=obj;
    while(currentObj=currentObj.offsetParent){
        allTop+=currentObj.offsetTop;
    }
    return allTop;
}




//选择尺码,选择颜色
$(".sizeof,.colorof").mouseover(function () {
    $(this).css("border","2px solid red");
})
$(".sizeof,.colorof").mouseout(function () {
    $(this).css("border","2px solid grey");
})

//点击向上箭头数字加1 点击向下箭头数字减1
var oc=document.getElementById("childer-one");
var od=document.getElementById("childer-two");
var inputof=document.getElementById("inputof");
oc.onclick=function () {
    inputof.value++;
}
od.onclick=function () {
    inputof.value--;
    if(inputof.value < 0){
        inputof.value=0;
    }
}

