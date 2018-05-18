$("#resultados_de_la_encuesta").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, " Nada que enviar :(");
        console.log(" Todos los campos son requeridos");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm() {
    // Initiate Variables With Form Content
    var jsonRespuestas = $("#jsonRespuestas").val();
    console.log(jsonRespuestas);

    $.ajax({
        type: "POST",
        url: "http://eloquent.com.mx/PanelBlueBuffalo/recibe_respuestas.php",
        data: "jsonRespuestas=" + jsonRespuestas,
        success : function(text){
            if (text){
                formSuccess();
				localStorage.clear();
				setTimeout(function(){
							location.href ="index.html";
							},3000); //delay is in milliseconds 
            } else {
                formError();
                submitMSG(false,text);
            }
        },
      error: function (xhr, ajaxOptions, thrownError) {
        alert("No fue posible conectar con la nube :( verifique su conexión a internet");
		submitMSG(false,"No fue posible conectar con la nube :( verifique su conexión a internet");
      }
    });

}

function formSuccess() {
    $("#resultados_de_la_encuesta")[0].reset();
    submitMSG(true, " Las respuestas se guardaron correctamente!")
}

function formError() {
	console.log("error");
    $("#resultados_de_la_encuesta").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}