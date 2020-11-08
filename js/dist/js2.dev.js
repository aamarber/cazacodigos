"use strict";

(function () {
  var input = document.getElementById('decimal');
  input.addEventListener('input', function () {
    if (Number(this.value) !== 4) {
      return;
    }

    var header = document.getElementById('header');
    header.innerText = '¡SÍ! Si tienes curiosidad, puedes ir aquí para saber porqué no es 0.3 exactamente https://github.com/denysdovhan/wtfjs#precision-of-01--02';
    var header2 = document.createElement('h1');
    header2.innerText = 'Si no, contnúa la caza en https://caza-codigos.herokuapp.com/css/css1.html';
    document.body.appendChild(header2);
  });
})();