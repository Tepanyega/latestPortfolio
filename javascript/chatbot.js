function toggleChatWindow() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.style.display = chatWindow.style.display === 'none' || chatWindow.style.display === '' ? 'block' : 'none';
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const messages = document.getElementById('messages');
    
    if (input.value.trim() !== '') {
        // Display user message
        const userMessage = document.createElement('div');
        userMessage.textContent = `You: ${input.value}`;
        messages.appendChild(userMessage);
        
        // Simulate bot response
        const botResponse = getBotResponse(input.value);
        const botMessage = document.createElement('div');
        botMessage.textContent = `Bot: ${botResponse}`;
        messages.appendChild(botMessage);
        
        input.value = ''; // Clear input
        messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
    }
}

function getBotResponse(userInput) {
    const responses = {
        "hello": "Hi there! How can I help you?",
        "how are you?": "I'm just a bot, but I'm doing well!",
        "help": "Sure! What do you need help with?",
        "bye": "Goodbye! Have a great day!",
    };

    return responses[userInput.toLowerCase()] || "Sorry, I didn't understand that.";
}
