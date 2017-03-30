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
    $("#register").on("click",function() {
        var user=getUser();
        var p=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
        if((!user.userID)&&(user.userID=="")){
            alert("请输入用户名");
            return;
        }else if(!user.password || !(p.exec(user.password))){
            alert("请输入合格的密码");
            return;
        }else if(!user.passwordnext || user.password!=user.passwordnext){
            alert("两次输入的密码不一致");
            return;
        }

        $.post("http://datainfo.duapp.com/shopdata/userinfo.php",{
            status:"register",
            userID:user.userID,
            password:user.password
        },function(data){
            //console.log(data);
            if(data==0){
                alert("注册失败");
            }else {
                alert("恭喜你，注册成功！");
                //注册成功跳转至首页
                window.location.href="main.html";
            }
            window.localStorage.setItem("userNaame",user.userID);
            window.localStorage.setItem("password",user.password);
        });
    });
    function getUser() {
        var userd ={
            userID:$("#userId").val(),
            password:$("#password").val(),
            passwordnext:$("#password-next").val()
        };
        return userd;
    }
};

$("#btn").click(function () {
    window.location.href="../index.html";
})






