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
//搜索框
window.onload=function () {
    $.get("http://datainfo.duapp.com/shopdata/getclass.php",function (data) {
        var $shows=$("#shows");
        if(data){
            var  data=JSON.parse(data);
             //console.log(data);
            $.each(data,function (i) {
                var $lis=$('<li><a href="list.html?classID='
                    +encodeURI(data[i].classID)+'&className='+encodeURI(data[i].className)+'">'
                    +data[i].className+'</a></li>')
                $shows.append($lis);

            })
        }
    })
};



