function toggleMenu() {
    const nav = document.getElementById('navLinks');
    const icon = document.getElementById('menuIcon');
    
    nav.classList.toggle('active');
    
    if (nav.classList.contains('active')) {
        icon.textContent = '✖';
    } else {
        icon.textContent = '☰';
    }
}
