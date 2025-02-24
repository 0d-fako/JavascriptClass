
document.addEventListener("DOMContentLoaded", function() {
    
    // const button = document.querySelector("button");

    const hamburger = document.querySelector('.hamburger');
    const navContainer = document.querySelector('.nav-container');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navContainer.classList.toggle('active');
    });

    button.addEventListener("click", function() {
        alert("Button clicked! More content coming soon...");
    });
});
