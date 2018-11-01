window.onload = function () {
    var oList = document.querySelector("#list");
    var allCookie = JSON.parse(readCookie('goods'));
  /*  var allCookie = document.cookie;*/
   console.log(allCookie);

    var goodStr = "";

    goodStr +='<tr>'+'<td><input type="checkbox" class="c1"></td>'+'<td><img src="'+allCookie.img+'" class="smallPic">'+allCookie.version+'</td>'+'<td>￥'+allCookie.price+'</td>'+'<td class="btn">'+'<button class="minus">-</button>'+'<input type="text"value="'+allCookie.count+'"  class="num c1" >'+'<button class="plus">+</button>'+'</td>'+'<td class="total">￥'+allCookie.price*allCookie.count+'</td>'+'<td class="del">删除</td>'+'</tr> ';

   // console.log(goodStr)
    oList.innerHTML+=goodStr;




     //计算商品总额
     oList.onclick=function (e) {
         var e=e||window.event;
         var target=e.srcElement||e.which;
         var goodCount=1;
         if(target.tagName=="BUTTON" && target.className=="plus"){
             target.previousElementSibling.value++;
             goodCount=target.previousElementSibling.value;
             target.parentNode.nextElementSibling.innerHTML='￥'+goodCount*target.parentNode.previousElementSibling.innerHTML.substr(1);
         }


         if(target.tagName=="BUTTON" && target.className=="minus"){
             if(target.nextElementSibling.value>1){
                 target.nextElementSibling.value--;
                 goodCount=target.nextElementSibling.value;
                 target.parentNode.nextElementSibling.innerHTML='￥'+goodCount*target.parentNode.previousElementSibling.innerHTML.substr(1);
             }

         }

         if(target.tagName=="TD" && target.className=="del"){
             target.parentNode.remove();
             deleteCookie('goods');
             window.location.href ="shopping.html";

         }



     }


    function readCookie(cName) {
        var allCookie = document.cookie;
        var arrCookie = allCookie.split("; ");
        for (var i = 0; i < arrCookie.length; i++) {
            var item = arrCookie[i].split("=");
            if (item[0] == cName) {
                return item[1];
            }
        }


    }
    function setCookie(cName,cValue,expires){
        var d = new Date();
        d.setDate(d.getDate() + Number(expires));
        document.cookie=cName+'='+cValue+';path=/;expires='+d.toGMTString();
    }

    function deleteCookie(cName){
        setCookie(cName,null,-1);
    }


    var btn = document.querySelector("#details .choose div .account");
   // console.log(btn);
    btn.onclick = function () {
        window.location.href="register.html";
    }



    

}