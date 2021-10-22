function myFunction() {
    x = "A los 10 años ya me interesaban las computadoras, de echo, disfrutaba mas haciendo el debuggin de los creasheos de mi minecraft en mi computadora cuando le ponia 200 mods a jugar el propio juego."
    document.getElementById("demo").innerHTML = x;
  }
  function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
       getQueryVariable("nombre");
       console.log(getQueryVariable("nombre"))
;
}
function displayQuery(){
y="Nombre: "+getQueryVariable('nombre')+"<br>"+"Apellido: "+getQueryVariable('apellido')+"<br>"+"Archivo: "+ getQueryVariable('archivo')

document.getElementById("xd").innerHTML = y;
}