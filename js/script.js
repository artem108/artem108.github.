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
  $(document).ready(function(){
    var $menu = $("#headerMenu");
        $(window).scroll(function(){
              if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
                  $menu.removeClass("default").addClass("fixed");
              } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
                  $menu.removeClass("fixed").addClass("default");
              }
          });
      });
