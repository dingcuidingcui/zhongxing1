$(function () {

    var $tishi = $("#register .welcome .right .tishi");
    var $update = $("#register .welcome .right .update");
    var $code = $("#register .welcome .right .code");
    var $verity = $("#register .welcome .right .verify");
    var $immediately = $("#register .right .immediately");
    // console.log($pwd);
    $(".user").blur(function () {
     if(!(/^1[34578]\d{9}$/.test($(".user").val()))){
      $tishi.html("格式错误!")
      $tishi.css({"display":"block","color":"red"});
     }else {
         $tishi.css({"display":"none","color":"red"});
     }
    })
    //更换验证码
   $update.on({
       "click":function () {
           $code.html(random());
           $code.css("color",color());
       }
   })




    //立即注册按钮
     $immediately.on({
         "click":function () {
             var user = $("#register .welcome .right .user").val();
             var pwd = $("#register .right .pwd").val();


             if( pwd === ""  ){
                 alert("密码不能为空！");
                 return;
             } if($('.pwd').val()!= $('.pwds').val()){
                 alert("两次密码输入不匹配！");
                 return;
             }if($verity.val() === ''){
                 alert("验证码不能为空");
                 return;
             }if($verity.val() !== $code.html()){
                 alert("验证码输入不正确！");
                 return;
             }



//输入的用户名密码存入cookie
             var cookie = $.cookie("user")? $.cookie("user"):"";
             cookie = convertStrToObj(cookie);
           //  alert(cookie);

          //  console.log($cookie);
             //判断cookie里面是否有user  ,cookie[user] 代表的是值，也就是密码
              if(cookie[user] === pwd){
                 alert("该用户名已经被注册");
                 return;
             }else{
                  //相当于给对象设一个key ,key的值是pwd,存入cookie
                  cookie[user] = pwd;
                 var strs = JSON.stringify(cookie);
                 //  console.log(strs)
                 // alert(strs);
                  //cookie
                 $.cookie("user",strs,{expires:9,path:'/'});

                  alert("注册成功！");
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
