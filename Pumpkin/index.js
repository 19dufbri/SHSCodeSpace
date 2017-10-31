let on = true;

function toggleCutout() {
    let elements = document.getElementsByClassName("cutout");
    
    // console.log("Toggling");
    
    for (let i = 0; i < elements.length; i++) {
        if (on) {
            elements[i].style = "background: black";
            on = false;
        } else {
            elements[i].style = "background: yellow";
            on = true;
        }
    }
}

toggleCutout();
