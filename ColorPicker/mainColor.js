let colorPicker;
const defaultColor = "#5E57C2";

window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#colorPicker");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateAll, false);
    updateFirst({ target: { value: defaultColor } });
}

function updateFirst(event) {
    const h1 = document.querySelector("#title");
    if (h1) {
        h1.style.color = event.target.value;
    }
}

function updateAll(event) {
    document.querySelectorAll("#title").forEach((h1) => {
        h1.style.color = event.target.value;
    });
}