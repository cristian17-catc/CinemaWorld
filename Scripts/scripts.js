$(document).ready(function () {
    $(window).scroll(function(){
        if( $(this).scrollTop()> 0 ){
          $('header').addClass('header2');
       }else {
       $('header').removeClass('header2');
        }
    });
});


$(document).ready(function () {
   $("#button-main").click(function () {
      if ($(this).click()) {
          $("nav").addClass(".nav2");
      }else{
        $("nav").removeClass(".nav2");
      }
       $(".nav2").show();
   });
});