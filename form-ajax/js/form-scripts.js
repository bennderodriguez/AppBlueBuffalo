$("#contactForm").validator().on("submit", function (event) {
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
	console.log("llege perro");
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
	var d = new Date(); 
   console.log( d.toLocaleString("en-US")); 
	
	console.log(name);
	console.log(email);
	console.log(message);
	
	var text = '[{"Nombre":"'+name+'","Email":"'+email+'","Mensaje":"'+message+'","Hora":"'+d.toLocaleString("en-US")+'"}]';
	
// creas el fichero con la API File
var file = new File([text],"encusta.json",{type:"text/plain;charset=utf-8"});

// obtienes una URL para el fichero que acabas de crear
var url  = window.URL.createObjectURL(file);

// creas un enlace y lo añades al documento
var a = document.createElement("a");
document.body.appendChild(a);

// actualizas los parámetros del enlace para descargar el fichero creado
a.href = url;
a.innerHTML = "Descargar fichero";
a.download = file.name;
   
	console.log(text);

    /*$.ajax({
        type: "POST",
        url: "phpp/form-process.php",
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
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
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