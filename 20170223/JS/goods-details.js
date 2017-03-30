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
//商品详情
$.ajax({
    url: "http://datainfo.duapp.com/shopdata/getGoods.php",
    dataType: "jsonp",
    data: {classID:GetQueryString("classID"),goodsID:GetQueryString("goodsID")},
    success: function(data) {
        var $goods=$("#goods-details");
        if (data) {
            $.each(data,function (i) {
                var $lis=$("<li>" +
                    "<img src='"+data[i].goodsListImg+"'/><h2>"+data[i].goodsName+"</h2>" +
                    "<div class='goodsdetail'><div class='goodsdetail-left'> <em>"+"￥"+data[i].price+"</em>" +
                    "<em class='price-discount'>"+data[i].discount+"折"+"</em><strong>"+"月销量"+data[i].buynumber+"</strong></div>" +
                    "<div class='goodsdetail-right'><button class='iconfont' id='button-car'>&#xe624;</button></div></div>" +
                    "<p>"+data[i].detail+"</p></li>");
                $("#button-car").click(function () {
                    window.location.href="shopping-car.html";
                })
                $goods.append($lis);


            })
        }
    }
});