window.onload = function () {
    var oSmallImg=document.querySelector("#goodss .smallImg");
    var oImgs=document.querySelectorAll("#goodss .smallImg img");
    var oSpan=document.querySelectorAll("#goodss .smallBox span");
    var oBigImg=document.querySelector("#goodss .bigImg img");
    var middleImg=document.querySelector("#goodss section .middleImg")
    var oShow=document.querySelector("#goodss .show");
    var oFilter=document.querySelector("#goodss .filter");
    var count=0;
//设置存放小图的盒子的宽度 ：小图的个数*（小图的宽度+margin）
    oSmallImg.style.width=(oImgs[0].offsetWidth+20)*oImgs.length+'px';

    oSpan[0].onclick=function (){
        pre();
    }
    oSpan[1].onclick=function () {
        next();
    }

    function pre() {
        if(count==0){
            //如果count=0,则就设置count=0,保证按前面的按钮，还是第一张
            count=0;
        }else {
            count--;
        }
        //为什么加20，因为offsetWidth不包括margin值
        move(oSmallImg,{left:-count*(oImgs[0].offsetWidth+20)});
    }

    function next() {
        if(count>=oImgs.length-4){
            //为什么减4，因为一共就六张图，四张是显示的，count最多为2
            count=oImgs.length-4;
        }else {
            count++;
        }

        move(oSmallImg,{left:-count*(oImgs[0].offsetWidth+20)});
    }


//鼠标滑过小图，大图改变路径
    for(var i=0;i<oImgs.length;i++){
        oImgs[i].onmouseenter=function () {
            this.style.border = "1px solid red";
            oBigImg.src=this.src;
            middleImg.src=this.src;
            oBigImg.style.display="none";
        }
        oImgs[i].onmouseleave = function () {
            this.style.border = "1px solid #999999";
        }
    }


    oShow.onmouseleave=function () {
        oFilter.style.display="none";
        oBigImg.style.display="none";
    }
//用onmousemove才不会卡顿
    oShow.onmousemove=function (e) {
        oFilter.style.display="block";
        oBigImg.style.display="block";
        oBigImg.style.width = 800 +"px";
        oBigImg.style.height = 800 +'px';

        var e=e||window.event;
        var l=e.clientX-oShow.offsetLeft-oFilter.offsetWidth / 2;
        var t=e.clientY-oShow.offsetTop-oFilter.offsetHeight / 2;
        //控制滤镜的位置，保证不出去，用三目运算
        l= l<0 ? 0:(l>200 ? 200: l );
        t= t<0 ? 0:(t>200 ? 200: t );
        oFilter.style.left=l+'px';
        oFilter.style.top=t+'px';
        //遮罩 / 右侧的框 == 小图  / 大图大小
        //为什么是负值，因为滤镜的位置左移，则看的是大图的右边
        oBigImg.style.left=-2 * l+'px';
        oBigImg.style.top=- 2 * t+'px';


    }



    var oShopping = document.querySelector("#goodss .shop #add a");
    console.log(oShopping);
    var oImg = document.querySelector("#goodss .info1 img").src;
    console.log(oImg);
    var price = document.querySelector("#goodss .infos h3").innerHTML.split("￥")[1];
    console.log(price);
    var version = document.querySelector("#goodss .infos h4").innerHTML;
   // console.log(version);

    var count = 0;
    oShopping.onclick = function (){
        var cookie =readCookie('goods');
       // console.log(cookie);
        if(cookie){

            var arr = JSON.parse(cookie);
            arr.count++;
            var str1 = JSON.stringify(arr);
            setCookie("goods",str1,10);
        }else{
            count++;
            var obj = {
                "version": version,
                "price"  : price,
                "img" : oImg,
                "count":count
            }

            var str =JSON.stringify(obj);

            setCookie("goods",str,10);

        }
        }

  //  console.log(document.cookie)

    function setCookie(cName,cValue,expires){
        var d = new Date();
        d.setDate(d.getDate() + Number(expires));
        document.cookie=cName+'='+cValue+';path=/;expires='+d.toGMTString();
    }

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






}