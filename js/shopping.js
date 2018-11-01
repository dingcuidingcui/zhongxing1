window.onload = function () {


    //var goodCookie = JSON.parse(readCookie('goods'));
    var goodCookie = readCookie('goods');
    console.log(goodCookie);
    var imgss = document.querySelector("#shopping .xinxi img");
    var oSpans = document.querySelector("#shopping .xinxi span");
    var oP = document.querySelector("#shopping .xinxi p");
    //console.log(oSpans);
    var op = document.querySelector("#shopping .money p");
    //console.log(op);
    var oSpanss =document.querySelector("#shopping .money span");

    //修改
    if(goodCookie == undefined){
         oSpanss.innerHTML = "购物车空空如也~~~";

    }else{
        var goodCookie = convertStrToObj(readCookie('goods'));
        imgss.src = goodCookie.img;
        oSpans.innerHTML = goodCookie.version;
        oP.innerHTML +="￥" +goodCookie.price +"  x" +goodCookie.count;
        op.innerHTML ="当前购物车共"+goodCookie.count+"件，金额总计：" +"<span>￥"+parseFloat(goodCookie.price*goodCookie.count)+"</span>"
    }


     //原始
     /*imgss.src = goodCookie.img;
     oSpans.innerHTML = goodCookie.version;
     oP.innerHTML +="￥" +goodCookie.price +"  x" +goodCookie.count;
     op.innerHTML ="当前购物车共"+goodCookie.count+"件，金额总计：" +"<span>￥"+parseFloat(goodCookie.price*goodCookie.count)+"</span>"*/







    function readCookie(cName) {
        var allCookie=document.cookie;
        //获取所有的cookie值
        var arrCookie=allCookie.split("; ");
        //将cookie值放进分割成数组
        //console.log(arrCookie);
        for(var i=0;i<arrCookie.length;i++){
            var item=arrCookie[i].split("=");
            // console.log(item);
            if(cName==item[0]){
                return item[1];
            }
        }
    }



    function convertStrToObj(str){
        if(!str){
            return {};
        }
        return JSON.parse(str);
    }

}
