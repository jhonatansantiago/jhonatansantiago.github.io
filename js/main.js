/*global $, jQuery, alert*/
$(document).ready(function() {
  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Jhonatan Santiago.","Ciêntista da Computação.","Design gráfico.","Desenvolvedor web.", "Freelancer."],
      typeSpeed: 100,
      loop: true,
    });
  });

});
