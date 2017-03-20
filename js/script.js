// for menu btn
function scroll() {

  var aboutBtn = document.getElementById('about');
  var uslugiBtn = document.getElementById('uslugi');
  var priceBtn = document.getElementById('price');
  var contactBtn = document.getElementById('contact');

  aboutBtn.onclick =  function () {
    scrollBy(0, 800);
  };
  uslugiBtn.onclick = function () {
    scrollBy(0, 1250);
  };
  priceBtn.onclick = function () {
    scrollBy(0, 1620);
  };
  contactBtn.onclick = function () {
    scrollBy(0, 1900);
  };
}
scroll();
// for animation in first section

var text = {
  rent: "Мы на рынке продаж автомобилей более 10-ти лет.",
  sold: "Мы предоставляем помощь при продаже вашего автомобиля.",
  wash: "Всегда можно помыть ваш автомобиль на нашей мойке."
}
