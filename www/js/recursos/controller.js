
$(function(){
  
  init();
  
});

function init(){
    $("#btnEnviar").on("click", function(){
                agregarLugar();
    });
}

function agregarLugar(){
	var nombre, telefono, direccion, urlimg, descripcion, tipo, tags;
	nombre = campoNombre.value;
	telefono = campoTelefono.value;
	direccion = campoDireccion.value;
	urlimg = campoImagen.value;
	descripcion = campoDescripcion.value;
	tipo = campoTipo.value;
	tags = campoTags.value;
	urlService = "http://guiarte.uni.me/MedellinInteractiva/servicios/ServicioLugar.php";
	params = {nombreServicio: 'insertar', nombre: nombre, direccion: direccion, imagen: urlimg, descripcion: descripcion, tipo: tipo};
	callService(urlService, params, "exito");
	
}


function callService(urlService, params, cb){
    $.ajax({
           url: urlService,
           contentType: 'application/x-www-form-urlencoded',
           data: params,
           beforeSend: prueba(),
           dataType: 'json',
           success: eval(cb),
           timeout: 6000,
           });
}

function prueba(){
    
    alert("hola")
}

function exito(data){
    
}