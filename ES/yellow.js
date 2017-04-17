/**
 * Created by Administrator on 2017/3/7.
 */
class Person{

}
var message="消息";
var name=`nihao`;


//promise:可通过Promise 来实现异步加载
//promise 可以替换掉 回调函数 可以实现异步加载
var promise=new Promise(function (result) {
    console.log(result);
});

/*$.ajax().then(function (result) {
    
})*/
/*
function request(url,callback) {
    var request=new XMLHttpRequest();
    request.open("get",url);
    request.onload=function () {
        callback(request.response);
    }
    request.send();
}*/
function request(url) {
    return new Promise(function (res,reject) {
        var request=new XMLHttpRequest();
        request.open("get",url);
        request.onload=function () {
           if(res){
               res(request.response);
           }else{
               //通过catch 捕获到错误信息
               reject("error");
           }
        }
        request.send();
    })
}
request("tsconfig.json").then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.log(error);
})

function HTTPManager() {
   var result;
   var request=new XMLHttpRequest();
    request.open("get",url);
    request.onload=function () {
        result=request.response;
        console.log("结果"+result);
    }
    request.send();
}
console.log(HTTPManager("tsconfig.json"));