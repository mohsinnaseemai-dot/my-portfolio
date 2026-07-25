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
