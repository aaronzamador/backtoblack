$(document).ready(function() {
    /*------------------------------------------------------
    adds active class to the nav element where the scroll position is currently at
    ------------------------------------------------------*/
    $(window).scroll(function() {
      //get current sroll position
      var scrollPosition = $(window).scrollTop();
      //get the position of the containers
      var one = $("#beginnings").offset().top - 100,
          two = $("#review").offset().top - 100,
          three = $("#wireframes").offset().top - 100;
          four = $("#testing").offset().top - 100;
          five = $("#hifis").offset().top - 100;
          
      //if the scroll position is the same as the position of the container specified, add the "active" class to the corresponding nav element
      if (scrollPosition >= one) {
        $(".statusitem1").addClass("statusactive");
        $(".statusitem2").removeClass("statusactive");
        $(".statusitem3").removeClass("statusactive");
        $(".statusitem4").removeClass("statusactive");
        $(".statusitem5").removeClass("statusactive");
      }
      if (scrollPosition >= two) {
        $(".statusitem2").addClass("statusactive");
        $(".statusitem1").removeClass("statusactive");
        $(".statusitem3").removeClass("statusactive");
        $(".statusitem4").removeClass("statusactive");
        $(".statusitem5").removeClass("statusactive");
      }
      if (scrollPosition >= three) {
        $(".statusitem3").addClass("statusactive");
        $(".statusitem2").removeClass("statusactive");
        $(".statusitem1").removeClass("statusactive");
        $(".statusitem4").removeClass("statusactive");
        $(".statusitem5").removeClass("statusactive");
      }
      if (scrollPosition >= four) {
        $(".statusitem4").addClass("statusactive");
        $(".statusitem2").removeClass("statusactive");
        $(".statusitem3").removeClass("statusactive");
        $(".statusitem1").removeClass("statusactive");
        $(".statusitem5").removeClass("statusactive");
      }
      if (scrollPosition >= five) {
        $(".statusitem5").addClass("statusactive");
        $(".statusitem2").removeClass("statusactive");
        $(".statusitem3").removeClass("statusactive");
        $(".statusitem4").removeClass("statusactive");
        $(".statusitem1").removeClass("statusactive");
      }
    });
});
      
    
