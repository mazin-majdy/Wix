let propertiesSection = document.querySelector(".properties");
let realtorsSection = document.querySelector(".realtors");
let button = document.getElementById("button");

let propertiesBoxes = document.querySelectorAll(".properties .box");

let realtorsContents = document.querySelectorAll(".realtors .content");

window.onscroll = function () {
    if (window.scrollY >= propertiesSection.offsetTop - 300) {
        button.style.cssText = "opacity: 1; visibility: block;"
        propertiesBoxes.forEach(box => {
            box.classList.add("active");
        })
    }
    if (window.scrollY < propertiesSection.offsetTop - 400) {
        button.style.cssText = "opacity: 0; visibility: hidden;"
        propertiesBoxes.forEach(box => {
            box.classList.remove("active");
        })
    }

    if (window.scrollY >= realtorsSection.offsetTop - 500) {
        realtorsContents.forEach(content => {
            content.classList.add("active");
        })
    }
    if (window.scrollY < realtorsSection.offsetTop - 600) {
        realtorsContents.forEach(content => {
            content.classList.remove("active");
        })
    }

}
button.onclick = function () {
    window.scrollTo(0, 0)
}

function mouseOver(img) {

    img.style.cssText = 'filter: contrast(200%); border-radius: 10px;';

}
function mouseOut(img) {

    img.style.cssText = 'filter: contrast(100%); border-radius: 0;';

}