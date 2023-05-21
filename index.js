// Selecciona el elemento del puntero
var puntero = document.createElement("div"); // Crea un nuevo elemento div y lo asigna a la variable 'puntero'
puntero.style.position = "fixed"; // Establece la posición del puntero como fija
puntero.style.width = "10px"; // Establece el ancho del puntero en 10px
puntero.style.height = "10px"; // Establece la altura del puntero en 10px
puntero.style.borderRadius = "50%"; // Establece el radio de borde del puntero como un círculo completo
puntero.style.backgroundColor = "yellow"; // Establece el color de fondo del puntero como amarillo
puntero.style.pointerEvents = "none"; // Desactiva los eventos de puntero en el elemento (para que no interfiera con otros elementos)
puntero.style.zIndex = "9999"; // Establece el índice de apilamiento del puntero para asegurarse de que esté en la parte superior

// Agrega el puntero a la página
document.body.appendChild(puntero); // Agrega el puntero como un hijo del elemento body en el documento HTML

// Maneja el movimiento del puntero
document.addEventListener("mousemove", function (e) {
  // Agrega un evento para detectar el movimiento del puntero
  var x = e.clientX; // Obtiene la posición horizontal del puntero en relación al viewport
  var y = e.clientY; // Obtiene la posición vertical del puntero en relación al viewport

  // Actualiza la posición del puntero
  puntero.style.left = x - 5 + "px"; // Establece la posición horizontal del puntero restando 5px al valor obtenido y concatenando "px"
  puntero.style.top = y - 5 + "px"; // Establece la posición vertical del puntero restando 5px al valor obtenido y concatenando "px"
});

// Oculta el puntero cuando sale de la página
document.addEventListener("mouseleave", function () {
  // Agrega un evento para detectar cuando el puntero sale de la página
  puntero.style.display = "none"; // Oculta el puntero estableciendo su propiedad display como "none"
});

// Muestra el puntero cuando vuelve a la página
document.addEventListener("mouseenter", function () {
  // Agrega un evento para detectar cuando el puntero vuelve a la página
  puntero.style.display = "block"; // Muestra el puntero estableciendo su propiedad display como "block"
});
