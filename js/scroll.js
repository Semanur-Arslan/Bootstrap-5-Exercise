
$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
        if (scroll > 30) {
          $(".navbar").addClass('bg-scrolling');
        }
  
        else{
            $(".navbar").removeClass('bg-scrolling');   
        }
    })
  })