const validate = document.getElementById("validate");
const x = document.getElementById("shoe_size");
const y = document.getElementById("year");

function sum() {
    document.write((((x.value * 2) + 5) * 50) - y.value) + 1766;

}
validate.addEventListener('click', sum)