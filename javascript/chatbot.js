
// document.addEventListener('DOMContentLoaded', () => {
//     function showSection(sectionId) {
//         const sections = document.querySelectorAll('.section');
//         sections.forEach(section => {
//             section.classList.add('hidden');
//         });
//         const targetSection = document.getElementById(sectionId);
//         targetSection.classList.remove('hidden');
//     }

//     const dropdown = document.querySelector('.dropdown');
//     dropdown.addEventListener('click', () => {
//         dropdown.classList.toggle('active');
//     });

//     const navLinks = document.querySelectorAll('ul.links a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             links.classList.remove('active');
//             contactBtn.classList.remove('active');
//         });
//     });
// });

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

    // Display user message
    var userDiv = document.createElement("div");
    userDiv.classList.add("user-message");
    userDiv.innerHTML = `<p>Option ${option} selected.</p>`;
    //chatBox.appendChild(userDiv);

    // Scroll to bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Bot response after user message
    setTimeout(function () {
        botResponse(option);
    }, 500);
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
            botDiv.innerHTML = `<p>💼 I am a software developer!</p>`;
            break;
        case '3':
            botDiv.innerHTML = `<p>📞 You can contact me via email at samuelmonepe@gmail.com or WhatsApp at +27-75060-9435.</p>`;
            break;
        case '4':
            botDiv.innerHTML = `<p>📝 I worked on projects such as Admin Dashboard, Tinder meets, and E-commerce web apps.</p>`;
            break;
        case '5':
                // navigate to the contact section
                window.location.hash = '#contact';
                
                // hide the chatbot
                toggleChatbot(); 
                return;
                break;
        default:
            botDiv.innerHTML = `<p>Sorry, I didn't understand that. Please choose one of the options.</p>`;
    }

    chatBox.appendChild(botDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
