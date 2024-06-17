function cambiarColorNegro(event) {
    event.target.style.backgroundColor = 'black';
}

const divs = ['blue', 'red', 'green', 'yellow'];

divs.forEach(id => {
    const div = document.getElementById(id);
    div.addEventListener("click", cambiarColorNegro);
});
