document.addEventListener("DOMContentLoaded", function () {
    let menuBtn = document.querySelector("#menu-btn");
    let navbar = document.querySelector(".navbar");

    if (!menuBtn || !navbar) {
        console.error("Menu button or navbar not found!");
        return;
    }

    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuBtn.classList.toggle("fa-times"); // Toggles icon between bars and close
    });
});


    // Smooth Scrolling
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Validation
    let contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let name = document.querySelector('input[type="text"]').value;
            let email = document.querySelector('input[type="email"]').value;
            let message = document.querySelector("textarea").value;

            if (name === '' || email === '' || message === '') {
                event.preventDefault();
                alert('Please fill out all fields!');
            }
        });
    }
;
