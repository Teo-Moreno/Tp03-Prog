let Contador = 0;
let Acertadas = 0;
let Intentos = 10;
function ArriesgarLetra(event) {
  if (Intentos <= 0){return;}
    if (event) event.preventDefault();

    const inputLetra = document.getElementById("letra");
    const inputPalabra = document.getElementById("palabra");

    const letraIngresada = inputLetra.value.toLowerCase();
    const palabra = inputPalabra.value.toLowerCase();

    const intentosRestantes = document.getElementById("intentosRestantes");


    if (letraIngresada === "") {
        document.getElementById("Mensaje").innerHTML =
            "Debes ingresar una letra.";
        return;
    }

    Contador = 0;

    for (let i = 0; i < palabra.length; i++) {

        if (palabra[i] === letraIngresada) {

            const letraElemento = document.getElementById("letra" + i);

            if (letraElemento && letraElemento.innerHTML === "_") {
                letraElemento.innerHTML = letraIngresada;
                letraElemento.style.color = "green";
                Contador++;
                Acertadas++;
            }
        }
    }
    if(Contador == 0){
      Intentos--;
      intentosRestantes.innerHTML = "Intentos restantes: " + Intentos;
    }
    
    if (Contador > 0 && Intentos > 0) {
        document.getElementById("Mensaje").innerHTML =
            "Acertaste " + Contador + " letra(s).";
    } else {
        document.getElementById("Mensaje").innerHTML =
            "La letra no está en la palabra.";
    }

    if (Intentos == 0)
      {
        Mensaje.innerHTML = "PERDISTE";
        Mensaje.style.color = "red";

      }

    inputLetra.value = "";
    if (Acertadas == 8)
      {
        Mensaje.innerHTML = "GANASTE";
        Mensaje.style.color = "green";
      }
}