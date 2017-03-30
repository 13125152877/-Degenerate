
function init() {
    var audios = document.getElementById("audio");
    var music = document.getElementById("music");
    music.onclick =function() {
        if (music.className=="audiosOn") {
            this.className="audiosOff";
            audios.pause();
        } else{
            this.className="audiosOn";
            audios.play();
        }
    }
}
init();
function fly() {
    var flyfight=document.getElementById("flyfight");
    flyfight.addEventListener("animationend",function () {
        this.style.animation="pulse 3s infinite linear";
        this.style.webkitAnimation="pulse 3s infinite linear";
    })
}
fly();
function cloudy() {
    var cloudy=document.getElementById("cloudy");
    cloudy.addEventListener("animationend",function () {
        this.style.animation="pulse 3s infinite linear";
        this.style.webkitAnimation="pulse 3s infinite linear";
    })
}
cloudy();
function plant() {
    var plant=document.getElementById("plant");
    plant.addEventListener("animationend",function () {
        this.style.animation="pulse 3s infinite linear";
        this.style.webkitAnimation="pulse 3s infinite linear";
    })
}
plant();
function star() {
    var star=document.getElementById("star");
    star.addEventListener("animationend",function () {
        this.style.animation="pulse 3s infinite linear";
        this.style.webkitAnimation="pulse 3s infinite linear";
    })
}
star();
function wasStarof() {
    var wasStar=document.getElementById("wasStar");
    var myOne = document.getElementById("my-one");
    myOne.addEventListener("animationend",function () {
        wasStar.style.animation="ban 1s linear";
        wasStar.style.webkitAnimation="ban 1s linear";
        wasStar.style.animationFillMode = "forwards";//保存最后一帧的动画
    },false)
}
wasStarof();
function guide() {
    var guide=document.getElementById("guide");
    guide.addEventListener("animationend",function () {
        this.style.animation="pulse 3s infinite linear";
        this.style.webkitAnimation="pulse 3s infinite linear";
    })
}
guide();
function moveoff() {
    var endcloudy=document.getElementById("endcloudy");
    endcloudy.addEventListener("animationend",function () {
        this.style.animation="pulse 3s infinite linear";
        this.style.webkitAnimation="pulse 3s infinite linear";
    })

}
moveoff();
function flyof() {
    var endavatar=document.getElementById("endavatar");
    endavatar.addEventListener("animationend",function () {
        this.style.animation="bounce 3s infinite linear";
        this.style.webkitAnimation="bounce 3s infinite linear";
    })
}
flyof();
function fadeImg() {
    var fadeImg = document.getElementById("fadeImg");
    fadeImg.addEventListener("animationend", function () {
        this.style.animation = "fadeOut 1s linear";
        this.style.webkitAnimation = "fadeOut 1s linear";
        this.style.animationFillMode = "forwards";
    }, false)
}
fadeImg();
function inde() {
    var endcloudy=document.getElementById("endcloudy");
    endcloudy.addEventListener("animationend",function () {
        this.style.animation="pulse 3s infinite linear";
        this.style.webkitAnimation="pulse 3s infinite linear";
    })
}
inde();
function starof() {
    var introstar=document.getElementById("introstar");
    introstar.addEventListener("animationend",function () {
        // console.log(1);
        this.style.animation="flash 1s infinite linear";
        this.style.webkitAnimation="flash 1s infinite linear";
    },false)
}
starof();
function lightof() {
    var lightopen=document.getElementById("lightopen");
    var colorof = document.getElementById("colorof");
    // console.log(1);
    lightopen.onclick=function () {
        this.className="lightOn";
        colorof.style.display = "block";
        colorof.style.animation = "fadeIn 1s linear";
        colorof.style.webkitAnimation = "fadeIn 1s linear";
    }
}
lightof()

function footta() {
    var footta = document.getElementById("footta");
    var runta = document.getElementById("runta");
    var salaryta = document.getElementById("salaryta");
    footta.addEventListener("animationend", function () {
        this.style.animation = "fadeOut 1s linear";
        this.style.webkitAnimation = "fadeOut 1s linear";
        this.style.animationFillMode = "forwards";
    }, false)
    runta.addEventListener("animationend", function () {
        this.style.animation = "fadeOut 1s linear";
        this.style.webkitAnimation = "fadeOut 1s linear";
        this.style.animationFillMode = "forwards";
    }, false)
    salaryta.addEventListener("animationend", function () {
        this.style.animation = "fadeOut 1s linear";
        this.style.webkitAnimation = "fadeOut 1s linear";
        this.style.animationFillMode = "forwards";
    }, false)
}
footta();