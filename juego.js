function jugar() {
    const nombre1 = document.getElementById('nombre1').value || "Jugador 1";
    const nombre2 = document.getElementById('nombre2').value || "Jugador 2";
    document.getElementById('nombreJugador1').textContent = nombre1;
    document.getElementById('nombreJugador2').textContent = nombre2;

    const opciones = ['piedra', 'papel', 'tijera'];
    const eleccionJugador1 = opciones[Math.floor(Math.random() * opciones.length)];
    const eleccionJugador2 = opciones[Math.floor(Math.random() * opciones.length)];

    document.getElementById('eleccionJugador1').textContent = eleccionJugador1;
    document.getElementById('eleccionJugador2').textContent = eleccionJugador2;

    let mensaje = '';

    // Lógica de juego
    if (eleccionJugador1 === eleccionJugador2) {
        mensaje = `Es un empate 🥂, el cestigo es besarse!`;
    } else if (
        (eleccionJugador1 === 'piedra' && eleccionJugador2 === 'tijera') ||
        (eleccionJugador1 === 'papel' && eleccionJugador2 === 'piedra') ||
        (eleccionJugador1 === 'tijera' && eleccionJugador2 === 'papel')
    ) {
        mensaje = `${nombre1} gana ❤️! Tu amor es tan fuerte como tu elección "${eleccionJugador1}"!`;
    } else {
        mensaje = `${nombre2} gana 🤩! ${nombre1} 😌 le debes un beso apasionado!`;
    }

    // Mostrar el mensaje con efecto de escritura
    escribirTexto(mensaje);

    // Llamar a la función de animación de corazones y estrellas
    animarCorazonesYEstrellas();
}

// Función para mostrar el mensaje con efecto de escritura lenta
function escribirTexto(texto) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = ''; // Limpiar cualquier texto previo
    let index = 0;

    function escribirLetra() {
        if (index < texto.length) {
            resultado.textContent += texto.charAt(index);
            index++;
            setTimeout(escribirLetra, 70); // Ajusta la velocidad aquí
        }
    }

    escribirLetra();
}

