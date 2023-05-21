// Selecciona el elemento del puntero
var puntero = document.createElement("div");
puntero.style.position = "fixed";
puntero.style.width = "10px";
puntero.style.height = "10px";
puntero.style.borderRadius = "50%";
puntero.style.backgroundColor = "yellow";
puntero.style.pointerEvents = "none";
puntero.style.zIndex = "9999";

// Agrega el puntero a la página
document.body.appendChild(puntero);

// Maneja el movimiento del puntero
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;

  // Actualiza la posición del puntero
  puntero.style.left = x - 5 + "px";
  puntero.style.top = y - 5 + "px";
});

// Oculta el puntero cuando sale de la página
document.addEventListener("mouseleave", function () {
  puntero.style.display = "none";
});

// Muestra el puntero cuando vuelve a la página
document.addEventListener("mouseenter", function () {
  puntero.style.display = "block";
});
