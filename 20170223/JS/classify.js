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
//左边菜单栏
// window.onload=function () {
//     $.get("http://datainfo.duapp.com/shopdata/getclass.php",function (data) {
//         var $classify=$("#classify");
//         if(data){
//             var  data=JSON.parse(data);
//             // console.log(data);
//             $.each(data,function (i) {
//                 var $a=$('<a href="#">'+data[i].className+'</a>');
//                 $classify.append($a);
//
//             })
//         }
//     })
// };

//点击左边的菜单出来对应的图片
(function () {
    window.onload=function () {
        $.get("http://datainfo.duapp.com/shopdata/getclass.php",function (data) {
            var $classify=$("#classify");
            if(data){
                var  data=JSON.parse(data);
                // console.log(data);
                $.each(data,function (i) {
                    var $a=$('<a href="#">'+data[i].className+'</a>');
                    $classify.append($a);
                    //点击左边的菜单栏跟换右边图片
                    $a.click(function () {
                        console.log(1);
                        $.ajax({
                            url:"http://datainfo.duapp.com/shopdata/getGoods.php",
                            dataType:"jsonp",
                            data:{classID:GetQueryString("classID")},
                            success:function (data){
                                console.log(3);
                               console.log(data);
                                var $special=$("#species");
                                $.each(data,function (t) {
                                    var $liement=$("<li><img src='"+data[t].goodsListImg+"'/><span></span></li>");
                                    $special.append($liement);
                                })

                            }
                        })
                    });
                })
            }
        })
    };

})();
(function() {
    $.ajax({
        url:"http://datainfo.duapp.com/shopdata/getGoods.php",
        dataType:"jsonp",
        data:{classID:GetQueryString("classID")},
        success:function (data){
           console.log(data);
            var $special=$("#species");
            $.each(data,function (i) {
                var $liement=$("<li><img src='"+data[i].goodsListImg+"'/><span></span></li>");
                $special.append($liement);

            })

        }
    })
})();

