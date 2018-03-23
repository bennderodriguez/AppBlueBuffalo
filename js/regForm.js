$("#regForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Todos los campos son requeridos");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var lugar = $("#lugar").val();
	console.log(lugar);
	var tipo_mascota = $("#tipo_mascota").val();
	console.log(tipo_mascota);
	var nombre = $("#nombre").val();
	console.log(nombre);
	var edad_numero = $("#edad_numero").val();
	console.log(edad_numero);
	var edad_mm_yy = $("#edad_mm_yy").val();
	console.log(edad_mm_yy);
	var nombre_padre = $("#nombre_padre").val();
	console.log(nombre_padre);
	var email = $("#email").val();
	console.log(email);
    /*$.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });*/
}

function formSuccess(){
    $("#regForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#regForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}