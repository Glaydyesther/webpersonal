'use strict'
function verDatos()
{
    var mostrarData = datoMostrar.style.display;
    if (mostrarData == "none"){
        datoMostrar.style.display = "block";       
    }
    // else
    // {
    //     datoMostrar.style.display = "none";       
    // }
    return true;

}
var datoMostrar = document.getElementById("mostrar");
var datoPrincipal = document.getElementById("principal");
var ver = document.getElementById("ver-mas");
// datoMostrar.style.display = "none";
// datoPrincipal.style.display = "block";

ver.addEventListener('click',
    verDatos
);
