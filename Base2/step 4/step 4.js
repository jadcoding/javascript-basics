const name = document.getElementById("name")
const surname = document.getElementById("surname")
const city = document.getElementById("city")
const x = document.querySelector("button")




function r() {


    if (confirm()) {
        name.value = surname.value = city.value = ""

    }
}




x.addEventListener('click', r)