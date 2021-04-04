   
$("#right").click(function(){
            
    if ($('.sidemenu').hasClass("sideclicked")){
        $('.sidemenu').removeClass("sideclicked");
        $('#everything').removeClass("onclick");
}
    else{
        $('.sidemenu').addClass("sideclicked");
        $('#everything').addClass("onclick");
}
            
 });

    
$(".gettingback").click(function(){
            
    if ($('.sidemenu').hasClass("sideclicked")){
        $('.sidemenu').removeClass("sideclicked");
        $('#everything').removeClass("onclick");
}
    else{
        $('.sidemenu').addClass("sideclicked");
        $('#everything').addClass("onclick");
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
        
    }
    else{
        $('.rotatingm').addClass("cmen");
        $('.sside').addClass("cside");
        $(".casestudies").addClass("csclicked");
        
    }

          
    if ($('.sidemenu').hasClass("sideclicked")){
        $('.sidemenu').removeClass("sideclicked");
        $(".casestudies").removeClass("csclicked");
        $('#everything').removeClass("onclick");
}
    else{
        $('.sidemenu').addClass("sideclicked");
        $(".casestudies").addClass("csclicked");
}




});