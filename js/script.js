
  var aboutBtn = document.getElementById('about');
  var uslugiBtn = document.getElementById('uslugi');
  var priceBtn = document.getElementById('price');
 var contactBtn = document.getElementById('contact');
 function scroll() {


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
