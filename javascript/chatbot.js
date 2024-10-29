
document.addEventListener('DOMContentLoaded', () => {
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        const targetSection = document.getElementById(sectionId);
        targetSection.classList.remove('hidden');
    }

    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('ul.links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('active');
            contactBtn.classList.remove('active');
        });
    });
});

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
            botDiv.innerHTML = `<p>📞 You can contact me via email at samuelmnepe@gmail.com or WhatsApp at +27-75060-9435.</p>`;
            break;
        case '4':
            botDiv.innerHTML = `<p>📝 I worked on projects such as Admin Dashboard, Tinder meets, and E-commerce web apps.</p>`;
            break;
        case '5':
            botDiv.innerHTML = `<p>💬 Please leave your  <span>contact details</span>, and I'll get back to you:</p>`;
            botDiv.innerHTML += `
                <input type="text" id="user-name" placeholder="Your Name" required style="background: #262626;">
                <input type="text" id="user-contact" placeholder="Email..." required style="background: #262626;">
                <button onclick="saveContact()" id="chatbutton"><i class="fa-solid fa-paper-plane"></i></button>`;
            break;
        default:
            botDiv.innerHTML = `<p>Sorry, I didn't understand that. Please choose one of the options.</p>`;
    }

    chatBox.appendChild(botDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}


// Save contact details
function saveContact() {
    var userName = document.getElementById("user-name").value;
    var userContact = document.getElementById("user-contact").value;

    if (userName && userContact) {
        // You can replace this alert with an email notification function in the future
        //alert(`Thank you ${userName}! We'll get back to you at ${userContact}.`);

        // Reset input fields
        document.getElementById("user-name").value = "";
        document.getElementById("user-contact").value = "";

        // Respond with a confirmation message
        var chatBox = document.getElementById("chat-box");
        var confirmationDiv = document.createElement("div");
        confirmationDiv.classList.add("bot-message");
        confirmationDiv.innerHTML = `<p>😊 Your details have been submitted! I will contact you soon.</p>`;
        chatBox.appendChild(confirmationDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    } else {
        alert('Please provide both your name and contact details.');
    }
}
