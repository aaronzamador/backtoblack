   
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