   
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
            
 });

 



 $(".rotm").click(function(){
        
        
    if ($('.rotatingm').hasClass("cmen")){
        $(".rotatingm").removeClass("cmen");
        $(".casestudies").removeClass("csclicked");
        $('#everything').removeClass("onclick");
        $('.gettingback').removeClass("gettingclicked");
        
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
}
    else{
        $('.sidemenu').addClass("sideclicked");
        $(".casestudies").addClass("csclicked");
        $('.gettingback').addClass("gettingclicked");
}




});