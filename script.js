const imgDiv = document.querySelector("#s-two-img-container");
const imgDiv2 = document.querySelector("#s-four-img-container");

window.addEventListener("scroll", function() {
    console.log(window.scrollY);

    let offsetY = window.scrollY;

    imgDiv.style.backgroundPositionY = `${offsetY * 0.3}px`;
    imgDiv2.style.backgroundPositionY = `${offsetY * 0.3}px`;
})