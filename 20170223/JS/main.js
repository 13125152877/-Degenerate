//获取手机屏幕宽高
function screen() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth /10 + 'px';//获取屏幕宽高
    var aWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var aHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var pohe = document.getElementById("pohe");
    pohe.style.width = aWidth+"px";
    pohe.style.height = aHeight+"px";
    console.log(pohe.style.width,pohe.style.height)
}
screen();

//点击搜索框跳转到搜索页面
function jump() {
    $input=$("#input");
    $input.click(function () {
        window.location.href="search.html";
    })
}
jump();

//轮播图
    $.ajax({
        url:"http://datainfo.duapp.com/shopdata/getBanner.php",
        dataType:"jsonp",
        success:function (data) {
            for (var i=0; i<data.length;i++) {
                var urls = data[i].goodsBenUrl;
                var swrapper=document.getElementById("swiper-wrapper");
                var urlsArray = JSON.parse(urls);
                var imgNode = document.createElement('img');
                imgNode.setAttribute('src', urlsArray[0]);
                var slide = document.createElement('div');
                slide.className = "swiper-slide";
                swrapper.appendChild(slide).appendChild(imgNode);
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    centeredSlides: true,
                    autoplay: 2500,
                    autoplayDisableOnInteraction: false
                })

            }
        }
    });
//主要内容里面的图片
(function() {
    $.ajax({
        url:"http://datainfo.duapp.com/shopdata/getGoods.php",
        dataType:"jsonp",
        success:function (data){
            console.log(data);
            var $detail=$("#detail");
            $.each(data,function (i) {
               var $lis=$("<li><div class='wer'>" +
                   "<img src='"+data[i].goodsListImg+"'/>" +
                   "<span><p>"+data[i].goodsName+"</p><div class='goodsdetail'>" +
                   "<div class='goodsdetail-left'><strong>"+'￥'+data[i].price+"</strong>" +
                   "<em>"+data[i].discount+'折'+"</em></div> " +
                   "<div class='goodsdetail-right'><button class='iconfont'>&#xe624;</button></div>" +
                   "</div></span>" +
                   "</div>" +
                   "</li>");
               $detail.append($lis);

            })

        }
    })
})();
