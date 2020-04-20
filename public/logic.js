let socket = io()
let name = ""

window.onload = () => {
    name = prompt("What's your name?")
}

socket.on("message", (incoming) => {
    console.log(name)
    let list = document.getElementById("messages")
    let listItem = document.createElement("li")
    listItem.innerText = incoming.name + ": " + incoming.message
    list.appendChild(listItem)
})

function sendMessage() {
    let input = document.getElementById("m")
    let message = input.value
    input.value = ""
    console.log(message)
    socket.emit("message", {name, message })
}