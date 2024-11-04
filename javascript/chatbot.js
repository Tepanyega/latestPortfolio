//chatbot
// Toggle chatbot open and close
function toggleChatbot() {
    var chatbotContainer = document.getElementById("chatbot-container");
    var chatbotIcon = document.getElementById("chatbot-icon");

    if (chatbotContainer.classList.contains("hidden")) {
        chatbotContainer.classList.remove("hidden");
        chatbotContainer.classList.add("active");
        chatbotIcon.style.display = "none";  // Hide icon
    } else {
        chatbotContainer.classList.add("hidden");
        chatbotContainer.classList.remove("active");
        chatbotIcon.style.display = "block";  // Show icon
    }
}

// Handle sending messages and bot responses
function sendMessage(option) {
    var chatBox = document.getElementById("chat-box");

    //clear previous messages
    
    // Display user message
    var userDiv = document.createElement("div");
    userDiv.classList.add("user-message");
    userDiv.innerHTML = `<p>Option ${option} selected.</p>`;
    //chatBox.appendChild(userDiv);

    // Clear previous bot responses
    clearBotResponses();
    // Scroll to bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Bot response after user message
    setTimeout(function () {
        botResponse(option);
    }, 500);
}
// Clear bot responses from the chat box
function clearBotResponses() {
    var chatBox = document.getElementById("chat-box");
    // Get all bot messages and remove them
    var botMessages = chatBox.getElementsByClassName("bot-message");
    while (botMessages.length > 0) {
        botMessages[0].remove();
    }
}
// Bot responses based on user input
function botResponse(option) {
    var chatBox = document.getElementById("chat-box");
    var botDiv = document.createElement("div");
    botDiv.classList.add("bot-message");

    switch (option) {
        case '1':
            botDiv.innerHTML = `<p>🛠️ My skills include HTML, CSS, JavaScript, Java...!</p>`;
            break;
        case '2':
            botDiv.innerHTML = `<p>💼 Former ICT Assistant, providing technical support for the MS Office suite, assisting with email setup and password recovery, and maintaining order in computer labs. Currently a software developer.</p>`;
            break;
        case '3':
            botDiv.innerHTML = `<p>📞 You can contact me via email at <span style="color: #262626;">samuelmonepe@gmail.com</span> or WhatsApp at <span style="color: #262626;">+27-75060-9435.</span></p>`;
            break;
        case '4':
            botDiv.innerHTML = `<p>📝 I worked on projects such as Admin Dashboard, Tinder meets, and E-commerce web apps.</p>`;
            break;
        case '5':
            window.location.hash = '#contact';
            toggleChatbot(); 
            return;
            break;
        default:
            botDiv.innerHTML = `<p>Sorry, I didn't understand that. Please choose one of the options.</p>`;
    }

    chatBox.appendChild(botDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}