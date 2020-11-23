//array con código de todas las imágenes.
misFotos=["<img src='foto1.png' alt='1. Manzanas.' name='fotos0'>",
          "<img src='foto2.png' alt='2. Naranjas.' name='fotos1'>",
          "<img src='foto3.png' alt='3. Platanao.' name='fotos2'>",
          "<img src='foto4.png' alt='4. Tomatillo.' name='fotos3'>",
          "<img src='foto5.png' alt='5. Galletas.' name='fotos4'>",
          "<img src='foto6.png' alt='6. Abarrotes.' name='fotos5'>",
          "<img src='foto7.png' alt='7. Ubicacion - Reforma 8j.' name='fotos6'>",
          "<img src='foto8.png' alt='8. logo.' name='fotos7'>"]
muestra=0; //referencia a foto actual del array
window.onload = function() { 
pantalla=document.getElementById("visor"); //elemento pantalla para ver las fotos.
titulo=document.getElementById("mititulo"); //elemento texto de pie de foto
foto=document.getElementById("fotoSale"); //elemento foto saliente
fotoAnt=document.getElementById("fotoEntra"); //elemento foto entrante
}
function mueve(opcion) { //cambio de imagen
         anterior=misFotos[muestra]; //código foto saliente
         fotoAnt.innerHTML=anterior; //foto actual como foto saliente.
         switch (opcion) { //opciones para los distintos botones
         case "avance": //botón de avanza 1
         muestra++;
         if (muestra>7) { muestra=0; } //si llegamos al final empieza de nuevo.
         estilo="derecho"; //la transición será de derecha a izquierda
         break;
         case "fin": //botón avanza hasta el final.
         muestra=7
         estilo="derecho";
         break;
         case "retro": //botón retrodede 1
         muestra--;
         if (muestra<0) { muestra=7; } //si retrocedemos desde el principio va al final
         estilo="izquierdo" //la transición será de izquierda a derecha
         break;
         case "prin": //retroceder al principio
         muestra=0
         estilo="izquierdo"
         break
         }
         ver=misFotos[muestra]; //código de foto después de pulsar botón (foto nueva)
         mueveFoto = 400; //posición de foto nueva para estilo derecho
         mueveFoto2=-400; //posición de foto nueva para estilo izquierdo
         completado=setInterval(transicion,40); //iniciar transición
         }

function transicion() { //mover - transición de imagenes
         if (estilo=="derecho") {	//de derecha a izquierda 
            mueveFoto-=10; //mover foto nueva 10px hacia la izquierda en cada repetición
            mueveAnt=mueveFoto-400; //la foto vieja también se mueve.
            cambioFoto=mueveFoto+"px"; //añadimos "px" para poder usar estilo CSS
            cambioAnt=mueveAnt+"px";
            foto.style.left=cambioFoto; //Cambio de posición mediante estilo CSS
            fotoAnt.style.left=cambioAnt;
            foto.innerHTML=ver; //Visionamos la imagen nueva.
            if (mueveFoto<=0) { //al completar la transición debemos parar el movimiento
               parar() //función que para el movimiento.
               }
            }
         //Transición de izquierda a derecha. El proceso es similar al anterior
         else if (estilo=="izquierdo") {  		
            mueveFoto2+=10; //las fotos se mueven hacia la derecha 
            mueveAnt=mueveFoto2+400;
            cambioFoto=mueveFoto2+"px";
            cambioAnt=mueveAnt+"px";
            foto.style.left=cambioFoto;
            fotoAnt.style.left=cambioAnt;
            foto.innerHTML=ver;
            if (mueveFoto2>=0) {
               parar()
               }
            }
         }
function parar() { //parar el movimiento al finalizar la transición. 
         clearInterval(completado); //paramos el movimiento de imágenes
         numFoto="fotos"+muestra; //esta línea y las dos siguientes cambian el pie de foto.
         eltitulo=document.images[numFoto].alt;
         titulo.innerHTML = eltitulo;
         numff=muestra+1; //colocamos la nueva foto como fondo del visor.
         fotoFondo="foto"+numff+".pmg"
         imagenFondo="url("+fotoFondo+")";
         pantalla.style.backgroundImage=imagenFondo
         }
