   
$("#right").click(function(){
            
    if ($('.sidemenu').hasClass("sideclicked")){
        $('.sidemenu').removeClass("sideclicked");
        $('#everything').removeClass("onclick");
        $(".footercontainer").removeClass("fcclicked");
}
    else{
        $('.sidemenu').addClass("sideclicked");
        $('#everything').addClass("onclick");
        $(".footercontainer").addClass("fcclicked");
}
            
 });

    
$(".gettingback").click(function(){
            
    if ($('.sidemenu').hasClass("sideclicked")){
        $('.sidemenu').removeClass("sideclicked");
        $('#everything').removeClass("onclick");
        $(".footercontainer").removeClass("fcclicked");
        

        if ($('.rotatingm').hasClass("cmen")){
            $(".rotatingm").removeClass("cmen");}
            
}
    else{
        $('.sidemenu').addClass("sideclicked");
        $('#everything').addClass("onclick");
        $(".footercontainer").addClass("fcclicked");
}


    
            
 });


$(".linkage").click(function(){
    $('.sidemenu').removeClass("sideclicked");
    $('#everything').removeClass("onclick");
    $(".footercontainer").removeClass("fcclicked");
            
 });

 



 $(".rotm").click(function(){
        
        
    if ($('.rotatingm').hasClass("cmen")){
        $(".rotatingm").removeClass("cmen");
        $(".casestudies").removeClass("csclicked");
        $('#everything').removeClass("onclick");
        $('.gettingback').removeClass("gettingclicked");
        $(".footercontainer").removeClass("fcclicked");
        
    }
    else{
        $('.rotatingm').addClass("cmen");
        $('.sside').addClass("cside");
        $(".casestudies").addClass("csclicked");
        $('.gettingback').addClass("gettingclicked");
        
    }

          
    if ($('.sidemenu').hasClass("sideclicked")){
        $('.sidemenu').removeClass("sideclicked");
        $(".casestudies").removeClass("csclicked");
        $('#everything').removeClass("onclick");
        $('.gettingback').removeClass("gettingclicked");
        $(".footercontainer").removeClass("fcclicked");
}
    else{
        $('.sidemenu').addClass("sideclicked");
        $(".casestudies").addClass("csclicked");
        $('.gettingback').addClass("gettingclicked");
}




});

$(window).resize(function() {
    if ($(window).width() > 1024) {
        $(".footercontainer").removeClass("fcclicked");
        $('#everything').removeClass("onclick");
        if ($('.sidemenu').hasClass("sideclicked")){

        }
        else{
            $(".casestudies").removeClass("csclicked");}
    }
   else {
   }
  });