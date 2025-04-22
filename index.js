let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
let btnOpen = document.querySelector("#btnOpen")
let btnClosed = document.querySelector("#btnClosed")
   
btnOpen.addEventListener("click", openScren)
btnClosed.addEventListener("click", closedScreen)

function openScren (){
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
}
function closedScreen(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
}