const stammtischForm = document.querySelector('[data-js="stammtischForm"]')

stammtischForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    event.target.reset();

    const chatInput = data.stammtischChatInput;

    const chatMessageBox = document.createElement('div');
    const chatMessageInput = document.createElement('p');

chatMessageBox.classList.add('stammtischSendedMessageBox');
chatMessageInput.classList.add('stammtischSendedMessageInput');


chatMessageInput.innerText = chatInput;

document.body.append(chatMessageBox);
chatMessageBox.append(chatMessageInput);
});