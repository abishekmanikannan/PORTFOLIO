const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card => {
    observer.observe(card);
});

/* Button Text Animation */

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseover", () => {
        btn.innerHTML = "Explore Project 🚀";
    });

    btn.addEventListener("mouseout", () => {
        btn.innerHTML = "View Details";
    });

});