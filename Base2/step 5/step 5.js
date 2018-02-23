const x = document.getElementsByClassName("container")
const y = document.queryselctor("#image")



function show() {

    for (i = 1; i < y.length; i++) {
        y.src = "images/image1_2.jpg" + i++;

    }
}
addEventListener('mouseover', show)