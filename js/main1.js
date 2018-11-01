$(function () {
     var $oLis = $("#parts .part-1 ul li");

     $oLis.each(function (index,value) {
        $(this).children(":first").css("display","block");
         $(value).mouseenter(function () {
             $(this).css({"color":"red","border-bottom":"5px solid red"});
            $(this).children(":first").css("display","block");
          //  console.log($child.get(0));
             var $oLi = $(this).siblings();
             $oLi.each(function (index,value) {
                 $(this).css({"color":"black","border-bottom":"0px"});
                 $(this).children(":first").css("display","none");




             })


         })

     })





})