const sendButton = document.getElementById('enviar');
const message = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

sendButton.addEventListener('click', () => {
  if (message.value !== "") {
    socket.emit("new message", message.value);
    message.value = "";
  }
})

socket.addEventListener('new message', (msg) => {
  const li = document.createElement("li");
  li.textContent = msg;
  li.classList.add("mensagem");
  chat.appendChild(li);
})