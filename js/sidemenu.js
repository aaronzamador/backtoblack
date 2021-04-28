$("#right").click(function(){
            
    if ($('.sidemenu').hasClass("sideclicked")){
        $('.sidemenu').removeClass("sideclicked");
        $('.everything').removeClass("onclick");
        $(".footercontainer").removeClass("fcclicked");
        $(".rotatingm").removeClass("cmen");
}
    else{
        $('.sidemenu').addClass("sideclicked");
        $('.everything').addClass("onclick");
        $(".footercontainer").addClass("fcclicked");
}
if ($('.aboutcontainer').hasClass("aboutmenuclicked")){
    $('.aboutcontainer').removeClass("aboutmenuclicked");
}
            
 });

 $(".linkage").click(function(){
    $('.sidemenu').removeClass("sideclicked");
    $(".rotatingm").removeClass("cmen");
    $('.everything').removeClass("onclick");
    $(".footercontainer").removeClass("fcclicked");
            
 });   
 $(".everything").click(function(){
             
     if ($('.sidemenu').hasClass("sideclicked")){
         $('.sidemenu').removeClass("sideclicked");
         $('.everything').removeClass("onclick");
         $(".footercontainer").removeClass("fcclicked");
         $(".rotatingm").removeClass("cmen");
         $('.aboutcontainer').removeClass("aboutmenuclicked");
 }
     else{
 }
  });

    
$(".gettingback").click(function(){
            
    if ($('.sidemenu').hasClass("sideclicked")){
        $('.sidemenu').removeClass("sideclicked");
        $('.everything').removeClass("onclick");
        $(".footercontainer").removeClass("fcclicked");
        

        if ($('.rotatingm').hasClass("cmen")){
            $(".rotatingm").removeClass("cmen");}
            
}
    else{
        $('.sidemenu').addClass("sideclicked");
        $('.everything').addClass("onclick");
        $(".footercontainer").addClass("fcclicked");
}


    
            
 });


 



 $(".rotm").click(function(){
        
        
    if ($('.rotatingm').hasClass("cmen")){
        $(".rotatingm").removeClass("cmen");
        $(".casestudies").removeClass("csclicked");
        $('.everything').removeClass("onclick");
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
        $('.everything').removeClass("onclick");
        $('.gettingback').removeClass("gettingclicked");
        $(".footercontainer").removeClass("fcclicked");
}
    else{
        $('.sidemenu').addClass("sideclicked");
        $(".casestudies").addClass("csclicked");
        $('.gettingback').addClass("gettingclicked");
}       
if ($('.aboutcontainer').hasClass("aboutmenuclicked")){
    $('.aboutcontainer').removeClass("aboutmenuclicked");
}




});

$(window).resize(function() {
    if ($(window).width() > 1024) {
        $(".footercontainer").removeClass("fcclicked");
        $('.everything').removeClass("onclick");
        if ($('.sidemenu').hasClass("sideclicked")){

        }
        else{
            $(".casestudies").removeClass("csclicked");}
    }
   else {
   }
  });
  



var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
