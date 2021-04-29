$("#footabout").click(function(){
            
    if ($('.aboutcontainer').hasClass("aboutmenuclicked")){
        $('.aboutcontainer').removeClass("aboutmenuclicked");
}
    else{
        $('.aboutcontainer').addClass("aboutmenuclicked");
        $('.everything').addClass("onclick");
        $(".footercontainer").addClass("fcclicked");
}
            
 });   
 
 
 $("#flatout").click(function(){
             
     if ($('.aboutcontainer').hasClass("aboutmenuclicked")){ 
        $('.aboutcontainer').removeClass("aboutmenuclicked");
        $('.everything').removeClass("onclick");
        $(".footercontainer").removeClass("fcclicked");
 }
     else{
         $('.aboutcontainer').addClass("aboutmenuclicked");

         
 }

 if ($('.sidemenu').hasClass("sideclicked")){
    $('.sidemenu').removeClass("sideclicked");
    $('.everything').removeClass("onclick");
    $(".footercontainer").removeClass("fcclicked");
    $(".rotatingm").removeClass("cmen");
}
         
              
   }); 

 $(".closethis").click(function(){
             
     if ($('.aboutcontainer').hasClass("aboutmenuclicked")){
         $('.aboutcontainer').removeClass("aboutmenuclicked");
         $('.everything').removeClass("onclick");
         $(".footercontainer").removeClass("fcclicked");
 }
             
  });

  
 $(".contactlink").click(function(){
             
    if ($('.aboutcontainer').hasClass("aboutmenuclicked")){
        $('.aboutcontainer').removeClass("aboutmenuclicked");
}
            
    if ($('.sidemenu').hasClass("sideclicked")){
        $('.sidemenu').removeClass("sideclicked");
        $('.everything').removeClass("onclick");
        $(".rotatingm").removeClass("cmen");
}
            
 });

 $(window).resize(function() {
    if ($(window).width() > 1024) {
        $(".footercontainer").removeClass("fcclicked");
        $('.everything').removeClass("onclick");
        if ($('.sidemenu').hasClass("sideclicked")){

        }
        else{
            $(".casestudies").removeClass("csclicked");};



        
            ;
    }







   else {
   }
  });
  
