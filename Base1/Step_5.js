const validate = document.getElementById("validate");
const num1 = document.getElementById("first_number");
const num2 = document.getElementById("second_number");

function num() {

    document.write(num1.value * num2.value)
}
validate.addEventListener('click', num);