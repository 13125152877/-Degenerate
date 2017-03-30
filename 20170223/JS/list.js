
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


// $.ajax({
//     url: "http://datainfo.duapp.com/shopdata/getGoods.php",
//     dataType: "jsonp",
//     data: {goodsID:GetQueryString("goodsID"), classID:GetQueryString("classID")},
//     success: function(data) {
//         var $colth=$("#colth");
//         if (data) {
//             console.log(data);
//             $.each(data,function (i) {
//                 var $lis=$("<li><div class='wer'>" +
//                     "<img src='"+data[i].goodsListImg+"'/>" +
//                     "<span><p>"+data[i].goodsName+"</p><div class='goodsdetail'>" +
//                     "<div class='goodsdetail-left'><strong>"+'￥'+data[i].price+"</strong>" +
//                     "<em>"+data[i].discount+'折'+"</em></div> " +
//                     "<div class='goodsdetail-right'><button class='iconfont'>&#xe624;</button></div>" +
//                     "</div></span>" +
//                     "</div>" +
//                     "</li>");
//                 $colth.append($lis);
//                 $lis.click(function () {
//                     window.location.href="goods-details.html?goodsID="+encodeURI(data[i].goodsID)+"&goodsName="+encodeURI(data[i].goodsName)+"";
//                 })
//             })
//         }
//     }
// });


$.ajax({
    url: "http://datainfo.duapp.com/shopdata/getGoods.php",
    dataType: "jsonp",
    data: {goodsID:GetQueryString("goodsID"), classID:GetQueryString("classID")},
    success: function(data) {
        var $colth=$("#colth");
        if (data) {
            console.log(data);
            $.each(data,function (i) {
                var $lis=$("<li><div class='wer'>" +
                    "<img src='"+data[i].goodsListImg+"'/>" +
                    "<span><p>"+data[i].goodsName+"</p><div class='goodsdetail'>" +
                    "<div class='goodsdetail-left'><strong class='price'>"+'￥'+data[i].price+"</strong>" +
                    "<strong>"+data[i].discount+'折'+"</strong></div> " +
                    "<div class='goodsdetail-right'><em>"+"库存不足"+"</em></div>" +
                    "</div></span>" +
                    "</div>" +
                    "</li>");
                $colth.append($lis);
                $lis.click(function () {
                    window.location.href="goods-details.html?goodsID="+encodeURI(data[i].goodsID)+"&goodsName="+encodeURI(data[i].goodsName)+"";
                })
            })
        }
    }
});