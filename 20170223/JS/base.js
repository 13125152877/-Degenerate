
function GetQueryString(name) {
    //定义一个正则获取相应参数
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    //截取字符串获取匹配参数
    var r = window.location.search.substr(1).match(reg);
    //返回参数值
    if(r!=null)return  unescape(r[2]); return null;
};
//更新购物车 参数{userID goodsID number callback}
function upDataCar(opt) {
    $.get("http://datainfo.duapp.com/shopdata/updatecar.php",{
        userID:opt.userID,
        goodsID:opt.goodsID,
        number:opt.number
    },function(data) {
        var thisdata = data;
        ajax_getCar({userID:opt.userID,callback:function(data) {
            window.localStorage["car"] = JSON.stringify(data);
            opt.callback(thisdata);
        }})
    })
}
//获取购物车   参数 userID callback
function ajax_getCar(opt) {
    $.ajax({
        url:"http://datainfo.duapp.com/shopdata/getCar.php",
        data:{userID:opt.userID},
        dataType:"jsonp",
        success:function(data) {
            opt.callback(data);
        }
    });
}
//从本地获取购物车
function Storage_getCare() {
    return window.localStorage["car"]? JSON.parse(window.localStorage["car"]):0
}