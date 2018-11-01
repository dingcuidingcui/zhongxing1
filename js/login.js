$(function () {


     var $code = $("#login .right .code");
    var $update = $("#login .welcome .right .update");
    var $verify = $("#login .right .verify");
    $update.on({
        "click":function () {
            $code.html(random());
            //      console.log(color());
            $code.css("color",color());
            //   console.log(  $span.css("color",color()))
        }
    })




    var immediately1 = $("#login .right .immediately1");



    immediately1.on({

        "click":function () {
            var user1 = $("#login .right .user").val();
            var pwd1 = $("#login .right .pwd").val();

            //将登录页面的输入内容存入cookie


            $.cookie("loginUser",user1,{path:"/"});

            //console.log(pwd1);
            var cookie = $.cookie("user")? $.cookie("user"):"";
            //console.log(cookie);
             cookie = convertStrToObj(cookie);
             console.log(cookie);
          //  console.log(cookie.user,cookie.pwd);
            if(cookie[user1] == pwd1) {
                alert("登陆成功！")
                location.href = "main.html";

            }else if(!cookie[user1]){
                alert("该用户还未注册，请注册");
                location.href = "register.html";
            }else{
                alert("登录失败！");
                location.href = "login.html";
            }
        }
    })








    //随机验证码
    function random() {
        var arr = [];
        for(var i=48;i<=122;i++){
            if(i<57){
                arr.push(String.fromCharCode(i))
            }else if(i>=65 && i<= 90){
                arr.push(String.fromCharCode(i))
            }else if(i>=97 && i<= 122){
                arr.push(String.fromCharCode(i))
            }
        }
        arr.sort(function () {
            return Math.random()-0.5;
        });
        arr.length = 4;
        return arr.join("");
    }


    //随机颜色
    function color() {
        var str = "rgba(";
        for(var i = 0;i<3;i++){
            str+=Math.floor(Math.random()*256)+",";
        }
        var str1 = str.slice(0,-1);
        str1 +=")";

        return str1;
    }

    function convertStrToObj(str){
        if(!str){
            return {};
        }
        return JSON.parse(str);
    }


})