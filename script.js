function mostrar(){
    document.getElementById('video').style.display = 'block';
    }
document.getElementById("btn-video").onclick = function() {
    document.getElementById("btn-video").remove();
    mostrar()
}
function ocultar(){
    document.getElementById('video').style.display = 'none';
    }
    
window.onload = ocultar ();
