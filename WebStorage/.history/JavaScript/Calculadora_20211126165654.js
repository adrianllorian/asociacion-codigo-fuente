//MAIN
$(document).ready(function() {
    Aportacion();
    Consumicion();
   
  });

  function Aportacion(){
      
      $('button[id^="Aportacion"]').click(function(){
          console.log('Entra');
		var preparandoClave = $(this).attr('id').split("Aportacion-");

		var idUsuario = preparandoClave[1]; //id Mensaje
        var cantidad = $('#pantallaAportacion-' + idUsuario).val();
        var concepto = $('#pantallaConcepto-' + idUsuario).val();
        console.log("id:" + idUsuario + " cantida:" + " concepto:" + concepto);
      });
  }

  function Consumicion(){
      
    $('button[id^="Consumicion-"]').click(function(){
      var preparandoClave = $(this).attr('id').split("Consumicion-");

      var idUsuario = preparandoClave[1]; //id Mensaje
      var cantidad = $('#pantallaAportacion-' + idUsuario).val();
      var concepto = $('#pantallaConcepto-' + idUsuario).val();
      console.log("id:" + idUsuario + " cantida:" + " concepto:" + concepto);
    });
}