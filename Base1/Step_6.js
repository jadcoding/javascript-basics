const validate = document.getElementById("validate");
const num3 = document.getElementById("first_number");
const num4 = document.getElementById("second_number");


function divide(event) {

    document.write(num3.value / num4.value)
    event.preventDefault()


}




validate.addEventListener('click', divide);