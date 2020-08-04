$("select").on("change", function(){
  /*Determinar la opción que escogió*/
  var opcion =$(this).val();

  /*cambiar la imagen en función de la opción*/

  switch (opcion) {
    case "0": $("img").attr("src", "imagenes/messi.jpg");
    
              break;
    case "1": $("img").attr("src", "imagenes/elsa.jpg");
              break;
    case "2": $("img").attr("src", "imagenes/Chris.jpg");
                        break;

    default : $("img").attr("src", "imagenes/anonimo.png");/*si no es ninguna de las opciones anteriores aparecera está imagen como base*/
                        break;

  }
});
