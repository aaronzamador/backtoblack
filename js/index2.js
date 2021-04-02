   
            $("#nav").click(function(){
            
            
                if ($('.menu').hasClass("menuswitch")){
                    $('.menuclose').removeClass("menucloseswitch");
                    $('.menu').removeClass("menuswitch");
                    $('.sidemenu').removeClass("sideclicked");
                    
                }
                else{
                    $('.menu').addClass("menuswitch");
                    $('.menuclose').addClass("menucloseswitch");
                    $('.sidemenu').addClass("sideclicked");
                    
                }
            
            
            });