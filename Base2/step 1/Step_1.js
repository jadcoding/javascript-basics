const x = document.querySelector("#image1")


function show() {
    this.src = "images/image1_2.jpg";
}
x.addEventListener('mouseover', show);