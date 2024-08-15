function styleEffect() {
    const container = document.getElementById("container")
    container.classList.add("highlighted");
    container.style.color = "blue";
    container.style.backgroundColor = "yellow";
}

function hoverOver() {
    const container = document.getElementById("container");
    container.style.color = "green";
}

function hoverOut() {
    const container = document.getElementById("container");
    container.style.color = "pink";
}
