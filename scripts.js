

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Only prevent default for anchor links within the same page
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add hover effect to media cards
    const mediaCards = document.querySelectorAll('.media-card');
    mediaCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });

    // Add click effect to interest cards
    const interestCards = document.querySelectorAll('.interest-card');
    interestCards.forEach(function(card) {
        card.addEventListener('click', function() {
            const link = this.querySelector('a');
            if (link) {
                window.location.href = link.getAttribute('href');
            }
        });
    });

    // Scroll to top functionality
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            document.body.style.scrollBehavior = 'smooth';
        }
    });

    // Image load error handling (in case placeholder images don't load)
    const images = document.querySelectorAll('.media-image');
    images.forEach(function(img) {
        img.addEventListener('error', function() {
            this.style.backgroundColor = '#ddd';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
        });
    });

    // Add animation on page load
    const cards = document.querySelectorAll('.media-card, .interest-card, .intro-box');
    cards.forEach(function(card, index) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(function() {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });

    // Welcome message on homepage
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        console.log('Welcome to my personal homepage! 🎉');
        console.log('Feel free to explore and see what I love!');
    }
;
