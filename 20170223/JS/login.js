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

window.onload=function () {
    $("#login").on("click",function() {
        var user=getUser();
        $.post("http://datainfo.duapp.com/shopdata/userinfo.php",{
            status:"login",
            userID:user.userID,
            password:user.password
        },function(data){
            var localdata=JSON.parse(data);
            console.log(localdata);
           if(data==0){
                alert("用户名不存在");
                window.location.href="HTML/register.html";

            }else if(data==2){
                alert("密码不正确！");
            }else{
                window.location.href="HTML/main.html";
            }
        });
    });
    $("#register").on("click",function () {
        window.location.href="HTML/register.html";
    });
    function getUser() {
        var userd ={
            userID:$("#userId").val(),
            password:$("#password").val(),
        };
        return userd;
    }
};











