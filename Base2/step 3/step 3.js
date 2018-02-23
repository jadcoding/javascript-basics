const x = document.getElementById("name")
const y = document.getElementById("jad")

function change() {

    y.innerHTML = x.value
}

addEventListener('change', change)