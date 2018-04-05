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


function submitForm() {
    console.log("llege perro");
    
    // Initiate Variables With Form Content
    var Mascota = $("#Mascota").val();
    var nombre_mascota = $("#nombre_mascota").val();
    var lugar = $("#lugar").val();
    var tamano = $("#tamano").val();
    var edad_numero = $("#edad_numero").val();
    var edad_mm_yy = $("#edad_mm_yy").val();
    var nombre_padre = $("#nombre_padre").val();
    var email = $("#email").val();
    var marca = $("#marca").val();
    var clienteSelecciono = $("#clienteSelecciono").val();
    var d = new Date();
    console.log(d.toLocaleString("en-US"));
    console.log(Mascota);
    console.log(nombre_mascota);
    console.log(lugar);
    console.log(tamano);

    var text = '[{"nombre_mascota":"' + nombre_mascota + '","lugar":"' + lugar + '","tamano":"' + tamano + '","Hora":"' + d.toLocaleString("en-US") + '"}]';
    clickCounter(text);
// creas el fichero con la API File
    var file = new File([text], "encusta.json", {type: "text/plain;charset=utf-8"});

// obtienes una URL para el fichero que acabas de crear
    var url = window.URL.createObjectURL(file);

// creas un enlace y lo añades al documento
    var a = document.createElement("a");
    document.body.appendChild(a);

// actualizas los parámetros del enlace para descargar el fichero creado
    a.href = url;
    a.innerHTML = "Descargar fichero";
    a.download = file.name;

    console.log(file);

//    // Check browser support
//    if (typeof (Storage) !== "undefined") {
//        // Store
//        localStorage.setItem("Respuestas", text);
//        // Retrieve
//        document.getElementById("result").innerHTML = localStorage.getItem("Respuestas");
//    } else {
//        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
//    }

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
    
    formSuccess();
}

function formSuccess() {
    $("#regForm")[0].reset();
    submitMSG(true, "Respuestas Enviadas!")
   // $(location).attr('href', 'pr1.html')
}

function formError() {
    $("#regForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
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

function clickCounter(text) {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Numero de encuestados: " + localStorage.clickcount;
        console.log("Numero de encuestas Totales: " + localStorage.clickcount);
        localStorage.setItem("Respuestas", text);
        console.log(localStorage.getItem("Respuestas"));
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}