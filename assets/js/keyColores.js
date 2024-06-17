let colorGlobal;

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const keyDiv = document.getElementById('key');

    if (key === 'a') {
        colorGlobal = 'pink';
        keyDiv.style.backgroundColor = colorGlobal;
    } else if (key === 's') {
        colorGlobal = 'orange';
        keyDiv.style.backgroundColor = colorGlobal;
    } else if (key === 'd') {
        colorGlobal = 'skyblue';
        keyDiv.style.backgroundColor = colorGlobal;
    } else if (key === 'q') {
        crearDiv('purple');
    } else if (key === 'w') {
        crearDiv('gray');
    } else if (key === 'e') {
        crearDiv('brown');
    }
});

function crearDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    document.body.appendChild(newDiv);
}
