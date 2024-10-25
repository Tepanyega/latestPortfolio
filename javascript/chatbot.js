
// Define the function before using it
function showSection(sectionId) {
    // Hide all sections first
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the clicked section
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.remove('hidden');
}

// Your dropdown menu functionality
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

// Close the menu when a link is clicked (optional for better UX)
const navLinks = document.querySelectorAll('ul.links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        links.classList.remove('active');
        contactBtn.classList.remove('active');
    });
});
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

document.addEventListener('DOMContentLoaded', function() {
    const aboutBox = document.querySelector('.about-box');

    // Reveal section on scroll
    window.addEventListener('scroll', () => {
        const aboutPosition = aboutBox.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (aboutPosition < screenPosition) {
            aboutBox.style.opacity = '1';
            aboutBox.style.transform = 'translateY(0)';
        } else {
            aboutBox.style.opacity = '0';
            aboutBox.style.transform = 'translateY(20px)';
        }
    });

    // Hover glow effect for skills
    const skillElements = document.querySelectorAll('.skill');
    skillElements.forEach(skill => {
        skill.addEventListener('mouseover', () => {
            skill.style.textShadow = '0 0 10px #0073e6';
        });
        skill.addEventListener('mouseout', () => {
            skill.style.textShadow = 'none';
        });
    });
});


// Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modals = document.querySelectorAll('.modal');
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const closeButtons = document.querySelectorAll('.close');

    // Open modal when "Read More" is clicked
    readMoreButtons.forEach((btn) => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        });
    });

    // Close modal when "X" is clicked
    closeButtons.forEach((btn) => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        modals.forEach((modal) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});


    // Mobile Menu Toggle
    document.getElementById('mobileMenuIcon').onclick = function() {
        const navbar = document.getElementById('navbar');
        navbar.classList.toggle('active'); // Toggle the 'active' class for styles
    };

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic Resizing
    window.addEventListener('resize', function() {
        const navbar = document.getElementById('navbar');
        
        if (window.innerWidth > 768) {
            navbar.classList.remove('active'); // Ensure the navbar is visible on larger screens
        }
    });

    // Initial check for screen size on page load
    window.dispatchEvent(new Event('resize'));

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


// Toggle menu options
function toggleMenu() {
    var optionsList = document.getElementById("options-list");
    var menuButton = document.getElementById("menu-toggle");

    if (optionsList.classList.contains("hidden")) {
        optionsList.classList.remove("hidden");
        menuButton.textContent = "Hide Options";
    } else {
        optionsList.classList.add("hidden");
        menuButton.textContent = "Show Options";
    }
}

// Handle sending messages and bot responses
function sendMessage() {
    var userMessage = document.getElementById("user-message").value;
    var chatBox = document.getElementById("chat-box");

    if (userMessage === "") {
        return;
    }

    // Display user message
    var userDiv = document.createElement("div");
    userDiv.classList.add("user-message");
    userDiv.innerHTML = `<p>${userMessage}</p>`;
    chatBox.appendChild(userDiv);

    // Clear input field
    document.getElementById("user-message").value = "";

    // Scroll to bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Bot response after user message
    setTimeout(function () {
        botResponse(userMessage);
    }, 500);
}

// Bot responses based on user input
function botResponse(message) {
    var chatBox = document.getElementById("chat-box");
    var botDiv = document.createElement("div");
    botDiv.classList.add("bot-message");

    if (message === "1") {
        botDiv.innerHTML = `<p>🛠️ My skills include HTML, CSS, JavaScript, Python, and more!</p>`;
    } else if (message === "2") {
        botDiv.innerHTML = `<p>💼 I have experience working as an IT Technician and Web Developer. I've also participated in various hackathons and tech events!</p>`;
    } else if (message === "3") {
        botDiv.innerHTML = `<p>📞 You can contact me via email at ntshayisabuhle@gmail.com or WhatsApp at +27-1234-5678.</p>`;
    } else if (message === "4") {
        botDiv.innerHTML = `<p>📝 I worked on projects such as IMS (Employee Clocking System), Secure Academy, and Departmental Websites.</p>`;
    } else if (message === "5") {
        botDiv.innerHTML = `<p>🕐 I'm available Monday to Friday, 9 AM - 5 PM.</p>`;
    } else if (message === "6") {
        botDiv.innerHTML = `<p>💬 Please leave your name and contact details, and I'll get back to you:</p>`;
        // Input form for contact details
        botDiv.innerHTML += `
            <input type="text" id="user-name" placeholder="Your Name" required>
            <input type="text" id="user-contact" placeholder="Your Contact Details (Email/Phone)" required>
            <button onclick="saveContact()">Submit</button>`;
    } else {
        botDiv.innerHTML = `<p>Sorry, I didn't understand that. Please choose one of the options: 1, 2, 3, 4, 5, or 6.</p>`;
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
        alert(`Thank you ${userName}! We'll get back to you at ${userContact}.`);

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
// humburgar
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.links');
    const menuIcon = document.getElementById('menu');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
});