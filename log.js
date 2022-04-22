const button = document.querySelector("button")
button.addEventListener("click", changeColor)


function changeColor(){
    const color = document.querySelector("input").value
    const body = document.querySelector("body")
    body.style.backgroundColor = color
}