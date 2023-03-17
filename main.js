setTimeout(function(){
  $('.loading').fadeToggle();
},2500)
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

function form(){
  window.open("thanks.html");
}
function btn(){
  location.href="tel:+91 80784 62612";
}
function btno(){
  window.open("about.html");
}
function go() {
      window.open("https://wa.me/+918078462612?text= RAYS PRO I NEED YOUR SERVICE");
}