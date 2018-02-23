const validate = document.getElementById("validate");
const age = document.getElementById("age");

function ask() {
    if (age.value > 18) {
        document.write("you are ove 18")

    } else if (age.value < 18) { document.write("you are under 18") }
}
validate.addEventListener('click', ask);