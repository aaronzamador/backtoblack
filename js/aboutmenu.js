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
  

  $('.reviewimage1').click(function(e){
    $('.reviewimage1 img').toggleClass('fullscreen'); 
});

$('.testingimage').click(function(e){
    $('.testingimage img').toggleClass('fullscreen'); 
  });

  $('.compimage1').click(function(e){
    $('.compimage1 img').toggleClass('fullscreen'); 
  });
  
  $('.iap1').click(function(e){
    $('.iap1 img').toggleClass('fullscreen'); 
  });
  
  $('.flowpic1').click(function(e){
    $('.flowpic1 img').toggleClass('fullscreen'); 
  });
  $('.jp1').click(function(e){
      $('.jp1 img').toggleClass('fullscreen'); 
    });
    $('.sp1').click(function(e){
        $('.sp1 img').toggleClass('fullscreen'); 
      });
      $('.sp2').click(function(e){
          $('.sp2 img').toggleClass('fullscreen'); 
        });
        $('.sp3').click(function(e){
            $('.sp3 img').toggleClass('fullscreen'); 
          });
          $('.sp4').click(function(e){
              $('.sp4 img').toggleClass('fullscreen'); 
            });
            $('.sp5').click(function(e){
                $('.sp5 img').toggleClass('fullscreen'); 
              });
              $('.sp6').click(function(e){
                  $('.sp6 img').toggleClass('fullscreen'); 
                });

$('.wireimg').click(function(e){
$('.wireimg img').toggleClass('fullscreen'); 
});


$('.wireimg2').click(function(e){
    $('.wireimg2 img').toggleClass('fullscreen'); 
    });

    
$('.testp1').click(function(e){
    $('.testp1 img').toggleClass('fullscreen'); 
    });

    
$('.ms1').click(function(e){
    $('.ms1 img').toggleClass('fullscreen'); 
    });

    
$('.ms2').click(function(e){
    $('.ms2 img').toggleClass('fullscreen'); 
    });

    
$('.ms3').click(function(e){
    $('.ms3 img').toggleClass('fullscreen'); 
    });

    
$('.ms4').click(function(e){
    $('.ms4 img').toggleClass('fullscreen'); 
    });

    