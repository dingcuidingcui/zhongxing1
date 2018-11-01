
window.onload =function () {

    var oImg = document.querySelectorAll('.imgBox img');
    // console.log(oImg[0]);
    var oImgBox = document.querySelector('.imgBox');
    var count = 0;
    var timer = null;
    var oShow = document.querySelector('.show');
//动态设置imgbox的宽
    oImgBox.style.width = oImg.length * oImg[0].offsetWidth + 'px';
    var oUl = document.querySelector(".show ul");
    for (let i = 0; i < oImg.length; i++) {
        var oLi = document.createElement("li");
        oUl.appendChild(oLi);
    }

    var allLi = document.querySelectorAll(" .show ul li");
    allLi[0].className = 'active';
    for (let i = 0; i < allLi.length; i++) {
        allLi[i].onmouseover = function () {
            clear();
            this.className = 'active';
            //将图片跟原点进行绑定  将索引值*图片的自身宽度
            move(oImgBox, {left: -i * oImg[0].offsetWidth})
        }

    }

//让imgBox  移动
    function pre() {
        if (count == 0) {
            count = oImg.length - 1;
        } else {
            count--;
        }
        allLi[count].className = "active";
        move(oImgBox, {left: -count * oImg[0].offsetWidth});

    }

    function next() {
        count++;
        if (count > oImg.length - 1) {
            count = 0;
        }
        clear();
        allLi[count].className = "active";
        move(oImgBox, {left: -count * oImg[0].offsetWidth});

    }

//自动播放
    timer = setInterval(function () {
        next()
    }, 5000)
//控制自动轮播
    oShow.onmouseenter = function () {
        clearInterval(timer);
    }
    oShow.onmouseleave = function () {
        timer = setInterval(function () {
            next()
        }, 2000)
    }

    function clear() {
        for (let k = 0; k < allLi.length; k++) {
            allLi[k].className = "";
        }
    }


//   exhibition
    var oDivs = document.querySelectorAll(".show .list>div");

    var oDiv = document.querySelector(".show .list .exhibition ");


    for (let i = 1, len = oDivs.length; i < len; i++) {
        var oDiv1 = oDiv.cloneNode(true);
        oDivs[i].appendChild(oDiv1);
        oDiv1.style.top = oDiv.style.top + (-80) * i + "px";
    }
    var oshows = document.querySelectorAll(".show .list .exhibition")
    var oImges = document.querySelectorAll(".show .list .exhibition img")

    for (var i = 0, len = oImges.length; i < len; i++) {

        oImges[i].src = "img/zhuye/lunbo/phone-" + (i + 1) + ".jpg";
    }


    /*手机专区*/


     var oImages = document.querySelectorAll("#Phones .right .top dl img");
     for(var i=0,len=oImages.length;i<len ;i++){
         oImages[i].src = "img/zhuye/phone-zhuanqu/phone-"+(i+1)+".jpg"
     }


    


}


