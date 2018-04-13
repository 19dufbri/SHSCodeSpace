let on = true;

function toggleCutout() {
    let elements = document.getElementsByClassName("cutout");

    for (let i = 0; i < elements.length; i++) {
        if (on) {
            elements[i].style = "background: black";
        } else {
            elements[i].style = "background: yellow";
        }
    }
    
    on = !on;
}

toggleCutout();
