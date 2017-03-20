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








// /
// for animation in first section

// var text = {
//   rent: "Мы на рынке продаж автомобилей более 10-ти лет.",
//   sold: "Мы предоставляем помощь при продаже вашего автомобиля.",
//   wash: "Всегда можно помыть ваш автомобиль на нашей мойке."
// }
