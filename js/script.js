$(document).ready(function(){
// for croll
  $('#about').on('click', function () {
    $.scrollport('#aboutCompany')
    $( '#about' ).scrollport_link( '#aboutCompany' );
    $.scrollport(  '#aboutCompany', {mode: 'usual', speed: 1500});
  });

  $('#uslugi').on('click', function () {
    $.scrollport('#descript')
    $('#uslugi').scrollport_link('#descript');
    $.scrollport( '#descript', {mode: 'usual', speed: 1500});
  });

  $('#price').on('click', function () {
    $.scrollport('#prises')
    $('#price').scrollport_link('#prises');
    $.scrollport( '#prises', {mode: 'usual', speed: 1500});
  });

  $('#contact').on('click', function () {
    $.scrollport('#foooterScroll')
    $('#contact').scrollport_link('#foooterScroll');
    $.scrollport( '#foooterScroll', {mode: 'usual', speed: 1500});
  });

    // FOR MENU FIX
    var $menu = $("#headerMenu");
    var windowWidth = $(window).width();
        $(window).scroll(function(){
              if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
                  $menu.removeClass("default").addClass("fixed");
              } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                  $menu.removeClass("fixed").addClass("default");
              } else if (windowWidth > 500) {
                $("#headerMenu").removeClass("default");
                $("#headerMenu").removeClass("fixed");
              }
          });

    // CHANGE IMAGE
function changeBg() {

  var $block = $ ("#section");

setInterval( function () {
     $block.removeClass("bgImage1").addClass("bgImage2");
   },3000);

setInterval( function() {
    $block.removeClass("bgImage2").addClass("bgImage3");
  },6000);

setInterval( function () {
   $block.removeClass("bgImage3").addClass("bgImage1");
 },9000);

};
changeBg();
// for mobile remove class















});

























      //
