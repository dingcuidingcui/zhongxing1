$(function () {
    var $AXON = $(".AXON ");
    var $BLADE = $(".BLADE ");
    var $menu = $(".menu");
    var $img = $(".menu img");
    var $span = $("#title .aa");
   // console.log($span);
    var cookie = $.cookie("loginUser");
    $span.html(cookie);
    $span.on({
        "click":function () {
            location.href = "pay.html";
        }
    })


    // console.log($(".AXON .menu ").get(0));
    $AXON.on({
        "mouseenter":function () {
            $(".AXON .menu").css("display","block");
        },
        "mouseleave":function () {
            $(".AXON .menu").css("display","none");
        }

    })
    var $menu1 =$menu.clone()
    $BLADE.append($menu1);
    $menu1.addClass("menu1");
    $menu1.removeClass("menu");

    var $img = $(".BLADE .menu1 img");
    $img.each(function (index,value) {
        $(value).attr("src","img/zhuye/header/phone"+(index+1)+".jpg");
    })
    $BLADE.on({
        "mouseenter":function () {
            $menu1.css("display","block");
        },
        "mouseleave":function () {
            $menu1.css("display","none");
        }

    })



    var $oA= $("#toolbar a ");

     $oA.on({
         "mouseenter":function () {
             let $span = $(this).children('span');
             let $i = $(this).children('i');
             let $img = $(this).children('img');
             $i.animate({top:0,height : 0},500,function(){
              //  $i.hide();
             })

             $span.show().animate({top : 0,height : 45},500);

             $img.show().animate({width:60,height:60,left:-70,top:-15},500);


         },

         "mouseleave":function () {
             let $i = $(this).find('i');
             let $span = $(this).find('span');
             let $img = $(this).find('img');
             $span.animate({top :45,height : 0},500,function(){
                 $span.hide();

             })
             $i.show().animate({top : 0,height : 45},500);
             $img.show().animate({ width:0,height:0,left: 0,top:60},500);

         }



     })
    /*$.each($oA,function (index,value) {
        $(value).hover(function () {
            let $span = $(this).children('span');
            let $i = $(this).children('i');
            let $img = $(this).children('img');

           // console.log($i.get(0));
            $i.animate({top:0,height : 0},500,function(){
                $i.hide();
            })

            $span.show().animate({top : 0,height : 45},500)

            $img.show().animate({width:60,height:60,left:-70,top:-15},500)


        },function () {
            let $i = $(this).find('i');
            let $span = $(this).find('span');
            let $img = $(this).find('img');
            $span.animate({top :45,height : 0},500,function(){
                $span.hide();

            })
            $i.show().animate({top : 0,height : 45},500)
            $img.show().animate({ width:0,height:0,left: 0,top:60},500)

        })
    })*/

    //回到顶部
    var $oSpan = $("#toolbar a span ");
   // console.log($oSpan.get(0));
    $oSpan.click(function () {
        $('body,html').animate({scrollTop:0},1000);
        return false;
    })


   
    

})



