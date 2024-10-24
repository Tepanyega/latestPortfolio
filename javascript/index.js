
        
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}    




//wrap js code in an event listener for DOMContentLoaded to ensure it runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded",function(){

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-250px";
}

//attach event listeners
document.querySelector(".fas.fa-bars").onclick = openmenu;
document.querySelector(".fas.fa-times").onclick = closemenu;

//closing the sidemenu after the tab is clicked
sidemenu.querySelectorAll("li a").forEach(link => {
    link.addEventListener('click', closemenu);
});
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbxKwdUgVdYRdhrzfnEZ9gPQwv8r3BzjSyfSSv67CsodLNGzTvK3FIKmbJX55dM01Vcq/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {msg.innerHTML = "Message sent successfully"
        setTimeout(function() {
            msg.innerHTML =""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

document.getElementById("btn").addEventListener("click", function(){
    const hidden = document.querySelector(".hidden");  // Select the hidden element

    hidden.classList.toggle("show");  // Toggle the 'show' class
    hidden.style.display = hidden.classList.contains("show") ? "block" : "none";  // Update display based on 'show' class

    // Update button text
    this.textContent = hidden.classList.contains("show") ? "See Less" : "See More";
});




const changingText = document.querySelector('.changing-text');
const texts = ['Developer', 'Designer', ' ']; // Add more texts as needed
let index = 0;

function changeText() {
    changingText.style.opacity = 0; // Fade out
    setTimeout(() => {
        index = (index + 1) % texts.length; // Move to the next text
        changingText.textContent = texts[index]; // Update text
        changingText.style.opacity = 1; // Fade in
    }, 500); // Wait for fade-out duration
}

setInterval(changeText, 2000); // Change text every 2 seconds
