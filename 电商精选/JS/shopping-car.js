/**
 * Created by Administrator on 2017/1/13.
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
var oc=document.getElementById("tigt");
oc.onmouseover=function () {
    oc.style.borderBottom="1px solid red";
}
oc.onmouseout=function () {
    oc.style.borderBottom="none";
}
var goods=document.getElementById("store-goods");
var smilar=document.getElementById("similar");
goods.onmouseover=function () {
    smilar.style.display="block";
}
goods.onmouseout=function () {
    smilar.style.display="none";
}


//点击左边按钮数字减1 点击右边按钮数字加1
var reduce=document.getElementById("reduce");
var jia=document.getElementById("jia");
var numeral = document.getElementById("numeral");
var total=document.getElementById("total");
var dprice=document.getElementById("dprice");




reduce.onmouseover=function () {
    reduce.style.border="1px solid red"
}
reduce.onmouseout=function () {
    reduce.style.border="1px solid grey"
}
jia.onmouseover=function () {
    jia.style.border="1px solid red"
}
jia.onmouseout=function () {
    jia.style.border="1px solid grey"
}

//复选框
var ch=document.getElementsByName("allcheck");
ch.onclick = function DoCheck() {
    if(ch[0].checked != true) {
        for(var i = 0; i < ch.length; i++) {
            ch[i].checked = false;
        }
    } else {
        for(var i = 0; i < ch.length; i++) {
            ch[i].checked = true;
        }
    }
};




var index=dprice.innerHTML;
//alert(index);
reduce.onclick=function () {
    numeral.value--;
    if(numeral.value < 1){
        numeral.value = 1;
    }
    total.innerHTML=parseFloat(index*(numeral.value)).toFixed(2);
};
jia.onclick=function () {
    numeral.value++;
    total.innerHTML=parseFloat(index*(numeral.value)).toFixed(2);
};




