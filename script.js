document.addEventListener('DOMContentLoaded', function() {
    // Animate cards and stats
    const animateElements = document.querySelectorAll('.stats-card, .card, .feature-card');
    animateElements.forEach((el, index) => {
        el.classList.add('animate-fade');
        el.style.animationDelay = `${index * 0.1}s`;
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if(this.getAttribute('href') === '#') return;
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple login form validation
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login successful!\n(Backend integration needed for real login)');
        var modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        modal.hide();
    });

    // Simple register form validation
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const pw = document.getElementById('registerPassword').value;
        const cpw = document.getElementById('confirmPassword').value;
        if(pw !== cpw) {
            alert('Passwords do not match!');
            return;
        }
        alert('Registration successful!\n(Backend integration needed for real registration)');
        var modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
        modal.hide();
    });
});
