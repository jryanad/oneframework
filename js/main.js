/*-------------------------------------------------------------------------*/
/*  Fixed Header Scroll
/*-------------------------------------------------------------------------*/

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('header').addClass("fixed-animated");
  }
  else{
    $('header').removeClass("fixed-animated");
  }
});