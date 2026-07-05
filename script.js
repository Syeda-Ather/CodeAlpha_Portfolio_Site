// Mobile menu ko open/close karne ka function
function toggleMenu() {
    let navLinks = document.getElementById("navLinks");
    
    // Agar screen mobile size (768px se choti) hai tabhi active class toggle karein
    if (window.innerWidth <= 768) {
        navLinks.classList.toggle("active");
    }
}