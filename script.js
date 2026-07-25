const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");


// Dark / Light Mode

themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark");


    if(body.classList.contains("dark")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme","dark");

    }
    else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme","light");

    }

});



// Remember Theme

if(localStorage.getItem("theme") === "dark"){

    body.classList.add("dark");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}




// Scroll Top Button

const topButton = document.getElementById("top-btn");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 300){

        topButton.style.display="block";

    }
    else{

        topButton.style.display="none";

    }


});



topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});





// Simple reveal animation

const sections = document.querySelectorAll(".section");


window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        const position = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(position < screenHeight - 100){

            section.style.opacity="1";
            section.style.transform="translateY(0)";

        }


    });


});




// Initial section animation setup

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="0.8s";

});
// ===== Chatbot =====

const chatToggle = document.getElementById("chat-toggle");
const chatbot = document.querySelector(".chatbot");
const chatClose = document.getElementById("chat-close");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

chatToggle.onclick = () => {
    chatbot.style.display = "block";
};

chatClose.onclick = () => {
    chatbot.style.display = "none";
};

function botReply(message){

    const text = message.toLowerCase();

    if(text.includes("about")){
        return "Mohsin is a Frontend Developer and AI Automation enthusiast based in Bahrain.";
    }

    if(text.includes("skills")){
        return "HTML, CSS, JavaScript, AI Automation and Digital Marketing.";
    }

    if(text.includes("projects")){
        return "Startup Bahrain, Job Automation System and Portfolio Website.";
    }

    if(text.includes("resume")){
        return "Click the Download Resume button on the homepage.";
    }

    if(text.includes("contact") || text.includes("whatsapp") || text.includes("hire")){

    return `You can contact Mohsin on WhatsApp:
https://wa.me/97332364553`;
}

    return "Try asking: About, Skills, Projects, Resume or Contact.";
}

sendBtn.onclick = () => {

    const message = chatInput.value.trim();

    if(message === "") return;

    chatBody.innerHTML += `<div class="user-message">${message}</div>`;

    const reply = botReply(message);

    chatBody.innerHTML += `<div class="bot-message">${reply}</div>`;

    chatInput.value = "";

    chatBody.scrollTop = chatBody.scrollHeight;
};

chatInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        sendBtn.click();
    }
});