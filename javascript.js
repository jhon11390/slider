$(document).ready(function(){
  function animacion() {
    var tiempo = 2000;
    var estado = 0
    // intervalo
    var interval = setInterval(function() {
      $('#slide2').trigger('click');
      clearInterval(interval)
    }, tiempo);


    var interval2 = setInterval(function() {
      $('#slide1').trigger('click');
      clearInterval(interval2)
    }, tiempo*2);

    var interval3 = setInterval(function() {
      $('#slide5').trigger('click');
      clearInterval(interval3)
    }, tiempo*3);

    var interval4 = setInterval(function() {
      $('#slide4').trigger('click');
      clearInterval(interval4)
    }, tiempo*4);

    var interval5 = setInterval(function() {
      $('#slide3').trigger('click');
      clearInterval(interval5)
    }, tiempo*5);
  }
  animacion();

  var tiempo = setInterval(function() {
    animacion()
  }, 10000)

  
  // eventos click de las etiquetas <a>
});