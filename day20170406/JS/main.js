/**
 * Created by Administrator on 2017/4/6.
 */
(function () {
    var dbManager = new DBManager("hello", 5);
    var userInfo={
        name:"李易峰",
        phone:"6834269748",
        age:20
    };
    document.querySelector("#add-button").onclick=function () {
        dbManager.addData("user",userInfo);

        document.querySelector("#search-button").onclick=function () {
            dbManager.searchData("user",userInfo.name,function (result) {
                console.log("搜索到的结果",result)
            });

        }
    }
})();