// Función original
// function pintar(){
//    ele.style.backgroundColor = 'yellow';
// }

// 3.2 Modificada para recibir el elemento clickeado
function pintar(element) {
    element.style.backgroundColor = 'yellow';
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
    pintar(this);
});

// 3.3 Modificada para recibir un color como argumento
function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
}

ele.addEventListener("click", function() {
    pintar(this, 'yellow');
});
