console.log("jad")

const name = document.getElementById("name")
const surname = document.getElementById("surname")
const city = document.getElementById("city")
const validate = document.getElementById("validate")

function ask() {



    alert("your name is " + name.value + " " + surname.value + " you are from " + city.value)
}
validate.addEventListener('click', ask)