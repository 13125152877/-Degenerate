/**
 * Created by Administrator on 2017/3/9.
 */
(function () {
    //promise:类似于等待执行
    //resolve(参数):--> function -->什么时候加载完成 可以去调用他
    //reject(参数):function--> 被拒绝失败的时候调用
    //catch:--> 调用完reject 会执行catch的回调函数
    //then: --> 当调用完resolve 之后then 里面的回调函数 会立刻执行


    function request(url) {
        var promise=new Promise(function (resolve,reject) {
            var req=new XMLHttpRequest();
            req.open("GET",url);
            req.onload=function () {
                req.respone?resolve(JSON.parse(req.response)):reject({error:"没有数据"});
            };
            req.send();
        });
        return promise;
    }
    var pro=request("package.json");
    pro.then(function (data) {
        console.log(data);
    });
    pro.catch(function (error) {
        console.log(error);
    });
})();